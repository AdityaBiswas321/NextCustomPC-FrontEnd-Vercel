import "../styles/globals.css";
import "../styles/bootstrap.min.css";
import Head from "next/head";
import { Provider } from "react-redux";
import { wrapper } from "../store";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default wrapper.withRedux(MyApp);
