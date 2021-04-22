import * as AccountPageStyles from './styled'
import { useSession } from 'next-auth/client'
import React from 'react'
import { BasicContainer } from '../../styles/utils'
import AccountGrid from '../../components/Account/Grid'

const AccountPageContainer: React.FC = () => {
  const [session]: any = useSession()

  return (
    <BasicContainer>
      <AccountPageStyles.Wrapper>
        {session ? (
          <AccountGrid />
        ) : (
          <AccountPageStyles.Info>Please login or register first</AccountPageStyles.Info>
        )}
      </AccountPageStyles.Wrapper>
    </BasicContainer>
  )
}

export default AccountPageContainer
