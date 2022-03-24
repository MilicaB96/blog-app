import React, { useState, useEffect } from "react";
import PostsService from "../Services/PostsService";
import SinglePost from "../components/SinglePost";

function AppPosts() {
  const [posts, setPosts] = useState([]);
  async function fetchPosts() {
    const data = await PostsService.getAll();
    setPosts(data);
  }
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      <ul className='list-group-flush'>
        {posts.map((post) => (
          <li key={post.id} className='list-group-item'>
            <h1>{post.title}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppPosts;
