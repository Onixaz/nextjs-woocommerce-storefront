import Layout from '../components/Layout'
import { Container } from '../styles/Containers'
import { Title, Paragraph } from '../styles/TextElements'
import AppLink from '../components/AppLink'

export default function NotFound() {
  return (
    <Layout pageTitle="Not Found">
      <Container>
        <Title>Not Found 404</Title>
        <Paragraph>Sorry! Not found page!</Paragraph>
        <AppLink href="/" label="Go to home." />
      </Container>
    </Layout>
  )
}
