import Layout from '../components/Layout'
import PostPreview from '../types/PostPreview'
import { NextPage } from 'next'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/customizations'
import Services from '../components/ServicesSection'

import PageContainer from '../components/Utilities/PageContainer'
import GallerySection from '../components/GallerySection'
import { indexGalleryObj } from '../components/Photos/customizations'
import { IndexInfoChild } from '../components/InfoSection/InfoChildren'

//const GallerySection = dynamic(() => import('../components/Gallery'), { ssr: false })

interface BlogProps {
  posts: PostPreview[]
}

const Blog: NextPage<BlogProps> = () => {
  return (
    <>
      <Layout pageTitle="Pradžia">
        <HeroSection />
        <PageContainer>
          <InfoSection {...homeObjOne}>
            {/* <IndexInfoChild /> */}
            <IndexInfoChild />
          </InfoSection>
          <Services />
          <GallerySection {...indexGalleryObj} />
          {/* <ClientSection /> */}
        </PageContainer>
      </Layout>
    </>
  )
}

export default Blog
