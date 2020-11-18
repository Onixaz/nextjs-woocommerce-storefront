import styled from 'styled-components'

export const Nav = styled.nav<{ scrollNav: boolean }>`
  background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
  height: 80px;
  margin-top: -80px;
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
  margin-left: 24px;
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
  font-size: 14px;
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
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
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
