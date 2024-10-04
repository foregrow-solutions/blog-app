import { Metadata } from "next";
import Container from "./components/container";
import Template from "./template";
import BlogCard from "./components/blog-card";

export const metadata: Metadata = {
  title: 'Next.js',
}

export default function Home() {
  return (
    <Template>
      <Container>
        <div className="bg-black">
          <h1 className="text-3xl font-bold text-white">Home Page </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
          <BlogCard title={"Title is here"} coverImage={"https://next-blog-starter.vercel.app/_next/image?url=%2Fassets%2Fblog%2Fpreview%2Fcover.jpg&w=1920&q=75"} date={"March 16, 2020"} excerpt={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus."} author={{
            name: "abc",
            picture: "https://next-blog-starter.vercel.app/assets/blog/authors/tim.jpeg"
          }} slug={"2"}></BlogCard><BlogCard title={"Title"} coverImage={"https://next-blog-starter.vercel.app/assets/blog/authors/tim.jpeg"} date={""} excerpt={""} author={{
            name: "Test User",
            picture: "https://next-blog-starter.vercel.app/assets/blog/authors/tim.jpeg"
          }} slug={"3"}></BlogCard><BlogCard title={"Title"} coverImage={"https://next-blog-starter.vercel.app/_next/image?url=%2Fassets%2Fblog%2Fpreview%2Fcover.jpg&w=1920&q=75"} date={""} excerpt={""} author={{
            name: "Abc User",
            picture: "https://next-blog-starter.vercel.app/assets/blog/authors/tim.jpeg"
          }} slug={"1"}></BlogCard></div>
      </Container>
    </Template>
  )
}
