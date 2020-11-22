import React from 'react'
import Link from 'next/link'
import {
  SidebarContainer,
  ClosedIcon,
  Icon,
  SidebarWrapper,
  SideBtnWrap,
  SidebarRoute,
  SidebarMenu,
  SidebarLinkWrapper,
  SidebarLinkText,
} from './SidebarElements'

interface SidebarProps {
  toggle: any
  isOpen: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <ClosedIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinkWrapper onClick={toggle}>
            <Link href="#about">
              <SidebarLinkText>Apie mane</SidebarLinkText>
            </Link>
          </SidebarLinkWrapper>
          <SidebarLinkWrapper>
            <Link href="#services">
              <SidebarLinkText>Paslaugos</SidebarLinkText>
            </Link>
          </SidebarLinkWrapper>
          <SidebarLinkWrapper>
            <Link href="#about">
              <SidebarLinkText>Galerija</SidebarLinkText>
            </Link>
          </SidebarLinkWrapper>
          <SidebarLinkWrapper>
            <Link href="#about">
              <SidebarLinkText>Susisiek</SidebarLinkText>
            </Link>
          </SidebarLinkWrapper>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute>Mygtukas</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
