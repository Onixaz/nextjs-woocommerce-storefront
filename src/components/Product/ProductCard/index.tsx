import * as ProductCardStyles from './styled'

import Link from 'next/link'
import { Product } from '../../../types'
import React from 'react'

interface ProductItemProps {
  product: Product
}

const SingleProduct: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <ProductCardStyles.Wrapper>
        <ProductCardStyles.ImgWrapper>
          {product.images && product.images.length > 0 ? (
            <ProductCardStyles.Img src={product.images[0].src} alt={product.images[0].alt} />
          ) : null}
        </ProductCardStyles.ImgWrapper>

        <ProductCardStyles.Name>{product.name}</ProductCardStyles.Name>

        <ProductCardStyles.PriceWrapper>
          {product.sale_price?.length === 0 ? (
            <ProductCardStyles.RegularPrice isOnSale={false}>
              ${parseFloat(product.regular_price).toFixed(2)}
            </ProductCardStyles.RegularPrice>
          ) : (
            <>
              <ProductCardStyles.RegularPrice isOnSale={true}>
                ${parseFloat(product.regular_price).toFixed(2)}
              </ProductCardStyles.RegularPrice>
              <ProductCardStyles.SalePrice>
                ${parseFloat(product.sale_price).toFixed(2)}
              </ProductCardStyles.SalePrice>
            </>
          )}
        </ProductCardStyles.PriceWrapper>
      </ProductCardStyles.Wrapper>
    </Link>
  )
}

export default SingleProduct
