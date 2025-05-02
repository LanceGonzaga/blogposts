// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogPostList from './components/BlogPostList';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setApiError('Failed to fetch blog posts.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading blog posts...</p>;
  if (apiError) return <p className="error">{apiError}</p>;

  return (
    <ErrorBoundary>
      <div className="App">
        <h1>Blog Posts</h1>
        <BlogPostList posts={posts} />
      </div>
    </ErrorBoundary>
  );
};

export default App;
