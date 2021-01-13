import React from 'react'
import Link from 'next/link'
import {
  SidebarContainer,
  ClosedIcon,
  Icon,
  SidebarWrapper,
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
            <Link href="/">
              <SidebarLinkText>Home</SidebarLinkText>
            </Link>
          </SidebarLinkWrapper>
          <SidebarLinkWrapper>
            <Link href="/shop">
              <SidebarLinkText>Shop</SidebarLinkText>
            </Link>
          </SidebarLinkWrapper>
          <SidebarLinkWrapper>
            <Link href="/about">
              <SidebarLinkText>About</SidebarLinkText>
            </Link>
          </SidebarLinkWrapper>
          <SidebarLinkWrapper>
            <Link href="/">
              <SidebarLinkText>Contact</SidebarLinkText>
            </Link>
          </SidebarLinkWrapper>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
