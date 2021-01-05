import React from 'react'

import { CardPhotoWrapper, CardWrapper, Photo } from './card.elements'

const ProductCard = ({ price, productImg, name }) => {
  return (
    <CardWrapper>
      <CardPhotoWrapper>
        <Photo src={productImg} alt={productImg} />
      </CardPhotoWrapper>

      <p>{name}</p>
      <p>{price}</p>
    </CardWrapper>
  )
}

export default ProductCard
