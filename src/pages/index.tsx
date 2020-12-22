import Layout from '../components/Layout'
import PostPreview from '../types/PostPreview'
import { NextPage } from 'next'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/customizations'
import Services from '../components/ServicesSection'
import GallerySection from '../components/GallerySection'
import { indexGalleryObj } from '../components/Photos/customizations'
import { IndexInfoChild } from '../components/InfoSection/InfoChildren'

interface BlogProps {
  posts: PostPreview[]
}

const Blog: NextPage<BlogProps> = () => {
  return (
    <>
      <Layout pageTitle="Pradžia">
        <HeroSection />

        <InfoSection {...homeObjOne}>
          <IndexInfoChild />
        </InfoSection>
        <Services />
        <GallerySection {...indexGalleryObj} />
      </Layout>
    </>
  )
}

export default Blog
