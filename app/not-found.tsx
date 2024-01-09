import { db } from '@/lib/db'
import React from 'react'

export const GetBlogs = async ()=> {
  const blogs = await db.post.findMany()
  
  return blogs
}

const NotFound = () => {
  return (
    <div>Page not found ::)</div>
  )
}

export default NotFound