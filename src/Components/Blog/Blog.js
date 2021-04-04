import React from 'react';
import './Blog.css';

const Blog = ({ blogName, blogURL, blogImage }) => {
    return (
        <a href={blogURL} target="_blank" rel="noreferrer" className="blog">
            <img src={blogImage} alt={blogName} className="blog__image" />
            <div className="blog__title">{blogName}</div>
        </a>
    )
}

export default Blog
