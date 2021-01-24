import React, { useContext, useState } from 'react'
import axios from 'axios'
//import Product from '../../types/product'
import { CartContext } from '../../context/cart'

import {
  ProductCard,
  ProductImgWrapper,
  Img,
  ProductName,
  PriceWrapper,
  RegularPrice,
  SalePrice,
  AddToCartBtn,
} from './ProductElements'
import Link from 'next/link'

interface Product {
  name: string
  slug?: string
  id: number
  images: Array<{
    src: string
    alt: string
  }>
  price: string
  regular_price: string
  sale_price: string
}

interface ProductItemProps {
  product: Product
}

const SingleProduct: React.FC<ProductItemProps> = ({ product }) => {
  const [cart, setCart, isUpdating, setIsUpdating] = useContext(CartContext)

  const addToCart = (product: Product, key: string) => {
    setIsUpdating((prev: boolean) => !prev)
    axios({
      url: `https://elementor.local/wp-json/cocart/v1/add-item?cart_key=${key}`,
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        product_id: product.id.toString(),
        quantity: 1,
        return_cart: true,
      },
    })
      .then((response) => {
        const newCart = { ...cart }
        const data = Object.values(response.data)
        newCart.items = data
        setCart(newCart)
        setIsUpdating((prev: boolean) => !prev)
      })
      .catch((error) => {
        console.log(error)
        setIsUpdating((prev: boolean) => !prev)
      })
  }

  return (
    <ProductCard>
      <ProductImgWrapper>
        {product.images[0].src !== null ? (
          <Img src={product.images[0].src} alt={product.images[0].alt} />
        ) : null}

        <AddToCartBtn onClick={() => addToCart(product, cart.key)} disabled={isUpdating}>
          Add To Cart
        </AddToCartBtn>
      </ProductImgWrapper>
      <Link href={`/products/${product.slug}`}>
        <ProductName>{product.name}</ProductName>
      </Link>

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
  )
}

export default SingleProduct
