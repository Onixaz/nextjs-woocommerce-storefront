import React from 'react'

import Layout from '../components/Layout'
import Privacy from '../components/Privacy/privacy'

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <Layout pageTitle="Privatumo Politika">
      <Privacy />
    </Layout>
  )
}

export default ContactPage
