import React, { useContext, useMemo } from 'react'
import * as NavIconStyles from './styled'
import Link from 'next/link'
import { CartContext } from '../../context/cart'
import CartTotal from '../Cart/CartTotal'

interface NavigationIconsProps {
  scrollNav: boolean
  isMobile: boolean
}

const NavigationIcons: React.FC<NavigationIconsProps> = ({ scrollNav, isMobile }) => {
  const [cart] = useContext(CartContext)

  const totalQuantity = useMemo(() => {
    if (cart.items.length > 0) {
      return cart.items.reduce(
        (acc: number, curr: { [key: string]: number }) => acc + curr.quantity,
        0,
      )
    } else {
      return 0
    }
  }, [cart])

  return (
    <NavIconStyles.IconHolder scrollNav={scrollNav} isMobile={isMobile}>
      <NavIconStyles.Total hasItems={totalQuantity > 0 ? true : false}>
        Total:
        <CartTotal cart={cart} />
      </NavIconStyles.Total>

      <Link href="/cart" passHref>
        <NavIconStyles.CartIconWrapper>
          <NavIconStyles.CartBadge hasItems={totalQuantity > 0 ? true : false}>
            {totalQuantity}
          </NavIconStyles.CartBadge>
          <NavIconStyles.CartIcon />
        </NavIconStyles.CartIconWrapper>
      </Link>
      <Link href="/account">
        <React.Fragment>
          <NavIconStyles.AccIcon />
        </React.Fragment>
      </Link>
    </NavIconStyles.IconHolder>
  )
}

export default React.memo(NavigationIcons)
