import { useEffect, useState } from "react";
import Blog from "./Blog";

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
                const blogs = info.items; 
                const image = info.feed.image; 
                const link = info.feed.link;
                const post = blogs.filter(post => post.categories.length > 0); 
                setProfile(p => ({ ...p, profileImage: image, profileUrl: link }));
                setBlog({ items: post, isLoading: false, error: null });
            }
        )
            .catch(err => setBlog({ items: [], isLoading: false, error: err }));
    }, []);
    

    return (
        <div>
            <Blog blog={blog} profile={profile} />
        </div>
    );
}


