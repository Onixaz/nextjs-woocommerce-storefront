import styled from 'styled-components'

export const Description = styled.li`
  background: #f0f0f0;
  letter-spacing: 2px;
  padding: 0.25rem 0.5rem;
  font-size: calc(1rem + 0.1vw);
  font-weight: bolder;
  color: ${({ theme }) => theme.primaryText};

  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75px;
`

export const Value = styled.li`
  background: #fff;
  letter-spacing: 2px;
  padding: 0.25rem 0.5rem;
  font-size: calc(1rem + 0.1vw);
  font-weight: bolder;
  color: ${({ theme }) => theme.primaryText};
  //opacity: 0.9;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75px;
`
