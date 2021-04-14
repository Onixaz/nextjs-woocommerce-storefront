import { Product } from '../../types'
import React from 'react'
import { BasicGrid, BasicContainer, Loader } from '../../styles/utils'
import * as ProductPageStyles from './styled'
import AddToCartForm from '../../components/Product/AddToCartForm'
import ProductPrice from '../../components/Product/ProductPrice'

interface ProductPageContentProps {
  product: Product
}

const ProductPageContainer: React.FC<ProductPageContentProps> = ({ product }) => {
  return (
    <BasicContainer>
      <ProductPageStyles.ContentWrapper>
        <BasicGrid lg={2} md={2} sm={1} xs={1}>
          <ProductPageStyles.ImgWrapper>
            {product.images && (
              <ProductPageStyles.Img src={product.images[0].src} alt={product.images[0].alt} />
            )}
          </ProductPageStyles.ImgWrapper>
          <ProductPageStyles.InfoWrapper>
            <ProductPageStyles.InfoWrapperCol>
              <ProductPageStyles.Name>{product.name}</ProductPageStyles.Name>
              <ProductPrice product={product} center={false} size={1.3} />
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
