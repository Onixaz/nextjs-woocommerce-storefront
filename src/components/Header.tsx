import React from 'react'
import AppLink from './AppLink'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <AppLink href="/" label="Next.js" />
      <nav>
        <AppLink href="/about" label="About" />
        <AppLink href="/contact" label="Contact" />
      </nav>
    </header>
  )
}

export default Header
