import React, { useContext } from 'react'
import { CartContext } from '../../../context/cart'
import ProductTypes from '../../../types/products'
import {
  ProductCard,
  ProductImgWrapper,
  Img,
  ProductBtn,
  PriceWrapper,
  RegularPrice,
  AddToCartIcon,
} from '../Product/ProductElements'

interface ProductItemProps {
  product: ProductTypes
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const [cart, setCart] = useContext(CartContext)

  const addToCart = (product: ProductTypes) => {
    let newCart = [...cart]

    let itemInCart = newCart.find((item) => item.id === product.id)

    if (itemInCart) {
      itemInCart.quantity++
    } else {
      itemInCart = {
        //TODO: add sale price to the cart, maybe some other product attributes
        id: product.id,
        name: product.name,
        regular_price: product.regular_price,
        image: product.images[0].src,
        quantity: 1,
      }

      newCart.push(itemInCart)
    }

    setCart(newCart)
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
        <ProductBtn>{product.name}</ProductBtn>
      </ProductImgWrapper>
      <PriceWrapper>
        {/* <SalePrice>{item.sale_price}$</SalePrice> //TODO: add later */}
        <RegularPrice>{product.regular_price}$</RegularPrice>
        <AddToCartIcon onClick={() => addToCart(product)} />
        <AddToCartIcon style={{ color: 'red' }} onClick={() => removeFromCart(product)} />
      </PriceWrapper>
    </ProductCard>
  )
}

export default ProductItem
