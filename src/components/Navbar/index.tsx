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
  NavbarLogo,
  NavBtnWrapper,
  NavBtn,
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
    if (router.pathname === '/' && window.scrollY < 80) {
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
            <LinkText>
              <NavbarLogo
                src="https://aygdknricp.cloudimg.io/v7/https://epizootic-ingredien.000webhostapp.com/wp-content/uploads/2020/12/masazuotojas_romanas_logo.png"
                alt="Masažuotojas Romanas Logo Mažas"
              />
            </LinkText>
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
              <Link href="/apie">
                <LinkText>Apie mane</LinkText>
              </Link>
            </NavLinksWrapper>
          </NavItem>
          <NavItem>
            <NavLinksWrapper>
              <Link href="/paslaugos">
                <LinkText>Paslaugos</LinkText>
              </Link>
            </NavLinksWrapper>
          </NavItem>
          <NavItem>
            <NavLinksWrapper>
              <Link href="/susisiek">
                <LinkText>Susisiek</LinkText>
              </Link>
            </NavLinksWrapper>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
