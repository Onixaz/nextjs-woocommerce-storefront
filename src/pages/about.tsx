import { NextPage } from 'next'
import CustomHead from '../components/CustomHead'
import { Container, SectionTitle } from '../styles/Global/utils'

interface AboutPageProps {}

const AboutPage: NextPage<AboutPageProps> = () => {
  return (
    <>
      <CustomHead
        title="About | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
      <Container>
        <SectionTitle>Check the code on Github</SectionTitle>
      </Container>
    </>
  )
}

export default AboutPage
