import { ThemeProvider } from 'styled-components'

import Header from './containers/Header'
import Hero from './containers/Hero'
import ListVacancies from './containers/ListVacancies'
import standard from './theme/standard'

import GlobalStyles, { Container } from './styles'

function App() {
  return (
    <ThemeProvider theme={standard}>
      <GlobalStyles />
      <Header />
      <Hero />
      <Container>
        <ListVacancies />
      </Container>
    </ThemeProvider>
  )
}

export default App
