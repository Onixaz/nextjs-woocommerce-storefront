import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Cookies } from 'react-cookie-consent'
import { CartContext } from '../../context/cart'
import ProductTypes from '../../types/products'
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

interface ProductItemProps {
  product: ProductTypes
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const [cart, setCart, remoteUpd, setRemoteUpd] = useContext(CartContext)

  const addToCart = (product: ProductTypes) => {
    let newCart = [...cart]
    const price = product.sale_price !== '' ? product.sale_price : product.regular_price
    let itemInCart = newCart.find((item) => item.id === product.id)
    if (itemInCart) {
      itemInCart.quantity++
    } else {
      itemInCart = {
        //TODO: add sale price to the cart, maybe some other product attributes
        id: product.id,
        name: product.name,
        price: price,
        image: product.images[0].src,
        quantity: 1,
      }

      newCart.push(itemInCart)
    }

    setRemoteUpd(true)
    axios
      .post(
        `https://elementor.local/wp-json/cocart/v1/add-item?cart_key=${Cookies.get(
          'remote_cart_key',
        )}`,
        { product_id: product.id.toString(), quantity: 1 },
      )
      .then(() => {
        setRemoteUpd(false)
        setCart(newCart)
      })
      .catch((error) => console.log(error))
  }

  const removeFromCart = (product: ProductTypes) => {
    let newCart = [...cart]
    let itemInCart = newCart.find((item) => item.id === product.id)
    if (itemInCart && itemInCart.quantity > 1) {
      itemInCart.quantity--
    } else if (itemInCart && itemInCart.quantity === 1) {
      newCart = newCart.filter((e) => e !== itemInCart)
    }
    setCart(newCart)
  }

  return (
    <ProductCard>
      <ProductImgWrapper>
        <Img src={product.images[0].src} alt={product.images[0].alt} />
        <AddToCartBtn onClick={() => addToCart(product)} disabled={remoteUpd}>
          Add To Cart
        </AddToCartBtn>
      </ProductImgWrapper>
      <ProductName>{product.name}</ProductName>
      <PriceWrapper>
        {product.sale_price.length === 0 ? (
          <RegularPrice isOnSale={false}>{product.regular_price}$</RegularPrice>
        ) : (
          <>
            <SalePrice>{product.sale_price}$</SalePrice>
            <RegularPrice isOnSale={true}>{product.regular_price}$</RegularPrice>
          </>
        )}

        {/* <AddToCartIcon onClick={() => addToCart(product)} disabled={remoteUpd}/> */}

        {/* <AddToCartIcon style={{ color: 'red' }} onClick={() => removeFromCart(product)} /> */}
      </PriceWrapper>
    </ProductCard>
  )
}

export default ProductItem
