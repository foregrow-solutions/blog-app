import React from "react";
import CoverImage from "./cover-image";
import Author from "@/modal/Author"; // Make sure to adjust the import path based on your project structure

type Props = {
    title: string;
    coverImage: string;
    date: string;
    excerpt: string;
    author: Author;
    slug: string;
};

const BlogCard: React.FC<Props> = ({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
}: Props) => {
    return (
        <div className="mb-8">
            <div className="mb-5">
                <CoverImage slug={slug} title={title} src={coverImage} />
            </div>
            <h3 className="text-3xl mb-3 leading-snug">{title}
            </h3>
            <div className="text-lg mb-4">
                {date}
            </div>
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
            <div className="flex items-center">
                <img src={author.picture} className="w-12 h-12 rounded-full mr-4" alt={author.name} />
                <div className="text-xl font-bold">{author.name}</div>
            </div>
        </div>
    );
};

export default BlogCard;
