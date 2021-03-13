import React from 'react'
import AuthForm from '../../components/AuthForm'
import { BasicContainer } from '../../styles/utils'
import * as RegisterPageStyles from './styled'

const RegisterPageContainer = () => {
  return (
    <BasicContainer>
      <RegisterPageStyles.Wrapper>
        <AuthForm isRegister={true} />
      </RegisterPageStyles.Wrapper>
    </BasicContainer>
  )
}

export default RegisterPageContainer
