import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blog/blogPosts'; // Assuming this file will export the posts

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="blog-post-detail">
        <h1>Post Not Found</h1>
        <p>The blog post you are looking for does not exist.</p>
        <button onClick={() => navigate('/blog')}>Back to Blog</button>
      </div>
    );
  }

  return (
    <div className="blog-post-detail">
      <h1>{post.title}</h1>
      <p className="blog-post-meta">Published on {post.date}</p>
      <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
      <button onClick={() => navigate('/blog')}>Back to Blog</button>
    </div>
  );
}

export default BlogPost;
