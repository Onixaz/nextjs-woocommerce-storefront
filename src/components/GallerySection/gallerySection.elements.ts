import styled from 'styled-components'

export const GallerySectionContainer = styled.div`
  //background: ${({ theme }) => theme.primaryBlack};
  padding: 10rem 0 4rem 0;

  display: flex;
  min-height: 75vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const GalleryPhotosWrapper = styled.div`
  max-width: 1400px;
  width: calc(50% + 10vw + 10rem);
`
