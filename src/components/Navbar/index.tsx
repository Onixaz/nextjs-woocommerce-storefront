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
} from './navbar.elements'
import { FaBars } from 'react-icons/fa'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface NavbarProps {
  toggle: any
}

const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
  const router = useRouter()
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if (window != undefined) {
      if (router.pathname === '/' && window.scrollY < 80) {
        setScrollNav(true)
      } else {
        setScrollNav(false)
      }
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogoWrapper>
          <Link href="/">
            <LogoText>Romanas.Lt</LogoText>
          </Link>
        </NavLogoWrapper>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinksWrapper>
              <Link href="/">
                <LinkText>Pradžia</LinkText>
              </Link>
            </NavLinksWrapper>
          </NavItem>
          <NavItem>
            <NavLinksWrapper>
              <Link href="/about">
                <LinkText>Apie mane</LinkText>
              </Link>
            </NavLinksWrapper>
          </NavItem>
          <NavItem>
            <NavLinksWrapper>
              <Link href="/services">
                <LinkText>Paslaugos</LinkText>
              </Link>
            </NavLinksWrapper>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
