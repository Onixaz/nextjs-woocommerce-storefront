import React from 'react'
import * as ProductPriceStyles from './styled'
import useSwr from 'swr'
import { Product } from '../../../types'
import { Loader } from '../../../styles/utils'

interface ProductPriceProps {
  product: Product
  center: boolean
  size: number
}

const ProductPrice: React.FC<ProductPriceProps> = ({ product, center, size }) => {
  const { data } = useSwr(`/api/products/retrieve`)

  const filteredProduct = data?.filter((item: Product) => {
    return item.id === product.id
  })

  return (
    <>
      {!filteredProduct ? (
        <Loader />
      ) : (
        <ProductPriceStyles.Wrapper center={center}>
          {!filteredProduct[0].sale_price ? (
            <ProductPriceStyles.Regular isOnSale={false} size={size}>
              ${parseFloat(filteredProduct[0].regular_price).toFixed(2)}
            </ProductPriceStyles.Regular>
          ) : (
            <>
              <ProductPriceStyles.Regular isOnSale={true} size={size}>
                ${parseFloat(filteredProduct[0].regular_price).toFixed(2)}
              </ProductPriceStyles.Regular>
              <ProductPriceStyles.Sale size={size}>
                ${parseFloat(filteredProduct[0].sale_price).toFixed(2)}
              </ProductPriceStyles.Sale>
            </>
          )}
        </ProductPriceStyles.Wrapper>
      )}
    </>
  )
}

export default ProductPrice
