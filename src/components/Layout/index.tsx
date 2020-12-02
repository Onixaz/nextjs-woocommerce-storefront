import React, { useState } from 'react'

import Head from 'next/head'
import Footer from '../Footer'
import LayoutElement, { NavbarHolder } from './layout.elements'

//import Navbar from '../Navbar'

import Sidebar from '../Sidebar'
import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import('../Navbar'), { ssr: false, loading: () => <NavbarHolder /> })

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

        <title>{pageTitle} | Masažuotojas Romanas</title>
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
