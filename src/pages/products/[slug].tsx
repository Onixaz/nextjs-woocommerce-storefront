import { NextPage } from 'next'
import { Product } from '../../types'
import React, { useContext, useRef, useState } from 'react'
import { fetcher, cartUpdater } from '../../utils/functions'
import { Params } from 'next/dist/next-server/server/router'
import { BasicGrid, BasicContainer, Loader } from '../../styles/Global/utils'
import {
  PageWrapper,
  PriceWrapper,
  RegularPrice,
  SalePrice,
  ProductImgWrapper,
  Img,
  ProductName,
  ProductInfoWrapper,
  ShortDescription,
  AddToCartForm,
  InputField,
  AddToCartBtn,
  LongDescription,
  ProductCategory,
  CategorySpan,
  ProductInfoWrapperCol,
} from '../../styles/Individual/ProductsPageElements'
import { CartContext } from '../../context/cart'

interface ProductPageProps {
  product: Product
}

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  const [cart, setCart, isUpdating, setIsUpdating] = useContext(CartContext)
  const [qty, setQty] = useState(1)

  const handleAddToCart = (e: React.SyntheticEvent, item: Product, quantity: number) => {
    e.preventDefault()
    //lazy form validation :)
    quantity = quantity > 0 ? quantity : 1
    setIsUpdating((prev: boolean) => !prev)
    fetch(
      `${process.env.NEXT_PUBLIC_WOO_API_URL}/wp-json/cocart/v1/add-item?cart_key=${cart.key}`,
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
      .then((response) => response.json())
      .then((data) => {
        setCart(() => cartUpdater(cart, data))
        setIsUpdating((prev: boolean) => !prev)
      })
      .catch((error) => {
        console.log(error)
        setIsUpdating((prev: boolean) => !prev)
      })
  }

  return (
    <BasicContainer>
      <PageWrapper>
        <BasicGrid lg={2} md={2} sm={1} xs={1}>
          <ProductImgWrapper>
            {product.images !== undefined && (
              <Img src={product.images[0].src} alt={product.images[0].alt} />
            )}
          </ProductImgWrapper>
          <ProductInfoWrapper>
            <ProductInfoWrapperCol>
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
              <ShortDescription
                dangerouslySetInnerHTML={{ __html: product.short_description }}
              ></ShortDescription>
            </ProductInfoWrapperCol>
            <ProductInfoWrapperCol>
              <AddToCartForm>
                <InputField
                  onChange={(e) => setQty(parseInt(e.target.value))}
                  type="number"
                  defaultValue={qty}
                  min="1"
                ></InputField>
                <AddToCartBtn
                  disabled={isUpdating}
                  onClick={(e) => handleAddToCart(e, product, qty)}
                >
                  {isUpdating ? <Loader /> : <p>Add To Cart</p>}
                </AddToCartBtn>
              </AddToCartForm>
              <ProductCategory>
                Categories: <CategorySpan>{product.categories[0].name}</CategorySpan>
              </ProductCategory>
            </ProductInfoWrapperCol>
          </ProductInfoWrapper>
        </BasicGrid>
        <LongDescription
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></LongDescription>
      </PageWrapper>
    </BasicContainer>
  )
}

export default ProductPage

export async function getStaticProps({ params: { slug } }: Params) {
  const productsRes = await fetcher(
    `${process.env.NEXT_PUBLIC_WOO_API_URL}/wp-json/wc/v3/products?slug=${slug}`,
    process.env.WOO_CONSUMER_KEY!,
    process.env.WOO_CONSUMER_SECRET!,
  )

  const found = await productsRes.json()

  return {
    props: {
      product: found[0],
    },
  }
}

export async function getStaticPaths() {
  const productsRes = await fetcher(
    `${process.env.NEXT_PUBLIC_WOO_API_URL}/wp-json/wc/v3/products?per_page=30`,
    process.env.WOO_CONSUMER_KEY!,
    process.env.WOO_CONSUMER_SECRET!,
  )
  const products = await productsRes.json()
  const publishedProducts = products.filter((product: { [key: string]: string }) => {
    return product.status === 'publish'
  })

  const paths = publishedProducts.map((product: Product) => ({
    params: { slug: String(product.slug) },
  }))

  return { paths, fallback: false }
}
