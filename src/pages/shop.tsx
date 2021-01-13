import { NextPage } from 'next'
import CustomHead from '../components/CustomHead'
import Products from '../components/Products'
import useSWR from 'swr'

interface ShopPageProps {}

const ShopPage: NextPage<ShopPageProps> = () => {
  const { data } = useSWR(`https://elementor.local/wp-json/wc/v3/products`)

  return (
    <>
      <CustomHead
        title="Shop | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
      <Products products={data} />
    </>
  )
}

export default ShopPage
