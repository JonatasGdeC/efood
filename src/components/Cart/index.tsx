import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../CardPrato'
import { usePurchaseMutation } from '../../services/api'

import Button from '../Button'
import * as S from './styles'
import imgExcluir from '../../assets/images/lixeira.svg'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [entrega, setEntrega] = useState(false)
  const [pagamento, setPagamento] = useState(false)
  const [purchase] = usePurchaseMutation()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPreco = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const form = useFormik({
    initialValues: {
      receiptName: '',
      address: '',
      city: '',
      addressCode: '',
      addressNumber: '',
      addressComplement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expireMonth: '',
      expireYear: ''
    },
    validationSchema: Yup.object({
      receiptName: Yup.string().min(5).required(),
      address: Yup.string().min(5).max(50).required(),
      city: Yup.string().min(3).max(50).required(),
      addressCode: Yup.string().min(9).required(),
      addressNumber: Yup.string().min(1).max(10).required(),
      addressComplement: Yup.string().max(20),
      cardName: Yup.string().min(3).max(30).required(),
      cardNumber: Yup.string().min(19).required(),
      cardCode: Yup.string().min(3).required(),
      expireMonth: Yup.string().min(2).required(),
      expireYear: Yup.string().min(2).required()
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiptName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.addressCode,
            number: values.addressNumber,
            complement: values.addressComplement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expireMonth),
              year: Number(values.expireYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const checkInputIsError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid
    return hasError
  }

  const checkInputEntrega = () => {
    if (
      checkInputIsError('receiptName') ||
      form.values.receiptName === '' ||
      checkInputIsError('address') ||
      form.values.address === '' ||
      checkInputIsError('city') ||
      form.values.address === '' ||
      checkInputIsError('addressCode') ||
      form.values.addressCode === '' ||
      checkInputIsError('addressNumber') ||
      form.values.addressNumber === ''
    ) {
      setPagamento(false)
    } else {
      setPagamento(true)
    }
  }

  return (
    <S.CartContainer className={isOpen ? 'is--open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Cart>
        <>
          {items.length > 0 ? (
            <>
              {!entrega ? (
                <>
                  <S.Lista>
                    {items.map((prato) => (
                      <S.Item key={prato.id}>
                        <img src={prato.foto} alt={prato.nome} />
                        <div>
                          <h4>{prato.nome}</h4>
                          <p>{formataPreco(prato.preco)}</p>
                        </div>
                        <button
                          title="Clique aqui para excluir este produto"
                          onClick={() => removeItem(prato.id)}
                        >
                          <img src={imgExcluir} alt="Excluir" />
                        </button>
                      </S.Item>
                    ))}
                  </S.Lista>
                  <S.Total>
                    <p>Valor total</p>
                    <p>{formataPreco(getTotalPreco())}</p>
                  </S.Total>
                  <Button
                    type="button"
                    width="all"
                    onClick={() => setEntrega(true)}
                  >
                    Continuar com a entrega
                  </Button>
                </>
              ) : (
                <>
                  {!pagamento ? (
                    <>
                      <S.Form>
                        <h3>Entrega</h3>
                        <S.Input>
                          <label htmlFor="receiptName">Quem irá receber</label>
                          <input
                            name="receiptName"
                            type="text"
                            id="receiptName"
                            value={form.values.receiptName}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputIsError('receiptName')
                                ? 'inputIsError'
                                : ''
                            }
                          />
                        </S.Input>
                        <S.Input>
                          <label htmlFor="address">Endereço</label>
                          <input
                            name="address"
                            type="text"
                            id="address"
                            value={form.values.address}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputIsError('address') ? 'inputIsError' : ''
                            }
                          />
                        </S.Input>
                        <S.Input>
                          <label htmlFor="city">Cidade</label>
                          <input
                            name="city"
                            type="text"
                            id="city"
                            value={form.values.city}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputIsError('city') ? 'inputIsError' : ''
                            }
                          />
                        </S.Input>
                        <S.InputGroup>
                          <S.Input>
                            <label htmlFor="addressCode">CEP</label>
                            <input
                              name="addressCode"
                              type="text"
                              id="addressCode"
                              value={form.values.addressCode}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputIsError('addressCode')
                                  ? 'inputIsError'
                                  : ''
                              }
                            />
                          </S.Input>
                          <S.Input>
                            <label htmlFor="addressNumber">Número</label>
                            <input
                              name="addressNumber"
                              type="text"
                              id="addressNumber"
                              value={form.values.addressNumber}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputIsError('addressNumber')
                                  ? 'inputIsError'
                                  : ''
                              }
                            />
                          </S.Input>
                        </S.InputGroup>
                        <S.Input>
                          <label htmlFor="addressComplement">
                            Complemento (opcional)
                          </label>
                          <input
                            name="addressComplement"
                            type="text"
                            id="addressComplement"
                            value={form.values.addressComplement}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputIsError('addressComplement')
                                ? 'inputIsError'
                                : ''
                            }
                          />
                        </S.Input>
                        <Button
                          type="button"
                          width="all"
                          onClick={() => checkInputEntrega()}
                        >
                          Continuar com pagamento
                        </Button>
                        <Button
                          type="button"
                          width="all"
                          onClick={() => setEntrega(false)}
                        >
                          Voltar para o carrinho
                        </Button>
                      </S.Form>
                    </>
                  ) : (
                    <>
                      <S.Form onSubmit={form.handleSubmit}>
                        <h3>Pagamento - Valor a pagar </h3>
                        <S.Input>
                          <label htmlFor="cardName">Nome no cartão</label>
                          <input
                            name="cardName"
                            type="text"
                            id="cardName"
                            value={form.values.cardName}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputIsError('cardName')
                                ? 'inputIsError'
                                : ''
                            }
                          />
                        </S.Input>
                        <S.InputGroup>
                          <S.Input>
                            <label htmlFor="cardNumber">Número do cartão</label>
                            <input
                              name="cardNumber"
                              type="text"
                              id="cardNumber"
                              value={form.values.cardNumber}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputIsError('cardNumber')
                                  ? 'inputIsError'
                                  : ''
                              }
                            />
                          </S.Input>
                          <S.Input>
                            <label htmlFor="cardCode">CVV</label>
                            <input
                              name="cardCode"
                              type="text"
                              id="cardCode"
                              value={form.values.cardCode}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputIsError('cardCode')
                                  ? 'inputIsError'
                                  : ''
                              }
                            />
                          </S.Input>
                        </S.InputGroup>
                        <S.InputGroup>
                          <S.Input>
                            <label htmlFor="expireMonth">
                              Mês de vencimento
                            </label>
                            <input
                              name="expireMonth"
                              type="text"
                              id="expireMonth"
                              value={form.values.expireMonth}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputIsError('expireMonth')
                                  ? 'inputIsError'
                                  : ''
                              }
                            />
                          </S.Input>
                          <S.Input>
                            <label htmlFor="expireYear">
                              Ano de vencimento
                            </label>
                            <input
                              name="expireYear"
                              type="text"
                              id="expireYear"
                              value={form.values.expireYear}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputIsError('expireYear')
                                  ? 'inputIsError'
                                  : ''
                              }
                            />
                          </S.Input>
                        </S.InputGroup>
                        <button type="submit">Finalizar Pagamento</button>
                        <Button
                          type="button"
                          width="all"
                          onClick={() => setPagamento(false)}
                        >
                          Voltar para a edição de endereço
                        </Button>
                      </S.Form>
                    </>
                  )}
                </>
              )}
            </>
          ) : (
            <p className="empty-text">
              O carrinho está vazio, adicione pelo menos um produto para
              continuar com a compra
            </p>
          )}
        </>
      </S.Cart>
    </S.CartContainer>
  )
}

export default Cart
