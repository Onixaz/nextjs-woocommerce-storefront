import React, { useState } from 'react'
import LayoutElement from './LayoutElements'
import Sidebar from '../Sidebar'
import Seo from '../Seo'
import CookiesConsent from '../Cookies'

import Navbar from '../Navbar'
import Footer from '../Footer'

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Seo />
      <LayoutElement>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <main>{children}</main>
        {/* <CookiesConsent /> */}
        <Footer />
      </LayoutElement>
    </>
  )
}

export default Layout
