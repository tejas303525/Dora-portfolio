// import { useEffect, useState } from "react";
// import Blog from "./Blog";

// export default function MediumPosts() {
//     const medium = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tejas303525';
//     const [profile, setProfile] = useState({
//         name: 'Tejas',
//         profileImage: '',
//         profileUrl: '',
//     });
//     const [blog, setBlog] = useState({
//         items: [],
//         isLoading: true,
//         error: null,
//     });

//     useEffect(() => {
//         fetch(medium)
//             .then(res => console.log(res.json()))
//             .then(info => {
//                 const blogs = info.items; // Fetch posts
//                 console.log("Fetched blogs:", blogs); // Log fetched blogs
//                 const image = info.feed.image; // Profile image
//                 const link = info.feed.link; // Profile link
//                 const post = blogs.filter(post => post.categories.length > 0); // Filter posts with categories
//                 setProfile(p => ({ ...p, profileImage: image, profileUrl: link }));
//                 setBlog({ items: post, isLoading: false, error: null });
//             }
//         )
//             .catch(err => setBlog({ items: [], isLoading: false, error: err }));
//     }, []);
    

//     return (
//         <div>
//             <Blog blog={blog} profile={profile} />
//         </div>
//     );
// }

















import React, { useEffect, useState } from "react";
import ToText from '../utils/ToText'

export default function MediumPosts() {
    const medium = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tejas303525';
    const [profile, setProfile] = useState({
        name: 'Tejas',
        profileImage: '',
        profileUrl: '',
    });
    const [blog, setBlog] = useState({
        items: [],
        isLoading: true,
        error: null,
    });

    useEffect(() => {
        fetch(medium)
            .then(res => res.json())
            .then(info => {
                const blogs = info.items; // Fetch posts
                console.log("Fetched blogs:", blogs); // Log fetched blogs
                const image = info.feed.image; // Profile image
                console.log(image)
                const link = info.feed.link; // Profile link
                const post = blogs.filter(post => post.categories.length > 0); // Filter posts with categories
                setProfile(p => ({ ...p, profileImage: image, profileUrl: link }));
                setBlog({ items: post, isLoading: false, error: null });
            })
            .catch(err => {
                console.error("Error fetching Medium posts:", err); // Log errors
                setBlog({ items: [], isLoading: false, error: err });
            });
    }, []);

    return (
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
                                <img src={post.thumbnail} className="card-img-top" alt={post.title} />
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
    );
}

