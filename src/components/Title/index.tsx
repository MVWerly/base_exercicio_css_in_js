import { TypeTitle } from './styles'

export type Props = {
  children: string
  fontSize?: number
  fontFamily?: 'Gloock' | 'Lato'
}

const Title = (props: Props) => (
  <TypeTitle fontFamily={props.fontFamily} fontSize={props.fontSize}>
    {props.children}
  </TypeTitle>
)

export default Title
