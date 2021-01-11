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
      <meta name="description" content={baseInfo.description} />
      <meta charSet="utf-8" />
      <meta property="og:type" content="website" key="ogtype" />
      <meta property="og:description" content={baseInfo.description} key="ogdesc" />
      <meta property="og:url" content={baseInfo.url} key="ogurl" />
      <meta property="og:site_name" content={baseInfo.name} key="ogsitename" />
      <meta name="author" content={baseInfo.author} />
      <meta name="keywords" content={baseInfo.keywords} />
    </Head>
  )
}

export default Seo
