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
    </Head>
  )
}

export default Seo
