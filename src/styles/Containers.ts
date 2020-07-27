import styled from 'styled-components'

export const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 8px 16px;
`

export const HeroContainer = styled.section`
  width: 100%;
  height: 500px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.light};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
