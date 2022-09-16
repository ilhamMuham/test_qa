import '../../styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { Context } from '../components'

function MyApp({ Component, pageProps }) {
  return(
    <Context>
      <Component {...pageProps} />
    </Context>
  )
}

export default MyApp
