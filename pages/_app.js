import '../styles/globals.css'
import LayoutMain from '../layouts/LayoutMain'

function MyApp({ Component, pageProps }) {
  return (
    <LayoutMain>
      <Component {...pageProps} />
    </LayoutMain>
  )
}

export default MyApp
