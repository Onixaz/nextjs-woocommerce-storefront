import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
`

export const LinkText = styled.a`
  cursor: pointer;
  padding: 1rem 0.25rem;
  transition: all 0.2s ease-in-out;
  border-top: 1px solid #e3e3e3;

  &:hover {
    color: ${({ theme }) => theme.primaryPurple};
  }
  &:last-child {
    border-bottom: 1px solid #e3e3e3;
  }
`
