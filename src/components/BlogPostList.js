// src/components/BlogPostList.js
import React from 'react';

const BlogPostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map(post => (
        <div className="post" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;
