import * as S from './styles'

type Props = {
  type: 'entrega' | 'pagamento'
  total?: string
}

const Pagamento = ({ type, total }: Props) => {
  if (type === 'entrega') {
    return (
      <>
        <S.Form>
          <h3>Entrega</h3>
          <S.Input>
            <label htmlFor="recebimento">Quem irá receber</label>
            <input type="text" id="recebimento" />
          </S.Input>
          <S.Input>
            <label htmlFor="endereco">Endereço</label>
            <input type="text" id="endereco" />
          </S.Input>
          <S.Input>
            <label htmlFor="cidade">Cidade</label>
            <input type="text" id="cidade" />
          </S.Input>
          <S.InputGroup>
            <S.Input>
              <label htmlFor="cep">CEP</label>
              <input type="text" id="cep" />
            </S.Input>
            <S.Input>
              <label htmlFor="numero">Número</label>
              <input type="text" id="Número" />
            </S.Input>
          </S.InputGroup>
          <S.Input>
            <label htmlFor="complemento">Complemento (opcional)</label>
            <input type="text" id="complemento" />
          </S.Input>
        </S.Form>
      </>
    )
  }

  return (
    <>
      <S.Form>
        <h3>Pagamento - Valor a pagar {total}</h3>
        <S.Input>
          <label htmlFor="nomeCartao">Nome no cartão</label>
          <input type="text" id="nomeCartao" />
        </S.Input>
        <S.InputGroup>
          <S.Input>
            <label htmlFor="numeroCartao">Número do cartão</label>
            <input type="text" id="numeroCartao" />
          </S.Input>
          <S.Input>
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" className="cvv" />
          </S.Input>
        </S.InputGroup>
        <S.InputGroup>
          <S.Input>
            <label htmlFor="mesVencimento">Mês de vencimento</label>
            <input type="text" id="mesVencimento" />
          </S.Input>
          <S.Input>
            <label htmlFor="anoVencimento">Ano de vencimento</label>
            <input type="text" id="anoVencimento" />
          </S.Input>
        </S.InputGroup>
      </S.Form>
    </>
  )
}

export default Pagamento
