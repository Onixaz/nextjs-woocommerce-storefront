import React, { useState } from 'react'

import LayoutElement, { NavbarHolder } from './layout.elements'

import Sidebar from '../Sidebar'
import dynamic from 'next/dynamic'
import CustomHead from '../Head'
import CookiesConsent from '../Cookies'
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
      <CustomHead title={pageTitle} />
      <LayoutElement>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <main>{children}</main>
        <CookiesConsent />
      </LayoutElement>
    </>
  )
}

export default Layout
