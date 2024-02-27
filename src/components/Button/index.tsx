import * as S from './styles'

export type Props = {
  assignment: 'button' | 'link'
  type?: () => void
  width?: 'all'
  to?: string
  children: string | JSX.Element
  onClick?: () => void
}

const Button = ({ assignment, type, width, to, children, onClick }: Props) => {
  if (assignment === 'link') {
    return <S.ButtonLink to={to as string}>{children}</S.ButtonLink>
  }

  return (
    <S.Button width={width} assignment="button" onClick={onClick} type={type}>
      {children}
    </S.Button>
  )
}

export default Button
