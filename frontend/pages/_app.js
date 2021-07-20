import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { wrapper } from '../store'

function MyApp({ Component, pageProps }) {
  
  return (
    <>
    <Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" /></Head>
    <Component {...pageProps} />
  
    </>
    
  )
  
  
  
}

export default wrapper.withRedux(MyApp);
