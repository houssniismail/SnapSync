// ExampleComponent.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPost, deletePost, updatePost } from '../redux/actions/postAction';

const ExampleComponent = () => {
  // Accessing Redux state
  const posts = useSelector((state) => state.posts.posts); // Assuming 'posts' is the slice of state

  // Accessing the dispatch function
  const dispatch = useDispatch();

  // Example usage: Dispatching actions
  const handleAddPost = () => {
    const newPost = { id: 1, title: 'New Post' }; // Example post object
    dispatch(addPost(newPost));
  };

  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId));
  };

  const handleUpdatePost = () => {
    const updatedPost = { id: 1, title: 'Updated Post' }; // Example updated post object
    dispatch(updatePost(updatedPost));
  };

  return (
    <div>
      {/* Displaying posts */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Example buttons to trigger actions */}
      <button onClick={handleAddPost}>Add Post</button>
      <button onClick={handleUpdatePost}>Update Post</button>
    </div>
  );
};

export default ExampleComponent;
