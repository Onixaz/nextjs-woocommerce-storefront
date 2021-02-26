import React, { useContext } from 'react'
import {
  TotalPrice,
  CartIconWrapper,
  CartBadge,
  CartIcon,
  AccIcon,
  NavIconHolder,
} from './NavIconsElements'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CartContext } from '../../context/cart'

interface NavigationIconsProps {
  scrollNav: boolean
  isMobile: boolean
}

const NavigationIcons: React.FC<NavigationIconsProps> = ({ scrollNav, isMobile }) => {
  const isAuthenticated = false //TODO Auth context
  const router = useRouter()
  const [cart] = useContext(CartContext)
  const totalQuantity =
    cart && cart.items.length > 0
      ? cart.items.reduce((acc: number, curr: { [key: string]: number }) => acc + curr.quantity, 0)
      : 0

  const cartTotal = cart && cart.total > 0 ? cart.total.toFixed(2) : 0

  return (
    <NavIconHolder scrollNav={scrollNav} isMobile={isMobile}>
      <TotalPrice hasItems={cart && cart.total > 0 ? true : false}>Total: ${cartTotal}</TotalPrice>
      <Link href="/cart" passHref>
        <CartIconWrapper>
          <CartBadge hasItems={totalQuantity > 0 ? true : false}>{totalQuantity}</CartBadge>
          <CartIcon />
        </CartIconWrapper>
      </Link>

      <AccIcon onClick={() => router.push(isAuthenticated ? '/account' : '/login')} />
    </NavIconHolder>
  )
}

export default NavigationIcons
