import React, { useState } from "react";
import { useHistory } from "react-router-dom/";
import PostsService from "../Services/PostsService";

function AddPost() {
  const [newPost, setNewPost] = useState({ title: "", text: "" });
  let history = useHistory();
  // create post
  const handleSubmit = async (e) => {
    e.preventDefault();
    await PostsService.add(newPost);
    history.push("/posts");
  };
  return (
    <div className='p-3'>
      <h1>Write a post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='Title'
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <br />
        <input
          type='text'
          placeholder='Enter text...'
          style={{ height: "100px" }}
          name='text'
          value={newPost.text}
          onChange={(e) => setNewPost({ ...newPost, text: e.target.value })}
        />
        <br />
        <button className='btn btn-light m-3' type='submit'>
          Submit
        </button>
        <button
          className='btn btn-light m-3'
          type='button'
          onClick={() => {
            setNewPost({ title: "", text: "" });
          }}
        >
          Reset
        </button>
      </form>
    </div>
  );
}

export default AddPost;
