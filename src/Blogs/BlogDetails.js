import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import BlogContext from './BlogContext';

const BlogDetails = () => {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
    </div>
  );
};

export default BlogDetails;
