import Layout from '../components/Layout'
import PostPreview from '../types/PostPreview'
import { NextPage, GetStaticProps } from 'next'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/customizations'

import Services from '../components/ServicesSection'
import GallerySection from '../components/Gallery'
import dynamic from 'next/dynamic'
//import ContactSection from '../components/Contact'
//const GallerySection = dynamic(() => import('../components/Gallery'), { ssr: false })

interface BlogProps {
  posts: PostPreview[]
}

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <>
      <Layout pageTitle="Pradžia">
        <HeroSection />

        <InfoSection {...homeObjOne} />
        <Services />
        <GallerySection />
        {/* <ContactSection /> */}
      </Layout>
    </>
  )
}

export default Blog
