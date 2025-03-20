import React from 'react';
import ToText from '../utils/ToText';
import Navbar from './Navbar'

export default function Blog({ blog, profile }) {
    return (
            <>  
            <Navbar />
                <div className="container">
                    <h1 className="text-center my-5">Medium Posts</h1>
                    {blog.isLoading ? (
                        <p>Loading...</p>
                    ) : blog.error ? (
                        <p className="text-danger">Failed to load blogs: {blog.error.message}</p>
                    ) : (
                        <div className="row">
                            {blog.items.map((post, index) => (
                                <div className="col-md-4" key={index}>
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <a href={post.link} target="_blank" rel="noopener noreferrer">
                                                    {post.title}
                                                </a>
                                            </h5>
                                            <p className="card-text">{ToText(post.description.substring(0, 500))}...</p>
                                            <a
                                                href={post.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="read-more-btn"
                                            >
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                </>

            );
        }
        
        

