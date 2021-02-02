import styled from 'styled-components'

export const OrderSummaryContainer = styled.div`
  display: flex;
  margin: 2rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  width: 100%;
`

export const SummaryGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
`

export const SumItemDesc = styled.li`
  background: #f0f0f0;
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

export const SumItemDescWhite = styled.li`
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
export const SumItemTotal = styled.li`
  padding: 0.25rem 0.5rem;
  justify-content: center;
  display: flex;
  align-items: center;
  text-align: center;
  max-width: 160px;
  margin: 0 auto;
  font-size: calc(0.9rem + 0.1vw);

  color: ${({ theme }) => theme.primaryText};
  //opacity: 0.8;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75px;
`

export const SumItemName = styled.li`
  padding: 0.25rem 0.5rem;
  font-weight: 500;
  justify-content: center;
  display: flex;
  align-items: center;
  text-align: center;
  max-width: 160px;
  margin: 0 auto;
  font-size: calc(0.9rem + 0.1vw);
  //font-weight: bolder;
  color: ${({ theme }) => theme.primaryText};
  //opacity: 0.8;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75px;
`
