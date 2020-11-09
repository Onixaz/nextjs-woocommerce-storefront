import Layout from '../components/Layout'
import { withLayout } from '@moxy/next-layout'
import { Container } from '../styles/Containers'
import { Title, Paragraph } from '../styles/TextElements'
import AppLink from '../components/AppLink'

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <>
      <Container>
        <Title>Not Found 404</Title>
        <Paragraph>Sorry! Not found page!</Paragraph>
        <AppLink href="/" label="Go to home." />
      </Container>
    </>
  )
}

export default withLayout(<Layout pageTitle="404" />)(NotFound)
