import React from 'react'
import { CategoryImg, CategoryName, CategoryCard, CategoryImgWrapper } from './CategoryElements'

interface Category {
  name: string
  image: { [key: string]: string }
  count: { [key: string]: number }
}

interface SingleCategoryProps {
  category: Category
}

const SingleCategory: React.FC<SingleCategoryProps> = ({ category }) => {
  return (
    <CategoryCard>
      <CategoryImgWrapper>
        {category.image !== null ? (
          <CategoryImg src={category.image.src} alt={category.image.alt} />
        ) : null}
      </CategoryImgWrapper>
      <CategoryName>
        {category.name} ({category.count})
      </CategoryName>
    </CategoryCard>
  )
}

export default SingleCategory
