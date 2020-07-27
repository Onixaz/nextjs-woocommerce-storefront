import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import LayoutElement from '../styles/LayoutElement'

interface LayoutProps {
  pageTitle: string
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <>
      <Head>
        <title>Next.js | {pageTitle}</title>
      </Head>
      <LayoutElement>
        <Header />
        <main>{children}</main>
        <Footer />
      </LayoutElement>
    </>
  )
}

export default Layout
