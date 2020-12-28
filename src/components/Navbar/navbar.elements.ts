import styled from 'styled-components'

export const Nav = styled.nav<{ scrollNav: boolean }>`
  background: ${({ scrollNav, theme }) => (scrollNav ? 'transparent' : theme.primaryBlack)};
  height: 80px;
  width: 100%;
  //margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  //padding: 0.5rem calc((100vw - 1200px) /2);
  position: sticky;
  top: 0;
  bottom: 0;
  z-index: 5;

  //border-bottom: 1px solid #000;
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`
export const NavLogoWrapper = styled.div`
  justify-self: flex-start;
  display: flex;
  align-items: center;
`

export const NavbarLogo = styled.img`
  height: 80px;
  width: 160px;
  border-radius: 10px;
  object-fit: cover;
  //transition: filter 1s ease-in-out;
`

export const LogoText = styled.a`
  color: ${({ theme }) => theme.primaryBlack};
  cursor: pointer;
  font-size: 1.5rem;
  letter-spacing: 1.4px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
`

export const LinkText = styled.a`
  color: ${({ theme }) => theme.primaryBlack};
  cursor: pointer;
  font-size: calc(1rem + 0.1vw);
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ theme }) => theme.primaryRed};
  }
`

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
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
  margin-right: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
`

export const NavLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
`

export const NavBtnWrapper = styled.nav`
  display: flex;
  align-items: center;
  //margin-right: -20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
