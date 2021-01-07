import styled from 'styled-components'

export const CategoriesBg = styled.div`
  background: ${({ theme }) => theme.secondaryGreen};
`

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 2rem;
  width: 100%;
  position: relative;
  height: 100%;
  margin-bottom: 5rem;
`

export const CategoryPhotoWrapper = styled.div`
  height: 400px;
  width: 100%;

  position: relative;
`

export const CategoryPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s all;
  border-radius: 10px;
  top: 0;
  left: 0;

  position: absolute;
`

export const CategoryBtn = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  color: ${({ theme }) => theme.primaryText};
  opacity: 0.95;
  overflow: hidden;
  letter-spacing: 1px;
  white-space: nowrap;
  font-weight: bold;
  display: inline-block;
  border-radius: 10px;
  font-size: calc(1rem + 0.3vw);
  transform: translate(-50%, -50%);
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.primaryWhite};
`
