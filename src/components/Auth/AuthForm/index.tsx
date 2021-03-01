import {
  AuthFormInput,
  AuthFormLabel,
  AuthFormFieldWrapper,
  AuthFormError,
  AuthFormWrapper,
  AuthFormSubmitBtn,
  AuthFormResponse,
  AuthFormMessage,
} from './AuthFormElements'
import { SubmitHandler, useForm } from 'react-hook-form'
import { signIn } from 'next-auth/client'
import React, { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { Loader, SectionTitle } from '../../../styles/Global/utils'
import Link from 'next/link'

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
}

const AuthForm: React.FC<AuthFormProps> = ({ isRegister }) => {
  const { register, handleSubmit, errors, watch } = useForm()
  const [isSubmiting, setIsSubmiting] = useState(false)
  const [response, setResponse] = useState('')
  const router = useRouter()
  const password = useRef({})
  password.current = watch('password', '')

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      setIsSubmiting((prev: boolean) => !prev)
      if (isRegister) {
        const req = await fetch('/api/users/create', {
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
        const response: any = await signIn('credentials', {
          redirect: false,
          ...data,
        })
        if (response.ok === true) {
          router.push('account')
        } else {
          setResponse('Wrong username or password')
        }
      }
      setIsSubmiting((prev: boolean) => !prev)
    } catch (error) {
      setIsSubmiting((prev: boolean) => !prev)
      console.log(error)
    }
  }
  return (
    <AuthFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <SectionTitle>
        {isRegister ? 'Register as a new customer!' : 'Log in to your account !'}
      </SectionTitle>
      {!isRegister && (
        <Link href="/register" passHref>
          <AuthFormMessage>Don't have an account?</AuthFormMessage>
        </Link>
      )}

      <AuthFormFieldWrapper>
        <AuthFormLabel>Username</AuthFormLabel>
        <AuthFormInput
          name="username"
          ref={register({
            required: 'This field is required',
            pattern: { value: /^[a-zA-Z0-9_.-]*$/, message: 'Special characters are not allowed.' },
          })}
        />
        {errors.username && <AuthFormError>{errors.username.message}</AuthFormError>}
      </AuthFormFieldWrapper>
      {isRegister && (
        <>
          <AuthFormFieldWrapper>
            <AuthFormLabel>First Name</AuthFormLabel>
            <AuthFormInput name="first_name" ref={register({ required: true })} />
            {errors.first_name && <AuthFormError>This field is required</AuthFormError>}
          </AuthFormFieldWrapper>
          <AuthFormFieldWrapper>
            <AuthFormLabel>Last Name</AuthFormLabel>
            <AuthFormInput name="last_name" ref={register({ required: true })} />
            {errors.last_name && <AuthFormError>This field is required</AuthFormError>}
          </AuthFormFieldWrapper>
          <AuthFormFieldWrapper>
            <AuthFormLabel>Email address</AuthFormLabel>
            <AuthFormInput
              name="email"
              ref={register({
                required: 'This field is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <AuthFormError>{errors.email.message}</AuthFormError>}
          </AuthFormFieldWrapper>{' '}
        </>
      )}

      <AuthFormFieldWrapper>
        <AuthFormLabel htmlFor="password">Password</AuthFormLabel>
        <AuthFormInput
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
        {errors.password && <AuthFormError>{errors.password.message}</AuthFormError>}
      </AuthFormFieldWrapper>

      {isRegister && (
        <AuthFormFieldWrapper>
          <AuthFormLabel htmlFor="passwordRepeat">Repeat password</AuthFormLabel>
          <AuthFormInput
            type="password"
            name="passwordRepeat"
            ref={register({
              required: 'This field is required',
              validate: (value) => value === password.current || "Paswords don't match",
            })}
          />
          {errors.passwordRepeat && <AuthFormError>{errors.passwordRepeat.message}</AuthFormError>}
        </AuthFormFieldWrapper>
      )}

      <AuthFormSubmitBtn disabled={isSubmiting} type="submit">
        {isSubmiting ? <Loader /> : isRegister ? 'Register' : 'Login'}
      </AuthFormSubmitBtn>
      <AuthFormResponse>{response}</AuthFormResponse>
    </AuthFormWrapper>
  )
}

export default AuthForm
