import styled from 'styled-components'

export const PagesList = styled.ul`
  display: flex;
  padding: 0.5rem;
  flex-direction: row;
  justify-content: flex-end;
`

export const Page = styled.li<{ active: boolean; visible: boolean }>`
  cursor: pointer;
  padding: 0.35rem 0.8rem;
  margin: 0.1rem;
  pointer-events: ${({ active }) => (active ? 'none' : 'all')};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  background: ${({ theme, active }) => (active ? '#d0d0d0' : theme.lightMediumBg)};

  &:hover {
    background: ${({ active }) => (active ? '#d0d0d0' : '#e2e2e2')};
  }
`
