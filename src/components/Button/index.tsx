import * as S from './styles'

export type Props = {
  type: 'button' | 'link'
  width?: 'all'
  to?: string
  children: string | JSX.Element
  onClick?: () => void
}

const Button = ({ type, width, to, children, onClick }: Props) => {
  if (type === 'link') {
    return (
      <S.ButtonLink to={to as string} type="link">
        {children}
      </S.ButtonLink>
    )
  }

  return (
    <S.Button width={width} type="button" onClick={onClick}>
      {children}
    </S.Button>
  )
}

export default Button
