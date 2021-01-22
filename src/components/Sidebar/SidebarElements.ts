import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

export const SidebarContainer = styled.aside<{ isOpen: boolean }>`
  position: fixed;
  z-index: 999;

  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const ClosedIcon = styled(FaTimes)`
  color: #ffffff;
`

export const Icon = styled.div`
  position: absolute;
  top: 1rem;
  right: 2rem;
  background: transparent;
  font-size: 2.3rem;
  cursor: pointer;
  outline: none;
`

export const SidebarWrapper = styled.div`
  margin-top: 3rem;
  color: #fff;
`

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`

export const SidebarRoute = styled.button`
  border-radius: 50px;
  background: ${({ theme }) => theme.primaryRed};
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`

export const SidebarMenu = styled.ul`
  display: grid;
  padding: 0 40px;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat (6, 60px);
  }
`

export const SidebarLinkWrapper = styled.button`
  outline: none;
  border: none;
  background: #0d0d0d; //change color
  display: flex;
  align-items: center;
  justify-content: center;
`
export const SidebarLinkText = styled.a`
  font-size: 1.3rem;
  letter-spacing: 1.1px;
  text-decoration: none;
  list-style: none;
  text-transform: uppercase;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.primaryGreen};
    transition: 0.2s ease-in-out;
  }
`
