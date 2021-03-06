import React, { useState } from 'react'

import CookiesConsent from '../../components/Cookies'
import { Elements } from '@stripe/react-stripe-js'
import Footer from '../../components/Footer'
import LayoutElement from './styled'
import Navbar from '../../components/Navbar'
import Seo from '../../components/Seo'
import Sidebar from '../../components/Sidebar'
import { loadStripe } from '@stripe/stripe-js'

interface LayoutProps {}
const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!}`)
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Seo />
      <Elements stripe={stripePromise}>
        <LayoutElement>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <main>{children}</main>
          <CookiesConsent />
          <Footer />
        </LayoutElement>
      </Elements>
    </>
  )
}

export default Layout
