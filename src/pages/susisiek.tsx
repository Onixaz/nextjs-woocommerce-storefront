import React from 'react'
import dynamic from 'next/dynamic'
import Layout from '../components/Layout'
import PageContainer from '../components/Utilities/PageContainer'
import ContactForm from '../components/Contact'
//const ContactForm = dynamic(() => import('../components/Contact'), { ssr: false })

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <Layout pageTitle="Susisiek">
      <ContactForm />
    </Layout>
  )
}

export default ContactPage
