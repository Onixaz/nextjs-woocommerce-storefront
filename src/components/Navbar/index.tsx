import React, { useState, useEffect } from 'react'
import {
  Nav,
  NavbarContainer,
  NavLogoWrapper,
  MobileIcon,
  NavMenu,
  NavItem,
  LinkText,
  LogoText,
  TheDot,
} from './navbar.elements'
import { FaBars } from 'react-icons/fa'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface NavbarProps {
  toggle: () => void
}

const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
  const router = useRouter()
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if (router.pathname === '/' && window.scrollY < 160) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener('scroll', changeNav)
    return () => window.removeEventListener('scroll', changeNav)
  }, [])

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogoWrapper>
          <Link href="/">
            <LogoText>
              Elec<TheDot>.</TheDot>lt
            </LogoText>
          </Link>
        </NavLogoWrapper>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <Link href="/">
              <LinkText>Pradžia</LinkText>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/apie">
              <LinkText>Apie mane</LinkText>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/paslaugos">
              <LinkText>Paslaugos</LinkText>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/susisiek">
              <LinkText>Susisiek</LinkText>
            </Link>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
