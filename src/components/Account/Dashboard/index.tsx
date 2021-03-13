import React, { useEffect, useState } from 'react'

const AccountDashboard: React.FC = () => {
  const [userInfo, setUserInfo] = useState('')
  useEffect(() => {
    const fetchUserData = async () => {
      const req = await fetch('/api/users/get')
      const response = await req.json()
      console.log(response)
    }
    fetchUserData()
  }, [])

  return (
    <div>
      <p>{userInfo}</p>
    </div>
  )
}

export default AccountDashboard
