import CoverImage from '@/app/components/cover-image';
import React from 'react';

export default function Page({ params }: { params: { slug: string } }) {
  return <div>
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
      {params.slug}
    </h1>
    <div className="mb-8 md:mb-16 sm:mx-0">
      <CoverImage title={"title"} src={"https://next-blog-starter.vercel.app/_next/image?url=%2Fassets%2Fblog%2Fpreview%2Fcover.jpg&w=1920&q=75"} />
    </div>
    <div className="max-w-2xl mx-auto">
      {params.slug}
      <p>March 16, 2020
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.</p>
    </div>
  </div>
}
