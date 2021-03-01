import {
  AuthFormInput,
  AuthFormLabel,
  AuthFormFieldWrapper,
  AuthFormError,
  AuthFormWrapper,
} from './AuthFormElements'
import { SubmitHandler, useForm } from 'react-hook-form'

import React, { useRef } from 'react'

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
  const password = useRef({})
  password.current = watch('password', '')

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (isRegister) {
      const { username, first_name, last_name, password } = data
      const req = await fetch('/api/users/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, first_name, last_name, password }),
      })
      const res = await req.json()
    } else {
    }
  }
  return (
    <AuthFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <AuthFormFieldWrapper>
        <AuthFormLabel>Username</AuthFormLabel>
        <AuthFormInput name="username" ref={register({ required: true })} />
        {errors.username && <AuthFormError>This field is required</AuthFormError>}
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
        {errors.passwordRepeat && <AuthFormError>{errors.passwordRepeat.message}</AuthFormError>}
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

      <button type="submit">Submit</button>
    </AuthFormWrapper>
  )
}

export default AuthForm
