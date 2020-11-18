import Layout from '../components/Layout'
import { withLayout } from '@moxy/next-layout'

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <>
      <h1>Not Found 404</h1>
      <p>Sorry!</p>
    </>
  )
}

export default withLayout(<Layout pageTitle="404" />)(NotFound)
