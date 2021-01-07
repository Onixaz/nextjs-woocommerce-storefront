import React from 'react'

import { CardPhotoWrapper, CardWrapper, CardPhoto, CardPrice, CardName } from './card.elements'

const ProductCard = ({ price, productImg, name }) => {
  return (
    <CardWrapper>
      <CardPhotoWrapper>
        <CardPhoto src={productImg} alt={productImg} />
      </CardPhotoWrapper>

      <CardName>{name}</CardName>
      <CardPrice>{price}&#8364;</CardPrice>
    </CardWrapper>
  )
}

export default ProductCard
