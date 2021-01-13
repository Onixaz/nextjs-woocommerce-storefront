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

  const addToCart = () => {
    setCart((curr) => [...curr, { id: product.id, price: parseInt(product.regular_price) }])
    console.log('Adding to cart')
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
        <AddToCartIcon onClick={addToCart} />
      </PriceWrapper>
    </ProductCard>
  )
}

export default ProductItem
