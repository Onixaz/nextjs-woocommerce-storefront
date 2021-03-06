import React from 'react'
import Head from 'next/head'

interface CustomHeadProps {
  title: string
  description: string
}

const PageTitle: React.FC<CustomHeadProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  )
}

export default PageTitle
