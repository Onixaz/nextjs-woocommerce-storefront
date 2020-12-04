import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  padding: 4rem 0 0 0;
`

const PageContainer = ({ children }) => {
  return <Container>{children}</Container>
}

export default PageContainer
