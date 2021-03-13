import * as AccountPageStyles from './styled'
import { useSession } from 'next-auth/client'
import React from 'react'
import AuthForm from '../../components/AuthForm'
import { BasicContainer } from '../../styles/utils'
import AccountGrid from '../../components/Account/Grid'

const AccountPageContainer: React.FC = () => {
  const [session]: any = useSession()

  return (
    <BasicContainer>
      <AccountPageStyles.Wrapper>
        {session ? <AccountGrid /> : <AuthForm isRegister={false} />}
      </AccountPageStyles.Wrapper>
    </BasicContainer>
  )
}

export default AccountPageContainer
