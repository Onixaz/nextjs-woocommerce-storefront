import React, { useContext } from 'react'
import * as NavIconStyles from './styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CartContext } from '../../context/cart'
import { useSession } from 'next-auth/client'

interface NavigationIconsProps {
  scrollNav: boolean
  isMobile: boolean
}

const NavigationIcons: React.FC<NavigationIconsProps> = ({ scrollNav, isMobile }) => {
  const [session] = useSession()
  const router = useRouter()
  const [cart] = useContext(CartContext)
  const totalQuantity =
    cart && cart.items.length > 0
      ? cart.items.reduce((acc: number, curr: { [key: string]: number }) => acc + curr.quantity, 0)
      : 0

  const cartTotal = cart && cart.total > 0 ? cart.total.toFixed(2) : 0

  return (
    <NavIconStyles.IconHolder scrollNav={scrollNav} isMobile={isMobile}>
      <NavIconStyles.TotalPrice hasItems={cart && cart.total > 0 ? true : false}>
        Total: ${cartTotal}
      </NavIconStyles.TotalPrice>
      <Link href="/cart" passHref>
        <NavIconStyles.CartIconWrapper>
          <NavIconStyles.CartBadge hasItems={totalQuantity > 0 ? true : false}>
            {totalQuantity}
          </NavIconStyles.CartBadge>
          <NavIconStyles.CartIcon />
        </NavIconStyles.CartIconWrapper>
      </Link>

      <NavIconStyles.AccIcon onClick={() => router.push(session ? '/account' : '/login')} />
    </NavIconStyles.IconHolder>
  )
}

export default React.memo(NavigationIcons)
