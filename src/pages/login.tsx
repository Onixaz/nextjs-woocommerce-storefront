import React, { useState } from 'react'
import { NextPage } from 'next'
import { useForm, SubmitHandler } from 'react-hook-form'
import Router from 'next/router'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'
import CustomHead from '../components/CustomHead'
import { BasicContainer, SectionTitle } from '../styles/Global/utils'

interface LoginPageProps {}

type FormValues = {
  username: string
  password: string
}

const LoginPage: NextPage<LoginPageProps> = () => {
  const { register, handleSubmit } = useForm<FormValues>()
  const [response, setResponse] = useState<any>('')
  const [session] = useSession()

  if (session) {
    console.log(session)
  }

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data)
    const { username, password } = data

    const response: any = await signIn('credentials', {
      redirect: false,
      username,
      password,
    })
    if (response.ok === true) {
      setResponse('Welcome')
    } else {
      setResponse('Wrong username or password')
    }

    console.log(response)
  }

  const handleLogout = (options: any) => async () => {
    await signOut(options)

    setResponse('')
  }

  return (
    <>
      <CustomHead
        title="Login | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
      <BasicContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="username">Username</label>
            <input name="username" type="text" ref={register} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input name="password" type="password" ref={register} />
          </div>

          <input type="submit" />
        </form>
        <p>{response}</p>

        {session ? <button onClick={handleLogout({ redirect: false })}>Logout</button> : null}
      </BasicContainer>
    </>
  )
}

export default LoginPage
