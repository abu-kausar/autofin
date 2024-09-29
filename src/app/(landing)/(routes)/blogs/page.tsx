import BlogCard from '@/components/presentation/blog/BlogCard';
import { blogs } from '@/components/presentation/blog/blogData';
import Link from 'next/link';
import React from 'react'

const Blogs = () => {
  return (
    <div className='flex flex-col gap-[56px] pt-[168px] py-[96px] px-12 mx-auto max-w-[1294px]'>
      <div className='flex flex-col'>
        <h2 className='text-base font-semibold text-[#7F56D9]'>Our Blog</h2>
        <h1 className='text-[48px] font-semibold text-bgBlack'>Resources and insights</h1>
        <p className='mt-3 text-xl font-normal text-[#475467]'>The latest industry news, interviews, technologies, and resources.</p>
      </div>

      <div className='grid grid-cols-2 gap-8'>
        {
          blogs.map((blog, idx) => (
            <Link href={`/blogs/${blog.slug}`} key={idx}>
              <BlogCard
                data={blog}
              />
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Blogs;