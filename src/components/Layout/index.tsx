import React, { useState } from 'react'
import CookieConsent from 'react-cookie-consent'
import Link from 'next/link'
import Head from 'next/head'
import Footer from '../Footer'
import LayoutElement, { NavbarHolder } from './layout.elements'

//import Navbar from '../Navbar'

import Sidebar from '../Sidebar'
import dynamic from 'next/dynamic'
import CustomSeo from '../Seo/seo'
const Navbar = dynamic(() => import('../Navbar'), { ssr: false, loading: () => <NavbarHolder /> })

interface LayoutProps {
  pageTitle: string
}

const Layout: React.FC<LayoutProps> = ({
  pageTitle,

  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Head>
        <CustomSeo pageTitle={pageTitle} />
      </Head>
      <LayoutElement>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />

        <main>{children}</main>

        <Footer />
        <CookieConsent
          buttonText="Supratau"
          style={{
            background: 'rgba(0,0,0,0.7)',
            padding: '0 15px',
            display: 'flex',
            justifyContent: 'center',
          }}
          buttonStyle={{
            background: '#ff3b6a',
            borderRadius: '30px',
            color: '#000',
            fontSize: '15px',
            fontWeight: '600',
            padding: '10px',
          }}
        >
          Šioje svetainėje naudojami slapukai (angl. cookies):{' '}
          <Link href="/privatumo-politika">
            <a style={{ color: '#fff' }}>Sužinoti daugiau</a>
          </Link>
        </CookieConsent>
      </LayoutElement>
    </>
  )
}

export default Layout
