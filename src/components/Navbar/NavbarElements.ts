import styled from 'styled-components'
import { RiShoppingCart2Fill } from 'react-icons/ri'
import { MdAccountCircle } from 'react-icons/md'

export const LinkText = styled.a`
  cursor: pointer;
  font-size: 1.1rem;
  text-decoration: none;

  font-weight: 600;
  letter-spacing: 1px;
`

export const NavLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavbarLogo = styled.img`
  height: 80px;
  width: 160px;
  border-radius: 10px;
`

export const LogoText = styled.a`
  color: ${({ theme }) => theme.primaryGreen};
  cursor: pointer;
  font-size: calc(1.8rem + 0.1vw);
  letter-spacing: 2px;
  opacity: 0.95;

  font-weight: 600;
  padding: 0 1rem 1rem 1rem;
`

export const TheDot = styled.span`
  color: #3a90b1;
  font-size: 3rem;
`

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    opacity: 0.8;
    top: 1.2rem;
    right: 1.2rem;

    font-size: 2rem; //transform: translate(-100%, 60%);
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
  //padding: 0 0.8rem;
  margin: 0 0.8rem;
`

export const NavBtnWrapper = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavIconHolder = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 1rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const ShoppingCartHolder = styled.div`
  display: flex;
  position: relative;
`

export const TotalPrice = styled.p<{ hasItems: boolean }>`
  display: ${({ hasItems }) => (hasItems ? '' : 'none')};

  font-size: 0.9rem;
  margin: 0 0.5rem;
  font-weight: 600;
  position: absolute;
  top: 50%;

  right: 50%;
  transform: translate(-100%, -50%);
  white-space: nowrap;
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
  top: 40%;
  left: 50%;
  transform: translate(-250%, -100%);
  z-index: 2;
  width: 30px;
  height: 30px;
`
export const CartIcon = styled(RiShoppingCart2Fill)`
  font-size: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-300%, -50%);
  cursor: pointer;
  margin: 0 0.5rem;
  flex: 1;
`
export const AccIcon = styled(MdAccountCircle)`
  font-size: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-150%, -50%);
  cursor: pointer;
  flex: 1;
  margin: 0 0.5rem;
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 95%;
  max-width: 1200px;
  position: relative;
`
export const Nav = styled.nav<{ scrollNav: boolean }>`
  background: ${({ scrollNav, theme }) => (scrollNav ? 'transparent' : theme.primaryBlack)};
  transition: all 0.2s ease-in;
  height: 80px;
  width: 100%;

  //padding-top: ${({ scrollNav }) => (scrollNav ? '40px' : '0px')};
  margin-top: -80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: sticky;
  top: 0;
  bottom: 0;
  z-index: 99;

  ${LinkText} {
    color: ${({ scrollNav, theme }) => (scrollNav ? theme.primaryBlack : theme.primaryWhite)};

    &:hover {
      transition: all 0.2s ease-in-out;
      color: ${({ theme }) => theme.primaryGreen};
    }
  }

  ${MobileIcon} {
    color: ${({ scrollNav, theme }) => (scrollNav ? theme.primaryText : theme.primaryWhite)};
  }

  ${TotalPrice} {
    color: ${({ scrollNav, theme }) => (scrollNav ? theme.primaryText : theme.primaryWhite)};
  }

  ${CartIcon} {
    color: ${({ scrollNav, theme }) => (scrollNav ? theme.primaryText : theme.primaryWhite)};
  }
  ${AccIcon} {
    color: ${({ scrollNav, theme }) => (scrollNav ? theme.primaryText : theme.primaryWhite)};
  }
`
