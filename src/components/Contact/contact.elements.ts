import styled from 'styled-components'

export const ContactContainer = styled.div`
  min-height: 120vh;
  display: flex;
`

export const ContactWrapper = styled.div`
  display: flex;
  opacity: 0.95;
  border-radius: 15px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 100%;
  //margin: 1rem;
  min-height: 60vh;
`

export const ContactRow = styled.div`
  display: grid;
  width: 100%;

  grid-auto-columns: minmax(auto, 1fr);
  //align-items: center;

  grid-template-areas: 'col1 col2';
  @media screen and (max-width: 992px) {
    grid-template-areas: 'col1 col1' 'col2 col2';
  }
`

export const ContactColumn1 = styled.div`
  //background: ${({ theme }) => theme.lightMediumBg};
  min-height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  padding: 1rem 4rem 1rem 1rem;
  flex-direction: column;
  margin-bottom: 15px;
  grid-area: col1;
  //border-radius: 15px;
  //border: 2px solid #000;
  @media screen and (max-width: 992px) {
    border: none;
    padding: 3rem 0 0 0;
  }
`

export const ContactColumn2 = styled.div`
  //background: ${({ theme }) => theme.lightMediumBg};
  min-height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
  padding: 1rem 1rem 1rem 4rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  grid-area: col2;
  border-left: 3px solid rgba(13, 13, 13, 0.2);

  @media screen and (max-width: 992px) {
    border: none;
    padding: 0;
    display: none;
  }
`

export const FormH1 = styled.p`
  opacity: 0.95;
  letter-spacing: 1px;
  font-size: calc(2.5rem + 0.1vw);
  font-weight: 600;
  line-height: 1.3;
  padding: 1rem 0.5rem;
  @media screen and (max-width: 992px) {
    text-align: center;
    margin-bottom: 1rem;
  }
`

export const CustomForm = styled.form`
  height: auto;
  min-width: 100%;

  z-index: 1;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem 0.5rem;
  border: none;
  outline: none;

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`

export const FormTextArea = styled.textarea`
  //padding: 1rem;
  padding: 1rem;
  resize: none;
  background: ${({ theme }) => theme.lightMediumBg};
  margin-bottom: 1rem;
  //border: none;
  font-size: 1rem;
  color: rgb(0, 0, 32);
  outline: none;
  border: 2px solid #000;
  //border-bottom: 1px solid #000;

  min-height: 150px;

  &:focus {
    border: 2px solid ${({ theme }) => theme.primaryRed};
  }

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`

export const FormLabel = styled.label`
  text-transform: uppercase;

  letter-spacing: 1px;
  opacity: 0.95;
  font-weight: 600;
  color: ${({ theme }) => theme.primaryBlack};
  margin-bottom: 8px;
  font-size: calc(1rem + 0.1vw);
  //color: #000;
`

export const FormInput = styled.input`
  background: ${({ theme }) => theme.lightMediumBg};
  padding: 0.25rem 0;
  margin-bottom: 32px;
  border: none;
  background-color: ${({ theme }) => theme.lightMediumBg};
  border-bottom: 2px solid #000;
  font-size: calc(1rem + 0.1vw);

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.primaryRed};
  }
`

export const SubmitBtnWrap = styled.div`
  margin-left: -22px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
    margin-left: 0;
  }
`

export const SubmitButton = styled.button`
  border-radius: 30px;
  background: ${({ theme }) => theme.primaryRed};
  white-space: nowrap;
  margin: 1rem;
  padding: 14px 48px;
  color: ${({ theme }) => theme.primaryBlack};
  font-size: calc(1rem + 0.1vw);
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  //flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ theme }) => theme.primaryBlack};
    color: ${({ theme }) => theme.primaryWhite};
  }

  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
    background: ${({ theme }) => theme.primaryBlack};
    color: ${({ theme }) => theme.primaryWhite};
  }
`

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`

export const MessagePlaceholderDiv = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContactList = styled.ul`
  margin-top: 3rem;
  padding: 0.25rem;
`

export const ContactListItem = styled.li`
  //margin: 0 5px 0 5px;
  padding: 0.5rem 0;
  font-size: calc(1.3rem + 0.1vw);
  //margin-left: 1.5em;

  &:before {
    content: '\\27A4';
    color: ${({ theme }) => theme.primaryRed};

    font-weight: 900;
    display: inline-block;

    width: 1.5em;
  }
`

export const EnvelopeImgWrap = styled.div`
  max-width: 220px;

  display: flex;
  justify-content: center;
  //margin: 0 auto;
  margin: -70px auto 0 0;
  //margin: -30px 30px 0 0;
  height: 100%;

  @media screen and (max-width: 992px) {
    justify-content: center;
    margin: 0 auto;
    padding-top: 3rem;
    max-width: 360px;
  }
`

export const EnvelopeImg = styled.img`
  width: 100%;

  //margin: 0 0 10px 0;
  //padding-right: 0;
`
