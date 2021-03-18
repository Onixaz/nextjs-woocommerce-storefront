import Head from 'next/head'
import React from 'react'

interface CustomHeadProps {}

const baseInfo = {
  author: 'Paju',
  titlePrefix: 'Paju Studios',
  name: 'pajustudios.eu',
  url: 'https://wwww.pajustudios.eu',
  description: 'Eu design studios',
  keywords: `Design, Web Development`,
}

const Seo: React.FC<CustomHeadProps> = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={baseInfo.description} />
      <meta property="og:url" content={baseInfo.url} />
      <meta property="og:site_name" content={baseInfo.name} />
      <meta name="author" content={baseInfo.author} />
      <meta name="keywords" content={baseInfo.keywords} />
      {/* prefech products if using client side fetching (product prices/ images) */}
      {/* <link rel="preload" href="/api/products/retrieve" as="fetch" crossOrigin="anonymous"></link> */}
      <link
        rel="preload"
        href={`${process.env.NEXTAUTH_URL}/api/shipping/retrieve`}
        as="fetch"
        crossOrigin="anonymous"
      />
    </Head>
  )
}

export default Seo
