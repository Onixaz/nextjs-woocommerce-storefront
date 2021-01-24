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
  TheDot,
  NavIconHolder,
  CartIcon,
  CartBadge,
  AccIcon,
  TotalPrice,
  ShoppingCartHolder,
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

  const totalPrice = cart.items.reduce(
    (acc: number, curr: { [key: string]: any }) => acc + curr.line_total,
    0,
  )

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
            <LogoText>
              Logo<TheDot>.</TheDot>lt
            </LogoText>
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
          <TotalPrice hasItems={totalPrice > 0 ? true : false}>
            Total: ${totalPrice.toFixed(2)}
          </TotalPrice>
          <Link href="/cart" passHref>
            <ShoppingCartHolder>
              <CartBadge hasItems={totalQuantity > 0 ? true : false}>{totalQuantity}</CartBadge>
              <CartIcon onClick={openCart} />
            </ShoppingCartHolder>
          </Link>

          <AccIcon />
        </NavIconHolder>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
