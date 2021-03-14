import styled from 'styled-components'

export const Wrapper = styled.div<{ center: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ center }) => (center ? 'center' : 'start')};
  width: 100%;
  margin: 0 auto;
`

export const Sale = styled.p<{ size: number }>`
  color: ${({ theme }) => theme.primaryText};
  font-weight: bold;
  font-size: ${({ size }) => `calc(${size}rem + 0.1vw)`};
  margin: 0 0.25rem;
  opacity: 0.9;
`

export const Regular = styled.p<{ isOnSale: boolean; size: number }>`
  color: ${({ theme }) => theme.primaryText};
  text-decoration: ${({ isOnSale }) => (isOnSale ? `line-through` : `none`)};
  font-weight: bolder;
  font-size: ${({ isOnSale, size }) =>
    isOnSale ? `calc(${size - 0.2}rem +  0.1vw)` : `calc(${size}rem +  0.1vw)`};
  margin: 0 0.25rem;
  opacity: ${({ isOnSale }) => (isOnSale ? `0.5` : `0.9`)};
`
