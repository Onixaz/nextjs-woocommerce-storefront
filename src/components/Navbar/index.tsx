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

  const totalPrice = cart.reduce(
    (acc, curr) => acc + parseFloat(curr.regular_price) * curr.quantity,
    0,
  )
  const totalQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0)
  const [scrollNav, setScrollNav] = useState(true)
  const changeNav = () => {
    if (window.scrollY < 80) {
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
            <Link href="/">
              <LinkText>Contact</LinkText>
            </Link>
          </NavItem>
        </NavMenu>
        <NavIconHolder>
          <TotalPrice>Total: {totalPrice}$</TotalPrice>
          <Link href="/cart" passHref>
            <ShoppingCartHolder>
              {/* <CartBadge hasItems={cart.length > 0 ? true : false}>{cart.length}</CartBadge> */}
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
