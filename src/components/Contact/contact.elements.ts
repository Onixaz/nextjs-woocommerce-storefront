import styled from 'styled-components'

export const ContactContainer = styled.div`
  //background: ${({ theme }) => theme.lightMediumBg};

  /* background-image: radial-gradient(rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 0.3) 100%),
    url('./para_bg_2.jpg'); */
`

export const ContactWrapper = styled.div`
  display: grid;
  position: relative;
  align-items: center;
  z-index: 1;
  width: 100%;
  min-height: 10vh;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;

  //border: 1px solid #000;

  border-radius: 15px;

  padding: 0 24px;
  @media screen and (max-width: 992px) {
    display: flex;
    justify-content: center;
  }
`

export const ContactRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col2 col1';
  @media screen and (max-width: 992px) {
    grid-template-areas: 'col1 col1' 'col2 col2';
  }
`

export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  padding-right: 3rem;
  padding-left: 3rem;
  grid-area: col1;
  border: 2px solid #000;
  border-left-color: #fff;

  @media screen and (max-width: 992px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  padding-right: 2rem;
  padding-left: 2rem;
  grid-area: col2;

  @media screen and (max-width: 992px) {
    padding-bottom: 1rem;
    padding-top: 1rem;
  }
`
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 50vh;
  @media screen and (max-width: 992px) {
    width: calc(10rem + 30vw);
  }
`
export const ContactH1 = styled.h1`
  margin-bottom: 1rem;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
`
export const ContactInput = styled.input`
  padding: 1rem;
  border-radius: 3px;
  /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.137); */
  margin-bottom: 1rem;
  border: 1px solid lightgray;
  /* border: none; */
  background: #fff;
  font-size: 1rem;
  color: rgb(0, 0, 32);
  outline: none;

  &:focus {
    border: 1px solid #ff2458;
  }
`

export const ContactTextArea = styled.textarea`
  padding: 1rem;
  border-radius: 3px;
  /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.137); */
  margin-bottom: 1rem;
  border: 1px solid lightgray;
  /* border: none; */
  background: #fff;
  font-size: 1rem;
  color: rgb(0, 0, 32);
  outline: none;
  //min-width: 150px;
  min-height: 150px;

  &:focus {
    border: 1px solid #ff2458;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const ContactLabel = styled.label`
  padding: 0.25rem;
  color: rgb(0, 0, 32);
  font-weight: bold;
`

export const ContactBtnWrapper = styled.div`
  margin: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SubmitBtn = styled.button`
  min-width: 1rem;
  max-width: 3rem;
  border-radius: 30px;
  background: ${({ theme }) => theme.primaryRed};
  white-space: nowrap;
  padding: 14px 70px;
  color: ${({ theme }) => theme.primaryBlack};
  font-size: 20px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  //flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ theme }) => theme.primaryBlack};
    color: ${({ theme }) => theme.primaryWhite};
  }
`
