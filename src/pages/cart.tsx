import { NextPage } from 'next'
import { useContext } from 'react'
import CustomHead from '../components/CustomHead'
import { CartContext } from '../context/cart'

interface CartPageProps {}

const CartPage: NextPage<CartPageProps> = () => {
  const [cart] = useContext(CartContext)
  console.log(cart)
  return (
    <>
      <CustomHead
        title="About | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />

      {cart?.map((item, index) => {
        return <p key={index}>{item.name}</p>
      })}
    </>
  )
}

export default CartPage
