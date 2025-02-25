import { Container } from '../../styles'
import { FormControl } from './styles'

type Props = {
  children: JSX.Element
}

const FormHero = (props: Props) => (
  <FormControl>
    <Container>{props.children}</Container>
  </FormControl>
)

export default FormHero
