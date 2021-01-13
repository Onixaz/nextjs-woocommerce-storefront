import styled from 'styled-components'
import { RiShoppingCart2Fill } from 'react-icons/ri'
import { MdAccountCircle } from 'react-icons/md'

export const LinkText = styled.a`
  cursor: pointer;
  font-size: calc(1rem + 0.1vw);
  text-decoration: none;
  opacity: 0.8;
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
  //margin-left: 22px;
  font-weight: 600;
  padding-bottom: 1rem;
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

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
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
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const ShoppingCartHolder = styled.div`
  display: flex;
  position: relative;
`

export const TotalPrice = styled.p`
  color: ${({ theme }) => theme.primaryText};
  font-size: calc(1rem + 0.1vw);
  margin: 0 0.5rem;
  font-weight: 400;
`

export const CartBadge = styled.button<{ hasItems: boolean }>`
  display: ${({ hasItems }) => (hasItems ? 'inheri' : 'none')};
  background: red;
  border-radius: 50%;
  color: #fff;
  font-weight: bold;
  outline: none;
  border: none;
  position: absolute;
  top: -15px;
  left: 25px;
  z-index: 2;
  width: 30px;
  height: 30px;
`
export const CartIcon = styled(RiShoppingCart2Fill)`
  font-size: calc(2rem + 0.1vw);
  color: ${({ theme }) => theme.primaryText};
  cursor: pointer;
  margin: 0 0.5rem;
  flex: 1;
`
export const AccIcon = styled(MdAccountCircle)`
  font-size: calc(2rem + 0.1vw);
  color: ${({ theme }) => theme.primaryText};
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
`
export const Nav = styled.nav<{ scrollNav: boolean }>`
  background: ${({ scrollNav, theme }) => (scrollNav ? 'transparent' : theme.primaryBlack)};
  transition: all 0.3s ease-in;
  height: 80px;
  width: 100%;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  bottom: 0;
  z-index: 5;

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
`
