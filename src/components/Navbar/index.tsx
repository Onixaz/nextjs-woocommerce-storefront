import React, { useState, useEffect } from 'react'
import {
  Nav,
  NavbarContainer,
  NavLogoWrapper,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinksWrapper,
  LinkText,
  LogoText,
} from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const DynamicNavbarElements = dynamic(() => import('../Utilities/DynamicNavbarElements'), {
  ssr: false,
})

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <Nav scrollNav={scrollNav}>
      <DynamicNavbarElements />
    </Nav>
  )
}

export default Navbar
