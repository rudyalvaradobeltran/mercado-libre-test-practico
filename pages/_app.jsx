import { Provider } from "react-redux";
import { DefaultSeo, LocalBusinessJsonLd } from "next-seo";
import SEO from "../next-seo.config";
import "../styles/globals.css";
import Store from "../redux/Store";
import AppBar from "../components/AppBar";

const MercadoLibre = ({ Component, pageProps }) => {
  const { metas, microdatas } = SEO;

  return (
    <Provider store={Store}>
      <DefaultSeo {...metas} />
      <LocalBusinessJsonLd {...microdatas.LocalBusinessJsonLd} />
      <AppBar />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MercadoLibre;
