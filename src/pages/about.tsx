import { NextPage } from 'next'
import PageTitle from '../components/PageTitle'

import { BasicContainer, SectionTitle } from '../styles/utils'

interface AboutPageProps {}

const AboutPage: NextPage<AboutPageProps> = () => {
  return (
    <>
      <PageTitle
        title="About | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
      <BasicContainer>
        <SectionTitle>Check the code on Github</SectionTitle>
      </BasicContainer>
    </>
  )
}

export default AboutPage
