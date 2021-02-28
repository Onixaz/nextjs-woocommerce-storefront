import {
  Img,
  PriceWrapper,
  ProductCard,
  ProductImgWrapper,
  ProductName,
  RegularPrice,
  SalePrice,
} from './ProductElements'

import Link from 'next/link'
import { Product } from '../../types'
import React from 'react'

interface ProductItemProps {
  product: Product
}

const SingleProduct: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <ProductCard>
        <ProductImgWrapper>
          {product.images && product.images.length > 0 ? (
            <Img src={product.images[0].src} alt={product.images[0].alt} />
          ) : null}
        </ProductImgWrapper>

        <ProductName>{product.name}</ProductName>

        <PriceWrapper>
          {product.sale_price?.length === 0 ? (
            <RegularPrice isOnSale={false}>
              ${parseFloat(product.regular_price).toFixed(2)}
            </RegularPrice>
          ) : (
            <>
              <RegularPrice isOnSale={true}>
                ${parseFloat(product.regular_price).toFixed(2)}
              </RegularPrice>
              <SalePrice>${parseFloat(product.sale_price).toFixed(2)}</SalePrice>
            </>
          )}
        </PriceWrapper>
      </ProductCard>
    </Link>
  )
}

export default SingleProduct
