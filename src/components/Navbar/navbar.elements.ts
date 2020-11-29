import styled from 'styled-components'

export const Nav = styled.nav<{ scrollNav: boolean }>`
  background: ${({ scrollNav, theme }) => (scrollNav ? 'transparent' : theme.primaryBlack)};
  height: 80px;
  //margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  //border-bottom: 1px solid #000;
  @media screen and (max-width: 960px) {
    transition: 0.3s all ease;
  }
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
  padding-top: 1rem;
  opacity: 0.9;
  //margin-left: -24px;
`

export const NavbarLogo = styled.img`
  height: 80px;
  width: 160px;
  border-radius: 10px;
  object-fit: cover;
  transition: filter 1s ease-in-out;
`

export const LogoText = styled.a`
  color: ${({ theme }) => theme.primaryRed};
  cursor: pointer;
  font-size: 36px;
  letter-spacing: 1.4px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 400;
`

export const LinkText = styled.a`
  color: ${({ theme }) => theme.primaryWhite};
  cursor: pointer;
  font-size: 1rem;
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
    top: 1rem;
    right: 1.5rem;
    //transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
    color: #fff;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
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

export const NavBtn = styled.button`
  border-radius: 50px;
  background: ${({ theme }) => theme.blue};
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  margin: 10px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`
