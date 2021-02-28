import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type FormValues = {
  firstName: string
  lastName: string
  email: string
}

const AuthForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const req = await fetch('/api/users/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    const res = await req.json()
    console.log(res)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username</label>
        <input name="username" ref={register} />
      </div>
      <div>
        <label>First Name</label>
        <input name="first_name" ref={register} />
      </div>

      <div>
        <label>Last Name</label>
        <input name="last_name" ref={register} />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input name="email" type="email" ref={register} />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input name="password" type="password" ref={register} />
      </div>

      <input type="submit" />
    </form>
  )
}

export default AuthForm
