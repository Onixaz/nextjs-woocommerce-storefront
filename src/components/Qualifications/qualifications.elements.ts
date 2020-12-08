import styled from 'styled-components'

export const QualificationsWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 2rem;
  @media screen and (max-width: 992px) {
    max-width: 600px;
  }
`
export const QualPhotosWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: calc(50% + 10vw + 10rem);
`
