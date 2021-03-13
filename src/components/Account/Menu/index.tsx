import React, { SetStateAction, Dispatch } from 'react'
import { signOut } from 'next-auth/client'
import * as AccountMenuStyles from './styled'

interface AccountMenuProps {
  setView: Dispatch<SetStateAction<string>>
}

const AccountMenu: React.FC<AccountMenuProps> = ({ setView }) => {
  const handleLogout = (options: any) => async () => {
    await signOut(options)
  }
  return (
    <AccountMenuStyles.Wrapper>
      <AccountMenuStyles.Menu>
        <AccountMenuStyles.LinkText onClick={() => setView('dashboard')}>
          Dashboard
        </AccountMenuStyles.LinkText>
        <AccountMenuStyles.LinkText onClick={() => setView('orders')}>
          Orders
        </AccountMenuStyles.LinkText>
        <AccountMenuStyles.LinkText onClick={() => setView('wishlist')}>
          Wishlist
        </AccountMenuStyles.LinkText>
        <AccountMenuStyles.LinkText onClick={() => setView('addresses')}>
          Addresses
        </AccountMenuStyles.LinkText>
        <AccountMenuStyles.LinkText onClick={() => setView('details')}>
          Account details
        </AccountMenuStyles.LinkText>
        <AccountMenuStyles.LinkText onClick={handleLogout({ redirect: false })}>
          Logout
        </AccountMenuStyles.LinkText>
      </AccountMenuStyles.Menu>
    </AccountMenuStyles.Wrapper>
  )
}

export default React.memo(AccountMenu)
