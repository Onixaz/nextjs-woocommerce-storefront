import { NextPage } from 'next'
import PageTitle from '../components/PageTitle'
import CartPageContainer from '../containers/Cart'

interface CartPageProps {}

const CartPage: NextPage<CartPageProps> = () => {
  return (
    <>
      <PageTitle
        title="Cart | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
      <CartPageContainer />
    </>
  )
}

export default CartPage
