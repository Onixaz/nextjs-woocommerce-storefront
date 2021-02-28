import { NextPage } from 'next'
import { useSession } from 'next-auth/client'
import CustomHead from '../components/CustomHead'
import { BasicContainer, SectionTitle } from '../styles/Global/utils'

interface AccountPageProps {}

const AccountPage: NextPage<AccountPageProps> = () => {
  const [session]: any = useSession()

  return (
    <>
      <CustomHead
        title="Login | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
      <BasicContainer>
        {session ? (
          <SectionTitle>Welcome {session.user.username}!</SectionTitle>
        ) : (
          <SectionTitle>Account Page!</SectionTitle>
        )}
      </BasicContainer>
    </>
  )
}

export default AccountPage
