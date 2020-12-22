import styled from 'styled-components'

export const RedLine = styled.div`
  height: 5px;
  width: 100%;
  padding: 2rem 0;
  opacity: 0.85;
  &::after {
    content: '';
    height: 1px;
    width: 100%;
    //z-index: 1;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(255, 36, 88, 0.9) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    display: block;
  }
`
