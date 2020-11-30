import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  margin: 10rem 0;
`

const PageContainer = ({ children }) => {
  return <Container>{children}</Container>
}

export default PageContainer
