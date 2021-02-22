import { NextPage } from 'next'
import Link from 'next/link'
import CustomHead from '../components/CustomHead'
import { BasicContainer, SectionTitle } from '../styles/Global/utils'

interface AccountPageProps {}

const AccountPage: NextPage<AccountPageProps> = () => {
  return (
    <>
      <CustomHead
        title="Login | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
      <BasicContainer>
        <SectionTitle>Account Page!</SectionTitle>
      </BasicContainer>
    </>
  )
}

export default AccountPage
