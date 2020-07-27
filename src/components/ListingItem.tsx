import React from 'react'
import PostPreview from '../types/PostPreview'
import AppLink from './AppLink'
import ListingElement from '../styles/ListingElement'

interface ListingItemProps {
  post: PostPreview
}

const ListingItem: React.FC<ListingItemProps> = ({ post }) => {
  return (
    <ListingElement>
      <AppLink href={`/blog/${post.slug}`} label={post.title} />
      {post.excerpt && <p>{post.excerpt}</p>}
    </ListingElement>
  )
}

export default ListingItem
