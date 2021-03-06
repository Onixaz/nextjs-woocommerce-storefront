import { NextPage } from 'next'
import PageTitle from '../components/PageTitle'
import CheckoutPageContent from '../containers/Checkout'

interface CheckoutPageProps {}

const CheckoutPage: NextPage<CheckoutPageProps> = () => {
  return (
    <>
      <PageTitle
        title="Checkout | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />

      <CheckoutPageContent />
    </>
  )
}

export default CheckoutPage
