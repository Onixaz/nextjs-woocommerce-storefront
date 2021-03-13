import { NextPage } from 'next'
import PageTitle from '../components/PageTitle'
import AccountPageContainer from '../containers/Account'

import { BasicContainer } from '../styles/utils'

interface AboutPageProps {}

const AccountPage: NextPage<AboutPageProps> = () => {
  return (
    <>
      <PageTitle
        title="My account | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
      <BasicContainer>
        <AccountPageContainer />
      </BasicContainer>
    </>
  )
}

export default AccountPage
