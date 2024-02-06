import { TagContainer, LinkCardapio } from './styles'

export type Props = {
  type: 'info' | 'link'
  to?: string
  children: string
}

const Tag = ({ type, to, children }: Props) => {
  if (type === 'info') {
    return <TagContainer>{children}</TagContainer>
  }
  return <LinkCardapio to={to as string}>{children}</LinkCardapio>
}

export default Tag
