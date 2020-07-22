import React from 'react'
import PostPreview from '../types/PostPreview'
import ListingItem from './ListingItem'

interface PostListingProps {
  posts: PostPreview[]
}

const PostListing: React.FC<PostListingProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <ListingItem post={post} key={post.slug} />
      ))}
    </div>
  )
}

export default PostListing
