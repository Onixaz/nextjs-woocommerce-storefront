import styled from 'styled-components'

export const PageWrapper = styled.div`
  display: flex;
  padding-top: 5rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  min-height: 50vh;
`

export const ProductImgWrapper = styled.div`
  height: 440px;
  width: 100%;
  overflow: hidden;
  position: relative;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  padding: 0.75rem;
  //position: absolute;
  object-fit: cover;
  transition: 0.5s all;
  //border-radius: 30px;
`

export const ProductInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  margin: 0 auto;
`

export const ProductName = styled.h2`
  font-size: calc(2rem + 0.1vw);
  font-weight: 200;
  letter-spacing: 1px;
`
export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const SalePrice = styled.p`
  margin: 0.5rem;
  font-size: calc(1.5rem + 0.1vw);
  opacity: 0.9;
  font-weight: bolder;
`

export const ShortDescription = styled.div`
  padding: 0.5rem 0;
  font-size: calc(1.2rem + 0.1vw);
`
export const LongDescription = styled.div`
  font-size: calc(1rem + 0.1vw);
  padding: 1rem;
`

export const RegularPrice = styled.p<{ isOnSale: boolean }>`
  color: ${({ theme }) => theme.primaryText};
  text-decoration: ${({ isOnSale }) => (isOnSale ? `line-through` : `none`)};
  font-weight: bolder;
  font-size: ${({ isOnSale }) => (isOnSale ? `calc(1.2rem +  0.1vw)` : `calc(1.5rem +  0.1vw)`)};
  margin: 0 0.25rem;
  opacity: ${({ isOnSale }) => (isOnSale ? `0.5` : `0.9`)};
`
export const AddToCartForm = styled.form`
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
`

export const InputField = styled.input`
  padding: 0.5em;
  margin-right: 1rem;
  max-width: 60px;
  font-size: 1rem;
  text-align: center;
  background-color: #f2f2f2;
  color: #43454b;
  border: none;
  font-weight: 400;

  &[type='number']::-webkit-inner-spin-button {
    opacity: 1;
  }
`
export const AddToCartBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 1;
  padding: 0.5em 1.5em;
  text-decoration: none;
  font-weight: 600;
  text-shadow: none;

  transition: all 0.2s ease-in-out;
  background: #333333;
  border-color: #333333;
  color: #fff;
  width: calc(120px + 0.2vw);
  height: 41px;
  //display: inline-block;
  transition: all 0.2s ease-in-out;
`

export const ProductCategory = styled.p`
  font-size: calc(0.8rem + 0.1vw);
  letter-spacing: 1px;
`
export const CategorySpan = styled.span`
  text-decoration: underline;
`
