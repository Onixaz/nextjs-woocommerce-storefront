import {
  ClosedIcon,
  Icon,
  SidebarContainer,
  SidebarIconHolder,
  SidebarLinkText,
  SidebarLinkWrapper,
  SidebarMenu,
  SidebarWrapper,
} from './SidebarElements'

import Link from 'next/link'
import NavigationIcons from '../NavIcons'
import React from 'react'

interface SidebarProps {
  toggle: () => void
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
            <Link href="/contact">
              <SidebarLinkText>Contact</SidebarLinkText>
            </Link>
          </SidebarLinkWrapper>
        </SidebarMenu>
      </SidebarWrapper>
      <SidebarIconHolder>
        <NavigationIcons scrollNav={false} isMobile={true} />
      </SidebarIconHolder>
    </SidebarContainer>
  )
}

export default Sidebar
