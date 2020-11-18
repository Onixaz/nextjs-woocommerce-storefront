import React, { useState } from 'react'
import Link from 'next/link'
import { Button, ArrowForward, ArrowRight } from './MainButtonElements'

interface MainButtonProps {
  hero?: boolean
  label: string
  href?: string
}

const MainButton: React.FC<MainButtonProps> = ({ hero, label, href }) => {
  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(!hover)
  }

  return (
    <Link href={href}>
      <Button hero={hero} onMouseEnter={onHover} onMouseLeave={onHover}>
        {label} {hover ? <ArrowForward /> : <ArrowRight />}
      </Button>
    </Link>
  )
}

export default MainButton
