import React, { useState, useEffect } from 'react'
import * as NavbarStyles from './styled'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'
import NavigationIcons from '../NavIcons'

interface NavbarProps {
  toggle: () => void
}

const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(true)

  const changeNav = () => {
    if (window.scrollY < 40) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener('scroll', changeNav)
    return () => window.removeEventListener('scroll', changeNav)
  }, [scrollNav])

  return (
    <NavbarStyles.Nav scrollNav={scrollNav}>
      <NavbarStyles.Container>
        <NavbarStyles.LogoWrapper>
          <Link href="/">
            <NavbarStyles.LogoText>Logo.lt</NavbarStyles.LogoText>
          </Link>
        </NavbarStyles.LogoWrapper>
        <NavbarStyles.MobileIcon onClick={toggle}>
          <FaBars />
        </NavbarStyles.MobileIcon>
        <NavbarStyles.Menu>
          <NavbarStyles.Item>
            <Link href="/">
              <NavbarStyles.LinkText>Home</NavbarStyles.LinkText>
            </Link>
          </NavbarStyles.Item>
          <NavbarStyles.Item>
            <Link href="/shop">
              <NavbarStyles.LinkText>Shop</NavbarStyles.LinkText>
            </Link>
          </NavbarStyles.Item>
          <NavbarStyles.Item>
            <Link href="/about">
              <NavbarStyles.LinkText>About</NavbarStyles.LinkText>
            </Link>
          </NavbarStyles.Item>
          <NavbarStyles.Item>
            <Link href="/contact">
              <NavbarStyles.LinkText>Contact</NavbarStyles.LinkText>
            </Link>
          </NavbarStyles.Item>
        </NavbarStyles.Menu>
        <NavigationIcons scrollNav={scrollNav} isMobile={false} />
      </NavbarStyles.Container>
    </NavbarStyles.Nav>
  )
}

export default React.memo(Navbar)
