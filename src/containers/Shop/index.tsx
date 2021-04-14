import { NextPage } from 'next'
import * as ShopPageStyles from './styled'
import React, { useState } from 'react'
import PageTitle from '../../components/PageTitle'
import SingleProduct from '../../components/Product/ProductCard'
import { BasicContainer, BasicGrid } from '../../styles/utils'
import { Product } from '../../types'

interface ShopPageProps {
  products: Product[]
}

const ShopPageContainer: NextPage<ShopPageProps> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(8)

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)
  const numberOfPages = Math.ceil(products.length / productsPerPage)

  return (
    <>
      <PageTitle
        title="Shop | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />

      <BasicContainer id="Products">
        <BasicGrid lg={4} md={3} sm={2} xs={1}>
          {currentProducts.map((product: any) => {
            return <SingleProduct key={product.id} product={product} />
          })}
        </BasicGrid>
        <ShopPageStyles.PagesList>
          {Array.from({ length: numberOfPages }, (_, index) => {
            return (
              <ShopPageStyles.Page
                key={index}
                active={index + 1 === currentPage ? true : false}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </ShopPageStyles.Page>
            )
          })}
        </ShopPageStyles.PagesList>
      </BasicContainer>
    </>
  )
}
export default ShopPageContainer
