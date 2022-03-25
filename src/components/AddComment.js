import React, { useState } from "react";
import PostsService from "../Services/PostsService";
function AddComment({ postId, addCommentCallback }) {
  // comments
  const [comment, setComment] = useState({ text: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await PostsService.addComment(comment, postId);
    addCommentCallback(data);
    setComment({ text: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          name='text'
          cols='50'
          rows='5'
          value={comment.text}
          onChange={(e) => setComment({ text: e.target.value })}
          placeholder='Add a comment...'
          required
        ></textarea>
        <br />
        <button type='submit' className='btn btn-light m-3'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddComment;
