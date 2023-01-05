import React from 'react'
import BlogPosts from './blogposts'
import SidebarLeft from './sidebarleft'
import SidebarRight from './sidebarright'

function BlogLayout() {
  return (
    <div className='flex flex-center flex-row justify-center bg-white2 mx-[5.5%] h-fit'>
        <SidebarLeft/>
        <BlogPosts />
        <SidebarRight />
    </div>
  )
}

export default BlogLayout
