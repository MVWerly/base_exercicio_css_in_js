import { useState, FormEvent } from 'react'
import { Form, InputForm, Buttonform } from './styles'

type Props = {
  whenSearching: (termo: string) => void
}

const FormVacancies = ({ whenSearching }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const whenSubmiting = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    whenSearching(termo.toLocaleLowerCase())
  }

  return (
    <Form onSubmit={whenSubmiting}>
      <InputForm
        onChange={({ target }) => setTermo(target.value)}
        placeholder="Front-end, fullstack, node, design"
      />
      <Buttonform type={'submit'}>Pesquisar</Buttonform>
    </Form>
  )
}

export default FormVacancies
