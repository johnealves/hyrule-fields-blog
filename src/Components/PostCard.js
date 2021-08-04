import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({post}) {
  console.log(post)
  return (
    <div className="post-card-container">
      <Link>
        <h2>{ post.title }</h2>
        <p>{ post.subtitle }</p>
      </Link>
    </div>
  )
}