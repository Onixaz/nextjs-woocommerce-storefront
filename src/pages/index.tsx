import Layout from '../components/Layout'
import PostPreview from '../types/PostPreview'
import { NextPage, GetStaticProps } from 'next'
import fs from 'fs'
import matter from 'gray-matter'
import PostListing from '../components/PostListing'
import Hero from '../components/Hero'
import MainSection from '../components/MainSection'

interface BlogProps {
  posts: PostPreview[]
}

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <Layout pageTitle="Blog">
      <Hero />
      <MainSection posts={posts} />
    </Layout>
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

export default Blog
