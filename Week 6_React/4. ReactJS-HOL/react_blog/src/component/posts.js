import React, { useState, useEffect, useCallback } from 'react';
import Post from './post';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [errorInfo, setErrorInfo] = useState('');

  const loadPosts = useCallback(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((error) => {
        console.error('Fetch error:', error);
        setHasError(true);
        setErrorInfo(error.message);
      });
  }, []);

  useEffect(() => {
    try {
      loadPosts();
    } catch (err) {
      console.error('Render error:', err);
      alert('Something went wrong while rendering the posts.');
      setHasError(true);
      setErrorInfo(err.message);
    }
  }, [loadPosts]);

  if (hasError) {
    return (
      <h1 style={{ color: 'red' }}>
        Error: {errorInfo || 'Unable to render posts'}
      </h1>
    );
  }

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default Posts;
