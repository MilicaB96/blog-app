import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom/";
import PostsService from "../Services/PostsService";
function AddPost() {
  const { id } = useParams();
  const [newPost, setNewPost] = useState({ title: "", text: "" });
  let history = useHistory();
  async function fetchPost() {
    const { id: _, ...data } = await PostsService.get(id);
    setNewPost({ ...data });
  }
  useEffect(() => {
    if (id) {
      fetchPost();
    }
  }, [id]);

  // create post
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await PostsService.edit(id, newPost);
    } else {
      await PostsService.add(newPost);
    }
    history.push("/posts");
  };
  return (
    <div className='p-3'>
      <h1>{id ? "Edit this post" : "Write a post"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='Title'
          required
          minLength='2'
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <br />
        <input
          type='text'
          placeholder='Enter text...'
          required
          maxLength='300'
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
