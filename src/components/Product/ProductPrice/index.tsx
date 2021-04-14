import React, { useEffect, useState } from 'react'
import * as ProductPriceStyles from './styled'
import useSwr, { mutate } from 'swr'
import { Product } from '../../../types'
import { Loader } from '../../../styles/utils'
import { getSingleProduct } from '../../../utils/functions'

interface ProductPriceProps {
  product: Product
  center: boolean
  size: number
}

const ProductPrice: React.FC<ProductPriceProps> = ({ product, center, size }) => {
  const { data } = useSwr(`/api/products/retrieve`)

  if (!data) {
    return <Loader />
  }

  const { sale_price, regular_price } = getSingleProduct(product.id, data)

  return (
    <ProductPriceStyles.Wrapper center={center}>
      {!sale_price ? (
        <ProductPriceStyles.Regular isOnSale={false} size={size}>
          ${parseFloat(regular_price).toFixed(2)}
        </ProductPriceStyles.Regular>
      ) : (
        <>
          <ProductPriceStyles.Regular isOnSale={true} size={size}>
            ${parseFloat(regular_price).toFixed(2)}
          </ProductPriceStyles.Regular>
          <ProductPriceStyles.Sale size={size}>
            ${parseFloat(sale_price).toFixed(2)}
          </ProductPriceStyles.Sale>
        </>
      )}
    </ProductPriceStyles.Wrapper>
  )
}

export default ProductPrice
