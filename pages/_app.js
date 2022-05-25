import { DefaultSeo, LocalBusinessJsonLd } from 'next-seo'
import SEO from '../next-seo.config'
import '../styles/globals.css'

const { metas, microdatas } = SEO;

export default function MercadoLibre({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...metas} />
      <LocalBusinessJsonLd {...microdatas.LocalBusinessJsonLd} />
      <Component {...pageProps} />
    </>
  );
}
