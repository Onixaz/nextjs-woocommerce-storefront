import React from 'react'

import {
  AuthorContainer,
  AuthorImageWrapper,
  AuthorImg,
  AuthorName,
  CustomCarousel,
  Item,
  Comment,
} from '../Testimonials/testimonials.elements'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 992, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
]

const Testimonals = () => {
  return (
    <div>
      <CustomCarousel itemsToShow={1}>
        <Item>
          <Comment>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum neque ipsum quia fugit
            reprehenderit nulla error! Aliquam sunt quasi iusto dolorem ipsa obcaecati eveniet ut
            eius asperiores, optio est esse.
          </Comment>
          <AuthorContainer>
            <AuthorImageWrapper>
              <AuthorImg src="./authorRec.jpg" />
            </AuthorImageWrapper>
            <AuthorName>
              <strong> - </strong>
              <span>Ironvytas</span>
            </AuthorName>
          </AuthorContainer>
        </Item>
        <Item>
          <Comment>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum neque ipsum quia fugit
            reprehenderit nulla error! Aliquam sunt quasi iusto dolorem ipsa obcaecati eveniet ut
            eius asperiores, optio est esse.
          </Comment>
          <AuthorContainer>
            <AuthorImageWrapper>
              <AuthorImg src="./authorRec.jpg" />
            </AuthorImageWrapper>
            <AuthorName>
              <strong> - </strong>
              <span>Ironvytas</span>
            </AuthorName>
          </AuthorContainer>
        </Item>
        <Item>
          <Comment>
            Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem
            non mi integer non faucibus.
          </Comment>
          <AuthorContainer>
            <AuthorImageWrapper>
              <AuthorImg src="./authorRec.jpg" />
            </AuthorImageWrapper>
            <AuthorName>
              <strong> - </strong>
              <span>Ironvytas</span>
            </AuthorName>
          </AuthorContainer>
        </Item>
      </CustomCarousel>
    </div>
  )
}

export default Testimonals
