import React, { useState } from 'react'
import AccountMenu from '../Menu'
import * as AccGridStyles from './styled'
import AccountDashboard from '../Dashboard'

const AccountGrid: React.FC = () => {
  const [view, setView] = useState('dashboard')

  const renderView = (): { [key: string]: React.ReactElement } => ({
    dashboard: <AccountDashboard />,
    orders: <p>orders</p>,
    wishlist: <p>wishlist</p>,
    addresses: <p>addresses</p>,
  })

  return (
    <AccGridStyles.Grid>
      <AccountMenu setView={setView} />

      <div>{renderView()[view]}</div>
    </AccGridStyles.Grid>
  )
}

export default AccountGrid
