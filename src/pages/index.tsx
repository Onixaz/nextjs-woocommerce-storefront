import { NextPage } from 'next'
import CustomHead from '../components/CustomHead'

interface IndexPageProps {}

const IndexPage: React.FC<IndexPageProps> = () => {
  return (
    <>
      <CustomHead
        title="Unofficial starter | Next.Js"
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
        I'm a starter
      </h1>
    </>
  )
}

export default IndexPage
