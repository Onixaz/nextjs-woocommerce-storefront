import styled from 'styled-components'
import { RiShoppingCart2Fill } from 'react-icons/ri'
import { MdAccountCircle } from 'react-icons/md'

export const Total = styled.span<{ hasItems: boolean }>`
  display: ${({ hasItems }) => (hasItems ? 'flex' : 'none')};
  flex-direction: row;
  letter-spacing: 1.1px;
  font-weight: 400;
`

export const CartIconWrapper = styled.div`
  position: relative;
`

export const CartBadge = styled.button<{ hasItems: boolean }>`
  display: ${({ hasItems }) => (hasItems ? '' : 'none')};
  background: red;
  border-radius: 50%;
  color: #fff;
  font-weight: bold;
  outline: none;
  border: none;
  position: absolute;
  left: 25px;
  z-index: 2;
  width: 30px;
  height: 30px;
`
export const CartIcon = styled(RiShoppingCart2Fill)`
  font-size: 2rem;
  cursor: pointer;
  margin: 0 0.5rem;
`
export const AccIcon = styled(MdAccountCircle)`
  font-size: 2rem;
  cursor: pointer;
  margin: 0 0.5rem;
`

export const IconHolder = styled.div<{ scrollNav: boolean; isMobile: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0 1rem;
  @media screen and (max-width: 768px) {
    display: ${({ isMobile }) => (isMobile ? 'flex' : 'none')};
  }
  ${Total} {
    color: ${({ scrollNav, theme }) => (scrollNav ? theme.primaryText : theme.primaryWhite)};
    font-size: ${({ isMobile }) => (isMobile ? '1.2rem' : '0.9rem')};
  }

  ${CartIcon} {
    color: ${({ scrollNav, theme }) => (scrollNav ? theme.primaryText : theme.primaryWhite)};
    margin: ${({ isMobile }) => (isMobile ? '0.5rem' : '0 0.5rem')};
  }

  ${CartBadge} {
    top: ${({ isMobile }) => (isMobile ? '-5px' : '-15px')};
  }
  ${AccIcon} {
    color: ${({ scrollNav, theme }) => (scrollNav ? theme.primaryText : theme.primaryWhite)};
  }
`
