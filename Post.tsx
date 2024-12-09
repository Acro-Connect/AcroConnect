import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

interface PostProps {
  author: string;
  avatar: string;
  content: string;
  image?: string;
  timestamp: string;
}

export function Post({ author, avatar, content, image, timestamp }: PostProps) {
  return (
    <div className="bg-white rounded-lg shadow-md mb-4 overflow-hidden border border-gray-200">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <img src={avatar} alt={author} className="w-12 h-12 rounded-full" />
          <div className="ml-3">
            <h3 className="font-semibold text-gray-900">{author}</h3>
            <p className="text-sm text-gray-500">{timestamp}</p>
          </div>
        </div>
        <p className="text-gray-800 mb-4">{content}</p>
        {image && (
          <img src={image} alt="Post content" className="w-full rounded-lg mb-4" />
        )}
        <div className="flex items-center justify-between pt-4 border-t">
          <button className="flex items-center text-gray-600 hover:text-red-600">
            <Heart className="h-5 w-5 mr-1" />
            <span>Like</span>
          </button>
          <button className="flex items-center text-gray-600 hover:text-red-600">
            <MessageCircle className="h-5 w-5 mr-1" />
            <span>Comment</span>
          </button>
          <button className="flex items-center text-gray-600 hover:text-red-600">
            <Share2 className="h-5 w-5 mr-1" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}