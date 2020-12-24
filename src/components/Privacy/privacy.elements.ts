import styled from 'styled-components'

export const PrivacyContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 0;
  width: 85%;
`

export const PrivacyList = styled.ul``

export const PrivacyListItem = styled.li`
  padding: 1rem 0;
`
export const PrivacyH1 = styled.h1`
  font-size: calc(1.5rem + 0.2vw);
  font-weight: 600;
  padding: 1rem 0;
  text-align: center;
`

export const PrivacyP = styled.p`
  font-size: calc(0.9rem + 0.2vw);
  opacity: 0.95;
  padding: 0.25rem 0;
  font-weight: 400;
`

export const PrivacyAddInfoWrapper = styled.div`
  padding: 5rem 0;
`

export const PrivacyInfo = styled.p`
  color: ${({ theme }) => theme.primaryRed};
  font-size: calc(1rem + 0.2vw);
  text-transform: uppercase;
  font-weight: 600;
  padding: 1rem 0;
  text-align: center;
`
