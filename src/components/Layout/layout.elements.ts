import styled from 'styled-components'

const LayoutElement = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
`

export const NavbarHolder = styled.div`
  position: sticky;
  height: 80px;
`
export default LayoutElement
