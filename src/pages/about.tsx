import { NextPage } from 'next'
import CustomHead from '../components/CustomHead'

interface AboutPageProps {}

const AboutPage: NextPage<AboutPageProps> = () => {
  return (
    <>
      <CustomHead
        title="About | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        About Page!
      </h1>
    </>
  )
}

export default AboutPage
