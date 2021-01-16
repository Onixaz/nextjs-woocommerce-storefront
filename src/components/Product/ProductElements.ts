import styled from 'styled-components'
import { RiShoppingCart2Fill } from 'react-icons/ri'

export const ProductCard = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ProductImgWrapper = styled.div`
  height: 340px;
  width: 100%;
  overflow: hidden;
  position: relative;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  padding: 1rem;
  //position: absolute;
  object-fit: cover;
  transition: 0.5s all;
  border-radius: 30px;
  /* top: 0;
  left: 0; */
`

export const ProductBtn = styled.div`
  position: absolute;
  top: 83%;
  left: 50%;
  border-radius: 30px;
  color: ${({ theme }) => theme.primaryBlack};
  opacity: 0.8;
  object-fit: cover;
  overflow: hidden;
  letter-spacing: 1px;
  white-space: nowrap;
  font-weight: bold;
  display: inline-block;
  text-align: center;
  min-width: 100px;
  //border-radius: 10px;
  font-size: calc(0.7rem + 0.3vw);
  transform: translate(-50%, -50%);
  padding: 1rem calc(0.5rem + 0.5vw);
  background: ${({ theme }) => theme.primaryWhite};
`

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`

export const RegularPrice = styled.p`
  color: ${({ theme }) => theme.primaryText};

  font-weight: bold;
  font-size: calc(1rem + 0.1vw);
  margin: 0 1rem;
`
export const SalePrice = styled.p`
  color: ${({ theme }) => theme.primaryGreen};
`
export const AddToCartIcon = styled(RiShoppingCart2Fill)`
  font-size: calc(1.5rem + 0.1vw);
  align-self: auto;
  color: ${({ theme }) => theme.primaryText};
  cursor: pointer;
  margin: 0 1rem;
`
