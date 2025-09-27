import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            // Simulating an API call
            const response = await fetch('https://api.example.com/blog-posts');
            const data = await response.json();
            setPosts(data);
        };

        fetchPosts();
    }, []);

    return (
        <section id="blog">
            <div className="container">
                <h2>Latest Blog Posts</h2>
                <div className="blog-posts">
                    {posts.length > 0 ? (
                        posts.map(post => (
                            <div key={post.id} className="blog-post">
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <a href={`/blog/${post.id}`} className="read-more">Read More</a>
                            </div>
                        ))
                    ) : (
                        <p>No blog posts available.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Blog;