import { NextPage } from 'next'
import { signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import React from 'react'
import PageTitle from '../components/Layout/Head/PageTitle'
import { BasicContainer, SectionTitle } from '../styles/Global/utils'

interface AccountPageProps {}

const AccountPage: NextPage<AccountPageProps> = () => {
  const [session]: any = useSession()
  const router = useRouter()

  const handleLogout = (options: any) => async () => {
    await signOut(options)
    router.push('login')
  }

  return (
    <>
      <PageTitle
        title="Login | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
      <BasicContainer>
        {session ? (
          <>
            <SectionTitle>Welcome {session.user.username}!</SectionTitle>
            <button onClick={handleLogout({ redirect: false })}>Sign Out</button>
          </>
        ) : (
          <SectionTitle>Account Page!</SectionTitle>
        )}
      </BasicContainer>
    </>
  )
}

export default AccountPage
