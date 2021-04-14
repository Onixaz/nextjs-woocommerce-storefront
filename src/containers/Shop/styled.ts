import styled from 'styled-components'

export const PagesList = styled.ul``

export const Page = styled.li<{ active: boolean }>`
  cursor: pointer;
  color: ${({ active }) => (active ? 'red' : '')};
`
