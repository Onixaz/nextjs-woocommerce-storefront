import React from 'react'
import {
  CategoryPhotoWrapper,
  CategoryPhoto,
  CategoriesGrid,
  CategoryBtn,
} from './categories.elements'

const Categories = () => {
  return (
    <CategoriesGrid>
      <CategoryPhotoWrapper>
        <CategoryPhoto src="./category_1.jpg" />
        <CategoryBtn>Skintos gėlės</CategoryBtn>
      </CategoryPhotoWrapper>
      <CategoryPhotoWrapper>
        <CategoryPhoto src="./category_2.jpg" />
        <CategoryBtn>Puokštės</CategoryBtn>
      </CategoryPhotoWrapper>
      <CategoryPhotoWrapper>
        <CategoryPhoto src="./category_3.jpg" />
        <CategoryBtn>Vazoniniai augalai</CategoryBtn>
      </CategoryPhotoWrapper>
    </CategoriesGrid>
  )
}

export default Categories
