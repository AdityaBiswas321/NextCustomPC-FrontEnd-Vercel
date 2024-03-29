import "../styles/globals.css";
import "../styles/bootstrap.min.css";
import Head from "next/head";
import { Provider } from "react-redux";
import { wrapper } from "../store";
import Layout from "../components/Layout/Layout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { AnimatePresence } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";

const stripePromise = loadStripe(
  "pk_test_51JYnmdLGF4kichPFTGiaPYHrXX6PYQZ3TkGeU8UA3pk9hwxuff6sxTp4BtmEunnWw8K74s6KQtivj4E0KSbT42Ov00K5LpCIM2"
);

//Layout/Stripe/AnimatePresence/ParallaxProvider(another library used, remove in future)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script>
      </Head>
      <Layout>
        <Elements stripe={stripePromise}>
          <AnimatePresence exitBeforeEnter>
            <ParallaxProvider>
              <Component {...pageProps} />
            </ParallaxProvider>
          </AnimatePresence>
        </Elements>
      </Layout>
    </>
  );
}

//Needed to use Redux with NextJS, wrapper specifically.
export default wrapper.withRedux(MyApp);
