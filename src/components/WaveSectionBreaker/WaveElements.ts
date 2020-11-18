import styled from 'styled-components'

export const WaveContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  overflow: hidden;
  line-height: 0;
  //transform:rotate(180deg)
`

export const WaveSvg = styled.svg`
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 150px;
`
