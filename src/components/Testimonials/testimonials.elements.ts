import styled from 'styled-components'
import Carousel from 'react-elastic-carousel'

export const CustomCarousel = styled(Carousel)`
  //margin-top: 4rem;
  /* round buttons on hover */

  .rec.rec-arrow:enabled {
    color: ${({ theme }) => theme.primaryRed};
    background: transparent;
  }

  .rec.rec-arrow:enabled:hover {
    color: #fff;
    background: ${({ theme }) => theme.primaryRed};
  }

  .rec.rec-arrow:disabled {
    background: transparent;
  }

  .rec.rec-dot {
    visibility: hidden;
  }
`

export const Item = styled.div`
  align-items: center;
  min-height: 10rem;
  margin-top: 1rem;

  //font-size: 2rem;
`
export const Comment = styled.p`
  text-align: center;
  font-style: italic;
  font-size: calc(0.75rem + 0.5vw);
  padding: 0.5rem 1.5rem;
  max-width: 850px;
  margin: 0 auto;
`

export const AuthorContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem 1.5rem;
  //border: 1px solid #000;
  align-items: center;
`
export const AuthorImageWrapper = styled.div`
  margin: 0.5rem;
  padding: 1rem;
  width: calc(12vh - 1vw);
`
export const AuthorImg = styled.img`
  border-radius: 100%;
  max-width: 100%;
`

export const AuthorName = styled.p`
  margin: 0;
  font-size: 1rem;

  strong {
    opacity: 0.4;
    font-style: italic;
    @media screen and (max-width: 480px) {
      display: none;
    }
  }

  span {
    font-weight: 600;
    opacity: 0.7;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    color: ${({ theme }) => theme.primaryRed};
    font-style: italic;
    font-weight: 700;
  }
`
