import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Cookies } from 'react-cookie-consent'
import { CartContext } from '../../context/cart'
//import ProductTypes from '../../types/products'
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
  sale_price?: string
}

interface ProductItemProps {
  product: Product
}

interface ProductItemTypes {
  id: number
  name: string
  total: number
  image: string
  quantity: number
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const [cart, setCart, isUpdating, setIsUpdating] = useContext(CartContext)

  const addToCart = (product: Product) => {
    setIsUpdating((prev: boolean) => !prev)
    axios({
      url: `https://elementor.local/wp-json/cocart/v1/add-item?cart_key=${cart.key}`,
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        product_id: product.id.toString(),
        quantity: 1,
      },
    })
      .then((response) => {
        const { product_id, product_name, line_total, quantity } = response.data
        const newCart = { ...cart }

        const itemInCart = newCart.items.find(
          (item: { [key: string]: number }) => item.id === product.id,
        )
        if (itemInCart) {
          itemInCart.total = line_total
          itemInCart.quantity = quantity
        } else {
          const newItem: ProductItemTypes = {
            //keeping these key names to avoid confusion with remote cart response
            id: product_id,
            name: product_name,
            total: line_total,
            image: product.images[0].src,
            quantity,
          }
          newCart.items.push(newItem)
        }

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
        <Img src={product.images[0].src} alt={product.images[0].alt} />
        <AddToCartBtn onClick={() => addToCart(product)} disabled={isUpdating}>
          Add To Cart
        </AddToCartBtn>
      </ProductImgWrapper>
      <ProductName>{product.name}</ProductName>
      <PriceWrapper>
        {product.sale_price?.length === 0 ? (
          <RegularPrice isOnSale={false}>{product.regular_price}$</RegularPrice>
        ) : (
          <>
            <SalePrice>{product.sale_price}$</SalePrice>
            <RegularPrice isOnSale={true}>{product.regular_price}$</RegularPrice>
          </>
        )}
      </PriceWrapper>
    </ProductCard>
  )
}

export default ProductItem
