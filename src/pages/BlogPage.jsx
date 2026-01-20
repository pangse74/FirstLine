import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog/blogPosts'; // Assuming this file will export the posts

function BlogPage() {
  return (
    <div className="blog-page-container">
      <h1>Our Insights on AI & Machine Learning</h1>
      <p>Explore articles on cutting-edge AI models, training methodologies, and their applications at FirstLine.</p>
      <div className="blog-posts-list">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-post-item">
            <h2><Link to={`/blog/${post.id}`}>{post.title}</Link></h2>
            <p className="blog-post-excerpt">{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="read-more">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
