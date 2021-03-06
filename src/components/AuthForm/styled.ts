import styled from 'styled-components'

export const Wrapper = styled.form`
  max-width: 520px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`

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

export const Error = styled.span`
  margin: 0.1rem 1rem;
  padding: 0.5rem;
  color: red;
`
export const Label = styled.label`
  margin: 0.2rem 1rem;
  font-size: calc(0.9rem + 0.1vw);
`

export const SubmitBtn = styled.button`
  margin: 3rem auto;
  min-width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(1rem + 0.1vw);
  background-color: #333333;
  border-color: #333333;
  color: #ffffff;
  cursor: pointer;
  padding: 0.5em 1.5em;
  text-decoration: none;
  font-weight: 600;

  transition: all 0.2s ease-in-out;
`
export const Response = styled.p`
  margin: 0.1rem 1rem;
  padding: 0.5rem;
  color: red;
`

export const Message = styled.p`
  cursor: pointer;
  margin: 0 auto;
  max-width: 400px;
  font-size: calc(1rem + 0.1vw);
  letter-spacing: 1px;

  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primaryPurple};
  }
`
