import React, { useState, useEffect, useContext } from 'react'
import {
  Nav,
  NavbarContainer,
  NavLogoWrapper,
  MobileIcon,
  NavMenu,
  NavItem,
  LinkText,
  LogoText,
  NavIconHolder,
  CartIconWrapper,
  CartIcon,
  CartBadge,
  AccIcon,
  TotalPrice,
} from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'
import { CartContext } from '../../context/cart'

interface NavbarProps {
  toggle: () => void
}

const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
  const [cart] = useContext(CartContext)
  const [scrollNav, setScrollNav] = useState(true)

  const totalQuantity = cart.items.reduce(
    (acc: number, curr: { [key: string]: number }) => acc + curr.quantity,
    0,
  )

  const changeNav = () => {
    if (window.scrollY < 40) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }
  const openCart = () => {
    console.log(cart)
  }

  useEffect(() => {
    changeNav()
    window.addEventListener('scroll', changeNav)
    return () => window.removeEventListener('scroll', changeNav)
  }, [scrollNav])

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogoWrapper>
          <Link href="/">
            <LogoText>Logo.lt</LogoText>
          </Link>
        </NavLogoWrapper>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <Link href="/">
              <LinkText>Home</LinkText>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/shop">
              <LinkText>Shop</LinkText>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/about">
              <LinkText>About</LinkText>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/contact">
              <LinkText>Contact</LinkText>
            </Link>
          </NavItem>
        </NavMenu>
        <NavIconHolder>
          <TotalPrice hasItems={cart.total > 0 ? true : false}>
            Total: ${cart.total.toFixed(2)}
          </TotalPrice>
          <Link href="/cart" passHref>
            <CartIconWrapper>
              <CartBadge hasItems={totalQuantity > 0 ? true : false}>{totalQuantity}</CartBadge>
              <CartIcon onClick={openCart} />
            </CartIconWrapper>
          </Link>
          <AccIcon />
        </NavIconHolder>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
