import React, { useState } from 'react'

import CookiesConsent from '../../Cookies'
import { Elements } from '@stripe/react-stripe-js'
import Footer from '../Footer'
import LayoutElement from './LayoutElements'
import Navbar from '../Navigation/Navbar'
import Seo from '../Head/Seo'
import Sidebar from '../Navigation/Sidebar'
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
