import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'
import styled from 'styled-components'

export const Button = styled.button<{ hero?: boolean }>`
  border-radius: 30px;
  background: ${({ theme }) => theme.primaryRed};
  white-space: nowrap;
  margin: 0 1rem;
  padding: 14px 48px;
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
    background: ${({ hero, theme }) => (hero ? theme.primaryWhite : theme.primaryBlack)};
    color: ${({ hero, theme }) => (hero ? theme.primaryBlack : theme.primaryWhite)};
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`
