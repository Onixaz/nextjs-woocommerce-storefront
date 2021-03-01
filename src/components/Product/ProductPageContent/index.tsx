import { Product } from '../../../types'
import React, { useContext, useRef, useState } from 'react'
import { cartUpdater } from '../../../utils/functions'

import { BasicGrid, Loader } from '../../../styles/Global/utils'
import {
  ProductPageContentWrapper,
  ProductPageImgWrapper,
  ProductPageImg,
  ProductPageInfoWrapper,
  ProductPageInfoWrapperCol,
  ProductPageName,
  ProductPagePriceWrapper,
  ProductPageRegularPrice,
  ProductPageSalePrice,
  ProductPageShortDescription,
  ProductPageAddToCartForm,
  ProductPageLongDescription,
  ProductPageCategory,
  ProductPageAddToCartBtn,
  ProductPageInputField,
  ProductPageCategorySpan,
} from './styles'
import { CartContext } from '../../../context/cart'

interface ProductPageContentProps {
  product: Product
}

const ProductPageContent: React.FC<ProductPageContentProps> = ({ product }) => {
  const [cart, setCart, isUpdating, setIsUpdating] = useContext(CartContext)
  const qtyRef = useRef<HTMLInputElement | null>(null)

  const handleAddToCart = async (e: React.SyntheticEvent, item: Product, quantity: number) => {
    e.preventDefault()
    //lazy form validation :)
    quantity = quantity > 0 ? quantity : 1

    setIsUpdating((prev: boolean) => !prev)

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/cocart/v1/add-item?cart_key=${cart.key}`,
        {
          method: 'POST',
          body: JSON.stringify({
            product_id: item.id.toString(),
            quantity: quantity,
            return_cart: true,
            //adding image for cart page
            cart_item_data: { image: item.images[0].src, slug: item.slug },
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      const data = await res.json()

      setCart(() => cartUpdater(cart, data))
      setIsUpdating((prev: boolean) => !prev)
    } catch (error) {
      console.log(error)
      setIsUpdating((prev: boolean) => !prev)
    }
  }

  return (
    <>
      <ProductPageContentWrapper>
        <BasicGrid lg={2} md={2} sm={1} xs={1}>
          <ProductPageImgWrapper>
            {product.images !== undefined && (
              <ProductPageImg src={product.images[0].src} alt={product.images[0].alt} />
            )}
          </ProductPageImgWrapper>
          <ProductPageInfoWrapper>
            <ProductPageInfoWrapperCol>
              <ProductPageName>{product.name}</ProductPageName>
              <ProductPagePriceWrapper>
                {product.sale_price?.length === 0 ? (
                  <ProductPageRegularPrice isOnSale={false}>
                    ${parseFloat(product.regular_price).toFixed(2)}
                  </ProductPageRegularPrice>
                ) : (
                  <>
                    <ProductPageRegularPrice isOnSale={true}>
                      ${parseFloat(product.regular_price).toFixed(2)}
                    </ProductPageRegularPrice>
                    <ProductPageSalePrice>
                      ${parseFloat(product.sale_price).toFixed(2)}
                    </ProductPageSalePrice>
                  </>
                )}
              </ProductPagePriceWrapper>
              <ProductPageShortDescription
                dangerouslySetInnerHTML={{ __html: product.short_description }}
              ></ProductPageShortDescription>
            </ProductPageInfoWrapperCol>
            <ProductPageInfoWrapperCol>
              <ProductPageAddToCartForm>
                <ProductPageInputField
                  type="number"
                  defaultValue="1"
                  min="1"
                  ref={qtyRef}
                ></ProductPageInputField>
                <ProductPageAddToCartBtn
                  disabled={isUpdating}
                  onClick={(e) => handleAddToCart(e, product, parseInt(qtyRef.current!.value))}
                >
                  {isUpdating ? <Loader /> : 'Add To Cart'}
                </ProductPageAddToCartBtn>
              </ProductPageAddToCartForm>
              <ProductPageCategory>
                Categories:{' '}
                <ProductPageCategorySpan>{product.categories[0].name}</ProductPageCategorySpan>
              </ProductPageCategory>
            </ProductPageInfoWrapperCol>
          </ProductPageInfoWrapper>
        </BasicGrid>
        <ProductPageLongDescription
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></ProductPageLongDescription>
      </ProductPageContentWrapper>
    </>
  )
}

export default ProductPageContent
