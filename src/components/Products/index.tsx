import React, { useContext } from 'react'

import { BasicGrid, Container } from '../../styles/utils'
import { Loader } from './ProductsElements'
import ProductTypes from '../../types/products'
import ProductItem from './Product'

interface ProductsProps {
  products: ProductTypes[]
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <Container id="Products">
      <BasicGrid cols={4} height={80}>
        {!products ? (
          <Loader>Loading products...</Loader>
        ) : (
          products?.slice(2, 10).map((product) => {
            return <ProductItem key={product.id} product={product} />
          })
        )}
      </BasicGrid>
    </Container>
  )
}

export default Products
