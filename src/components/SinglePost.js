import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostsService from "../Services/PostsService";
import AddComment from "./AddComment";

function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState("");
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
      <h5>Comments: </h5>
      <ul className='list-group list-group-flush'>
        {post.comments &&
          post.comments.map((comment) => (
            <li className='list-group-item' key={comment.id}>
              {comment.text}
            </li>
          ))}
      </ul>
      <AddComment postId={id} />
    </div>
  );
}

export default SinglePost;
