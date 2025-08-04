import React from 'react';

function BlogDetails({ blogs }) {
  return (
    <div className='blog-section'>
      <h2 className='section-title'>Blog Details</h2>
      {blogs.map((blog) => (
        <div key={blog.id} className='blog-card'>
          <h3 className='blog-title'>{blog.title}</h3>
          <h4 className='blog-author'>By {blog.author}</h4>
          <p className='blog-content'>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
