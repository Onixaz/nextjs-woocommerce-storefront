import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;

  padding: 2rem 0 0 0;
`

const PageContainer = ({ children }) => {
  return <Container>{children}</Container>
}

export default PageContainer
