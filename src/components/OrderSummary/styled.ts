import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  margin: 2rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  width: 100%;
`

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
`

export const DescriptionTall = styled.li`
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

export const DescriptionWhite = styled.li<{ shipping: boolean }>`
  background: #fff;
  letter-spacing: 2px;
  padding: 0.25rem 0.5rem;
  font-size: ${({ shipping }) => (shipping ? `calc(0.8rem + 0.1vw)` : `calc(1rem + 0.1vw)`)};
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
export const ItemTotal = styled.li`
  padding: 0.25rem 0.5rem;
  justify-content: center;
  display: flex;
  align-items: center;
  text-align: center;
  max-width: 160px;
  margin: 0 auto;
  font-size: calc(0.9rem + 0.1vw);
  color: ${({ theme }) => theme.primaryText};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75px;
`

export const ItemName = styled.li`
  padding: 0.25rem 0.5rem;
  font-weight: 500;
  justify-content: center;
  display: flex;
  align-items: center;
  text-align: center;
  max-width: 160px;
  margin: 0 auto;
  font-size: calc(0.9rem + 0.1vw);
  white-space: nowrap;
  color: ${({ theme }) => theme.primaryText};

  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75px;
`

export const DescriptionLow = styled.li`
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
`

export const ShippingWrapper = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #fff;
  width: 100%;
  margin: 0 auto;
`

export const Values = styled.div`
  display: flex;
  background: #fff;
  flex-direction: column;
`

export const Method = styled.div`
  display: flex;
  flex-direction: row;
  background: #fff;
  align-items: center;
`

export const Label = styled.label`
  background: #fff;
  letter-spacing: 2px;
  padding: 0.25rem 0.5rem;
  font-size: calc(1rem + 0.1vw);
  text-align: center;
  color: ${({ theme }) => theme.primaryText};
`

export const Error = styled.span`
  margin: 0.1rem 1rem;
  padding: 0.5rem;
  color: red;
`
