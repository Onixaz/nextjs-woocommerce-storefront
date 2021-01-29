import React, { useState } from 'react'
import LayoutElement from './LayoutElements'
import Sidebar from '../Sidebar'
import Seo from '../Seo'
import CookiesConsent from '../Cookies'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Elements } from '@stripe/react-stripe-js'
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
