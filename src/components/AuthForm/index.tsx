import * as AuthFormStyles from './styled'
import { SubmitHandler, useForm } from 'react-hook-form'
import { signIn } from 'next-auth/client'
import React, { SetStateAction, useContext, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { Loader, SectionTitle } from '../../styles/utils'
import Link from 'next/link'
import { CartContext } from '../../context/cart'
import { Cart } from '../../types'

interface AuthFormProps {
  isRegister: boolean
}
interface FormValues {
  username: string
  first_name: string
  last_name: string
  email: string
  password: string
  passwordRepeat: string
  cartString: string
}

const AuthForm: React.FC<AuthFormProps> = ({ isRegister }) => {
  const { register, handleSubmit, errors, watch } = useForm()
  const [submiting, setSubmiting] = useState(false)
  const [response, setResponse] = useState('')
  const [cart] = useContext(CartContext)
  const password = useRef({})
  const router = useRouter()
  password.current = watch('password', '')

  const btnText = isRegister ? 'Register' : 'Login'

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      setSubmiting(true)
      const cartString = JSON.stringify(cart)
      data = { ...data, cartString }
      if (isRegister) {
        const req = await fetch('/api/customers/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
        const status = req.status
        const { message } = await req.json()

        if (status === 200) {
          await signIn('credentials', {
            redirect: false,
            ...data,
          })

          router.push('account')
        } else {
          setResponse(message)
        }
      } else {
        const user: any = await signIn('credentials', {
          redirect: false,
          ...data,
        })

        if (user.ok === true) {
          router.push('account')
        } else {
          setResponse('Wrong username or password')
        }
        setSubmiting(false)
      }
    } catch (error) {
      setSubmiting(false)
      console.log(error)
    }
  }
  return (
    <AuthFormStyles.Wrapper onSubmit={handleSubmit(onSubmit)}>
      {!isRegister && <SectionTitle>My account</SectionTitle>}

      <AuthFormStyles.Subtitle>
        {isRegister ? 'Register as a new customer!' : 'Login'}
      </AuthFormStyles.Subtitle>

      <AuthFormStyles.FieldWrapper>
        <AuthFormStyles.Label>Username</AuthFormStyles.Label>
        <AuthFormStyles.Input
          name="username"
          ref={register({
            required: 'This field is required',
            pattern: { value: /^[a-zA-Z0-9_.-]*$/, message: 'Special characters are not allowed.' },
          })}
        />
        {errors.username && <AuthFormStyles.Error>{errors.username.message}</AuthFormStyles.Error>}
      </AuthFormStyles.FieldWrapper>
      {isRegister && (
        <>
          <AuthFormStyles.FieldWrapper>
            <AuthFormStyles.Label>First Name</AuthFormStyles.Label>
            <AuthFormStyles.Input name="first_name" ref={register({ required: true })} />
            {errors.first_name && (
              <AuthFormStyles.Error>This field is required</AuthFormStyles.Error>
            )}
          </AuthFormStyles.FieldWrapper>
          <AuthFormStyles.FieldWrapper>
            <AuthFormStyles.Label>Last Name</AuthFormStyles.Label>
            <AuthFormStyles.Input name="last_name" ref={register({ required: true })} />
            {errors.last_name && (
              <AuthFormStyles.Error>This field is required</AuthFormStyles.Error>
            )}
          </AuthFormStyles.FieldWrapper>
          <AuthFormStyles.FieldWrapper>
            <AuthFormStyles.Label>Email address</AuthFormStyles.Label>
            <AuthFormStyles.Input
              name="email"
              ref={register({
                required: 'This field is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <AuthFormStyles.Error>{errors.email.message}</AuthFormStyles.Error>}
          </AuthFormStyles.FieldWrapper>{' '}
        </>
      )}

      <AuthFormStyles.FieldWrapper>
        <AuthFormStyles.Label htmlFor="password">Password</AuthFormStyles.Label>
        <AuthFormStyles.Input
          name="password"
          type="password"
          ref={register({
            required: 'You must specify a password',
            minLength: {
              value: 8,
              message: 'Password must have at least 8 characters',
            },
          })}
        />
        {errors.password && <AuthFormStyles.Error>{errors.password.message}</AuthFormStyles.Error>}
      </AuthFormStyles.FieldWrapper>

      {isRegister && (
        <AuthFormStyles.FieldWrapper>
          <AuthFormStyles.Label htmlFor="passwordRepeat">Repeat password</AuthFormStyles.Label>
          <AuthFormStyles.Input
            type="password"
            name="passwordRepeat"
            ref={register({
              required: 'This field is required',
              validate: (value) => value === password.current || "Paswords don't match",
            })}
          />
          {errors.passwordRepeat && (
            <AuthFormStyles.Error>{errors.passwordRepeat.message}</AuthFormStyles.Error>
          )}
        </AuthFormStyles.FieldWrapper>
      )}

      <AuthFormStyles.SubmitBtn disabled={submiting} type="submit">
        {submiting ? <Loader /> : btnText}
      </AuthFormStyles.SubmitBtn>
      <AuthFormStyles.Response>{response}</AuthFormStyles.Response>
      {!isRegister && (
        <Link href="/register" passHref>
          <AuthFormStyles.Message>Don't have an account?</AuthFormStyles.Message>
        </Link>
      )}
    </AuthFormStyles.Wrapper>
  )
}

export default AuthForm
