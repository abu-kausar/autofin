'use client'
import { blogs } from '@/components/presentation/blog/blogData';
import { useParams, useRouter } from 'next/navigation';
import React from 'react'

const Blog = () => {
  const params = useParams();
  const slug = params.slug as string;

  // Find the blog by comparing the slug as a string
  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) return <p>Blog not found</p>;

  return (
    <div className='flex flex-col gap-[56px] pt-[168px] py-[96px] mx-auto max-w-[720px]'>
      <div className='flex flex-col gap-3'>
        <p className='text-sm font-semibold text-[#9A57FE]'>{blog.category}</p>
        <h1 className='text-[48px] font-semibold text-gray-900'>{blog.postName}</h1>
        <p className='text-xl font-normal text-[#475467]'>How do you create compelling presentations that wow your colleagues and impress your managers? Here’s how to get started.</p>

        <div className='flex items-center gap-2 mt-5'>
          <img src={blog.image} alt="author" className='h-[56px] w-[56px]' />

          <div className='flex flex-col gap-1'>
            <h2 className='text-lg font-semibold text-gray-900'>{blog.author}</h2>
            <p className='text-base font-normal text-[#475467]'>{blog.date}</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col'>
        <h1 className='text-[30px] font-semibold text-gray-900'>Introduction</h1>
        <p className='text-lg font-normal text-[#475467]'>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam  suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
          Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
        </p>

        <img src={blog.postImage} alt="blog image" className='w-full h-[480px] py-5' />

        <p className='text-lg font-normal text-[#475467]'>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
          Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
          Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
        </p>

        <h1 className='text-[30px] font-semibold text-gray-900 mt-5 mb-[10px]'>Software and tools</h1>
        <p className='text-lg font-normal text-[#475467]'>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
          Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
        </p>

        <h1 className='text-[30px] font-semibold text-gray-900 mt-5 mb-[10px]'>Other resources</h1>
        <p className='text-lg font-normal text-[#475467]'>Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
          Lectus id duis vitae porttitor enim gravida morbi.
          Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.
          Suspendisse maecenas ac donec scelerisque diam sed est duis purus.
        </p>
        <ol className='mt-3 pl-5 list-decimal text-lg font-normal text-[#475467] '>
          <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
          <li>Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</li>
          <li>Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</li>
        </ol>
      </div>
    </div>
  )
}

export default Blog