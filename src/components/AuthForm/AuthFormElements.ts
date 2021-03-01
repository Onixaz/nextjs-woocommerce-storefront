import styled from 'styled-components'

export const AuthFormWrapper = styled.form`
  max-width: 520px;
  margin: 0 auto;
`

export const AuthFormFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`
export const AuthFormRowBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`

export const AuthFormInput = styled.input`
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

export const AuthFormError = styled.span`
  margin: 0.1rem 1rem;
  padding: 0.5rem;
  color: red;
`
export const AuthFormLabel = styled.label`
  margin: 0.2rem 1rem;
  font-size: calc(0.9rem + 0.1vw);
`
