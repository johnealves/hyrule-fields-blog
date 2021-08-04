import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostCard from '../Components/PostCard';
import '../Styles/Home.css';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://hyrule-blog.herokuapp.com/post')
      .then((resp) => setPosts(resp.data))
  }, [])

  return (
    <div className="posts-container">
      { (posts) && posts.map((post, i) => <PostCard key={ i } post={ post } />) }
    </div>
  )
}