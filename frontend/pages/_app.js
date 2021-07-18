// import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import { Provider } from 'react-redux'
import { wrapper } from '../store'

function MyApp({ Component, pageProps }) {
  
  return (
    
    <Component {...pageProps} />
  
  )
  
  
  
}

export default wrapper.withRedux(MyApp);
