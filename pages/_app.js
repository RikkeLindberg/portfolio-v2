import Container from "../components/layout/container/Container";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
