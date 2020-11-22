import React, { useState } from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import LayoutElement from '../styles/LayoutElement'

//import Navbar from './Navbar'

import dynamic from 'next/dynamic'
import Sidebar from './Sidebar'

const Navbar = dynamic(() => import('./Navbar'), { ssr: false, loading: () => <p>...</p> })

interface LayoutProps {
  pageTitle: string
  description?: string
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, description = 'Next.js Blog', children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />

        <title>Next.js | {pageTitle}</title>
      </Head>
      <LayoutElement>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <main>{children}</main>
        <Footer />
      </LayoutElement>
    </>
  )
}

export default Layout
