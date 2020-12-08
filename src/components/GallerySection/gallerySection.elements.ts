import styled from 'styled-components'

export const GallerySectionContainer = styled.div`
  //background: ${({ theme }) => theme.primaryBlack};
  padding: 10rem 0 4rem 0;
  position: relative;
  display: flex;
  min-height: 75vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const GalleryPhotosWrapper = styled.div`
  max-width: 1300px;
  width: 100%;
`
export const GallerySlideBg = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  z-index: -1;
`
