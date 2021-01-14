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

  const addToCart = (product) => {
    let newCart = [...cart]
    let itemInCart = newCart.find((item) => item.id === product.id)
    console.log(itemInCart)

    if (itemInCart) {
      itemInCart.quantity++
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      }
      newCart.push(itemInCart)

      //setCart((curr) => [...curr, { quantity, product }])
    }

    setCart(newCart)
  }

  const removeFromCart = (product) => {
    console.log('Dman')
  }

  return (
    <ProductCard>
      <ProductImgWrapper>
        <Img src={product.images[0].src} alt={product.images[0].alt} />
        <ProductBtn>{product.name}</ProductBtn>
      </ProductImgWrapper>
      <PriceWrapper>
        {/* <SalePrice>{item.sale_price}$</SalePrice> //add later */}
        <RegularPrice>{product.regular_price}$</RegularPrice>
        <AddToCartIcon onClick={() => addToCart(product)} />
        <AddToCartIcon style={{ color: 'red' }} onClick={() => removeFromCart(product)} />
      </PriceWrapper>
    </ProductCard>
  )
}

export default ProductItem
