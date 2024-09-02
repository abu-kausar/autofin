import React from 'react'

interface BlogProps {
    data?: any;
}

const BlogCard = ({ data } : BlogProps) => {
    return (
        <div className='flex items-center gap-4'>
            <img src={data.postImage} alt="blog image" />

            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm font-semibold text-[#9A57FE]'>{data.category}</p>
                    <h1 className='mt-1 text-lg font-semibold text-[#101828]'>{data.postName}</h1>
                    <p className='mt-1 text-base font-normal text-[#475467]'>{data.description}</p>
                </div>

                <div className='flex items-center gap-2'>
                    <img src={data.image} alt="author" className='h-10 w-10'/>
                    <div className='flex flex-col gap-1'>
                        <h2 className='text-sm font-semibold text-[#101828]'>{data.author}</h2>
                        <p className='text-sm font-normal text-[#475467]'>{data.date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard