import React from 'react';
import { Post } from './Post';

export function Feed() {
  const posts = [
    {
      author: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      content: "Excited to announce that I've just launched my new project! #coding #webdev",
      timestamp: "2h ago"
    },
    {
      author: "Mike Wilson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      content: "Just completed an amazing workshop on React architecture. Here's what I learned...",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      timestamp: "4h ago"
    }
  ];

  return (
    <div className="max-w-2xl mx-auto pt-20 px-4">
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
}