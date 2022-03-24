import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostsService from "../Services/PostsService";
function SinglePost() {
  const [post, setPost] = useState("");
  const { id } = useParams();

  async function fetchPost() {
    const data = await PostsService.get(id);
    setPost(data);
  }
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className='p-3'>
      <h1>{post.title}</h1>
      <p>{post.text}</p>
    </div>
  );
}

export default SinglePost;
