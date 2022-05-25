/* eslint-disable import/no-anonymous-default-export */
export default {
  metas: {
    titleTemplate: process.env.NEXT_PUBLIC_SEO_TITLE,
    title: process.env.NEXT_PUBLIC_SEO_TITLE,
    description: process.env.NEXT_PUBLIC_SEO_DESCRIPTION,
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
    openGraph: {
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_STATIC_DIR}${process.env.NEXT_PUBLIC_SEO_IMAGE_SHARE}`,
          width: 200,
          height: 200,
          alt: process.env.NEXT_PUBLIC_SEO_TITLE,
        },
      ],
    },
    twitter: {
      handle: '@handle',
      site: process.env.NEXT_PUBLIC_SEO_TWITTER_AUTHOR,
      cardType: 'summary_large_image',
    },
    additionalLinkTags: [
      {
        rel: 'icon',
        href: `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_STATIC_DIR}${process.env.NEXT_PUBLIC_SEO_IMAGE}`,
      },
    ],
    additionalMetaTags: [
      {
        httpEquiv: "x-ua-compatible",
        content: "IE=edge; chrome=1",
      },
      {
        name: "theme-color",
        content: process.env.NEXT_PUBLIC_SEO_THEME_COLOR,
      },
      {
        name: "google-site-verification",
        content: process.env.NEXT_PUBLIC_SEO_GOOGLE_SITE_VERIFICATION,
      },
    ],
  },
  microdatas: {
    LocalBusinessJsonLd: {
      type: "Organization",
      id: process.env.NEXT_PUBLIC_BASE_URL,
      name: process.env.NEXT_PUBLIC_SEO_NAME,
      description: process.env.NEXT_PUBLIC_SEO_DESCRIPTION,
      url: process.env.NEXT_PUBLIC_BASE_URL,
      logo: {
        type: "ImageObject",
        id: `${process.env.NEXT_PUBLIC_BASE_URL}/#logo`,
        inLanguage: process.env.NEXT_PUBLIC_SEO_LOCALE,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_SEO_IMAGE}`,
        width: 64,
        height: 64,
        caption: process.env.NEXT_PUBLIC_SEO_NAME
      },
      image: {
        id: `${process.env.NEXT_PUBLIC_BASE_URL}#logo`,
      },
      sameAs: [process.env.NEXT_PUBLIC_SEO_TWITTER_URL, process.env.NEXT_PUBLIC_SEO_FACEBOOK_URL, process.env.NEXT_PUBLIC_SEO_YOUTUBE_URL],
      description: process.env.NEXT_PUBLIC_SEO_DESCRIPTION,
    }
  }
}
