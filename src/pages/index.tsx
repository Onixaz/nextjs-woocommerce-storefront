import Layout from '../components/Layout'
import PostPreview from '../types/PostPreview'
import { NextPage, GetStaticProps } from 'next'
import fs from 'fs'
import matter from 'gray-matter'
import { withLayout } from '@moxy/next-layout'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo } from '../components/InfoSection/customizations'
import { PageContainer } from '../components/Container/ContainerElements'
import Services from '../components/ServicesSection'

//import GallerySection from '../components/Gallery'

//dynamic import of gallery since this lib uses useLayoutEffect(doesnt work in SSR)
import dynamic from 'next/dynamic'
import ContactSection from '../components/Contact'
const GallerySection = dynamic(() => import('../components/Gallery'), { ssr: false })

interface BlogProps {
  posts: PostPreview[]
}

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <>
      <HeroSection />

      <PageContainer>
        <InfoSection {...homeObjOne} />

        <Services />
        <GallerySection />
      </PageContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const files = fs.readdirSync('src/_posts')
  const posts = files.map((fname) => {
    const md = fs.readFileSync(`src/_posts/${fname}`).toString()
    const { data, excerpt } = matter(md, { excerpt_separator: '\n\n' })
    return {
      slug: fname.replace('.md', ''),
      title: data.title,
      excerpt,
    }
  })
  return {
    props: {
      posts,
    },
  }
}

export default withLayout(<Layout pageTitle="Index" />)(Blog)
