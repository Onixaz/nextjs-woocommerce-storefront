import styled from 'styled-components'

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`
export const RowBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`

export const ShippingBlock = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  width: 100%;
`

export const Label = styled.label`
  margin: 0.2rem 1rem;
  font-size: calc(0.9rem + 0.1vw);
`
export const Input = styled.input`
  background: ${({ theme }) => theme.lightMediumBg};
  margin: 0.1rem 1rem;
  padding: 0.5rem;
  font-size: calc(0.9rem + 0.1vw);
  border: none;
  outline: none;
  position: relative;

  &[type='checkbox'] {
    appearance: none;
    &:checked:after {
      content: '\\2713';
      color: black;
      position: absolute;
      line-height: 1rem;
      font-size: 1rem;
      top: 0;
      left: 3px;
    }
  }
`

export const CustomerNote = styled.textarea`
  min-height: 150px;
  margin: 0.1rem 1rem;
  padding: 0.5rem;
  font-size: calc(0.9rem + 0.1vw);
  background: ${({ theme }) => theme.lightMediumBg};
  border: none;
  outline: none;
  resize: none;
`

export const Error = styled.span`
  margin: 0.1rem 1rem;
  padding: 0.5rem;
  color: red;
`
