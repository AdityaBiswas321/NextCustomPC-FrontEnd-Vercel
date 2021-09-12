import "../styles/globals.css";
import "../styles/bootstrap.min.css";
import Head from "next/head";
import { Provider } from "react-redux";
import { wrapper } from "../store";
import Layout from "../components/Layout/Layout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_live_51JYnmdLGF4kichPFG0rO3QfGD0ALUGmo8b8yCiWuR5X05O6M1vVYfSsKbL8GxgnVVwANYIoHZowXFRtgI0XvYl9T00sTiYyH8U"
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script>
      </Head>
      <Layout>
        <Elements stripe={stripePromise}>
          <Component {...pageProps} />
        </Elements>
      </Layout>
    </>
  );
}

export default wrapper.withRedux(MyApp);
