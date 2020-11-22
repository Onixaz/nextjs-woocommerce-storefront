import styled from 'styled-components'

export const DivBreaker = styled.div`
  height: 5px;
  width: 100%;
  &::after {
    content: '';
    height: 2px;
    width: 100%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(255, 36, 88, 0.9) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    display: block;
    margin-bottom: 10px;
    margin-top: 50px;
  }
`
