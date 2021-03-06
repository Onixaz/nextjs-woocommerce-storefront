import { Product } from '../../types'
import React from 'react'
import { BasicGrid, BasicContainer } from '../../styles/utils'
import * as ProductPageStyles from './styled'
import AddToCartForm from '../../components/Product/AddToCartForm'

interface ProductPageContentProps {
  product: Product
}

const ProductPageContainer: React.FC<ProductPageContentProps> = ({ product }) => {
  return (
    <BasicContainer>
      <ProductPageStyles.ContentWrapper>
        <BasicGrid lg={2} md={2} sm={1} xs={1}>
          <ProductPageStyles.ImgWrapper>
            {product.images !== undefined && (
              <ProductPageStyles.Img src={product.images[0].src} alt={product.images[0].alt} />
            )}
          </ProductPageStyles.ImgWrapper>
          <ProductPageStyles.InfoWrapper>
            <ProductPageStyles.InfoWrapperCol>
              <ProductPageStyles.Name>{product.name}</ProductPageStyles.Name>
              <ProductPageStyles.PriceWrapper>
                {product.sale_price?.length === 0 ? (
                  <ProductPageStyles.RegularPrice isOnSale={false}>
                    ${parseFloat(product.regular_price).toFixed(2)}
                  </ProductPageStyles.RegularPrice>
                ) : (
                  <>
                    <ProductPageStyles.RegularPrice isOnSale={true}>
                      ${parseFloat(product.regular_price).toFixed(2)}
                    </ProductPageStyles.RegularPrice>
                    <ProductPageStyles.SalePrice>
                      ${parseFloat(product.sale_price).toFixed(2)}
                    </ProductPageStyles.SalePrice>
                  </>
                )}
              </ProductPageStyles.PriceWrapper>
              <ProductPageStyles.ShortDescription
                dangerouslySetInnerHTML={{ __html: product.short_description }}
              ></ProductPageStyles.ShortDescription>
            </ProductPageStyles.InfoWrapperCol>
            <ProductPageStyles.InfoWrapperCol>
              <AddToCartForm product={product} />
              <ProductPageStyles.Category>
                Categories:{' '}
                <ProductPageStyles.CategorySpan>
                  {product.categories[0].name}
                </ProductPageStyles.CategorySpan>
              </ProductPageStyles.Category>
            </ProductPageStyles.InfoWrapperCol>
          </ProductPageStyles.InfoWrapper>
        </BasicGrid>
        <ProductPageStyles.LongDescription
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></ProductPageStyles.LongDescription>
      </ProductPageStyles.ContentWrapper>
    </BasicContainer>
  )
}

export default ProductPageContainer
