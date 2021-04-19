import React from 'react'
import AuthForm from '../../components/AuthForm'
import { BasicContainer } from '../../styles/utils'
import * as LoginPageStyles from './styled'

const LoginPageContainer = () => {
  return (
    <BasicContainer>
      <LoginPageStyles.Wrapper>
        <AuthForm isRegister={false} />
      </LoginPageStyles.Wrapper>
    </BasicContainer>
  )
}

export default LoginPageContainer
