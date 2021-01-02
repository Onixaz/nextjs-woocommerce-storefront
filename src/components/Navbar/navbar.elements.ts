import styled from 'styled-components'

export const Nav = styled.nav<{ scrollNav: boolean }>`
  background: ${({ scrollNav, theme }) => (scrollNav ? 'transparent' : theme.primaryBlack)};
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
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 90%;

  max-width: 1200px;
`
export const NavLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //align-items: normal;
`

export const NavbarLogo = styled.img`
  height: 80px;
  width: 160px;
  border-radius: 10px;
`

export const LogoText = styled.a`
  color: ${({ theme }) => theme.primaryGreen};
  cursor: pointer;
  font-size: calc(1.7rem + 0.1vw);
  letter-spacing: 2px;
  opacity: 0.95;
  text-align: center;
  font-weight: 600;
  padding-bottom: 1rem;
`

export const TheDot = styled.span`
  color: #3a90b1;
  font-size: 3rem;
`

export const LinkText = styled.a`
  color: ${({ theme }) => theme.primaryBlack};
  cursor: pointer;
  font-size: calc(1rem + 0.1vw);
  text-decoration: none;
  opacity: 0.8;
  font-weight: 600;
  letter-spacing: 1px;

  &:hover {
    //transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    color: ${({ theme }) => theme.primaryGreen};
  }
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
    color: ${({ theme }) => theme.primaryBlack};
  }
`

export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  text-align: center;
  //margin-top: 0.2rem;
  //margin-right: -22px;
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
  //margin-right: -20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
