import React from 'react';

interface PostCardProps {
  title: string;
  content: string;
  date: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, content, date }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{content.slice(0, 150)}...</p>
      <p className="text-gray-400">{date}</p>
    </div>
  );
};

export default PostCard;
