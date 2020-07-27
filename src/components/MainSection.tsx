import React from 'react'
import PostPreview from '../types/PostPreview'
import { Container } from '../styles/Containers'
import { Title } from '../styles/TextElements'
import PostListing from './PostListing'

interface MainSectionProps {
  posts: PostPreview[]
}

const MainSection: React.FC<MainSectionProps> = ({ posts }) => {
  return (
    <main>
      <Container>
        <Title>All Posts</Title>
        <PostListing posts={posts} />
      </Container>
    </main>
  )
}

export default MainSection
