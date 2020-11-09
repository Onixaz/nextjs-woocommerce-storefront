import React from 'react'
import Link, { LinkProps } from 'next/link'

interface AppLinkProps extends LinkProps {
  label: string
}

const AppLink: React.FC<AppLinkProps> = ({ href, label, ...props }) => {
  return (
    <Link href={href} {...props}>
      <a>{label}</a>
    </Link>
  )
}

export default AppLink
