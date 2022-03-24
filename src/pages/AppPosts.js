import React, { useState, useEffect } from "react";
import PostsService from "../Services/PostsService";
import { Link, useHistory } from "react-router-dom";

function AppPosts() {
  const [posts, setPosts] = useState([]);
  const history = useHistory();
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
            <h1 className='d-inline-block me-3'>{post.title}</h1>
            <Link
              className='text-decoration-none link-dark border border-dark rounded p-2'
              to={`post/${post.id}`}
            >
              View Post
            </Link>
            <button
              type='button'
              className='btn btn-outline-dark ms-3 mb-1'
              onClick={() => history.push(`/edit/${post.id}`)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppPosts;
