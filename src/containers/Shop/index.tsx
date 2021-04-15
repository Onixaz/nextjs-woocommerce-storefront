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
        <ShopPageStyles.PagesList>
          <ShopPageStyles.Page
            onClick={() => setCurrentPage(currentPage - 1)}
            active={false}
            visible={currentPage === 1 ? false : true}
          >
            {'<'}
          </ShopPageStyles.Page>

          {Array.from({ length: numberOfPages }, (_, index) => {
            return (
              <ShopPageStyles.Page
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                active={index + 1 === currentPage ? true : false}
                visible={true}
              >
                {index + 1}
              </ShopPageStyles.Page>
            )
          })}
          <ShopPageStyles.Page
            onClick={() => setCurrentPage(currentPage + 1)}
            active={false}
            visible={currentPage === numberOfPages ? false : true}
          >
            {'>'}
          </ShopPageStyles.Page>
        </ShopPageStyles.PagesList>
        <BasicGrid lg={4} md={3} sm={2} xs={1}>
          {currentProducts.map((product: any) => {
            return <SingleProduct key={product.id} product={product} />
          })}
        </BasicGrid>
      </BasicContainer>
    </>
  )
}
export default ShopPageContainer
