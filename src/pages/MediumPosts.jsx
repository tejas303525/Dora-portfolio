import { useEffect, useState } from "react";
export default function MediumPosts(){
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tejas303525')
        .then(res=>res.json())
        .then(data=>setPosts(data.items))
    },[])
    
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center my-5">Medium Posts</h1>
                    </div>
                    {posts.map((post,index)=>(
                        <div className="col-md-4" key={index}>
                            <div className="card mb-4">
                                <img src={post.thumbnail} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">{post.content}</p>
                                    <a href={post.link} className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
    
}
// The above code snippet is a functional component that fetches the Medium posts from the RSS feed of the user and displays them in a card format. The useEffect hook is used to fetch the data from the API when the component mounts. The fetched data is stored in the 'posts' state using the useState hook. The map function is used to iterate over the 'posts' array and display each post in a card. The card contains the post title, thumbnail image, content, and a button to read more. The 'post.link' is used as the href attribute for the button to redirect the user to the full post on Medium. The key attribute is set to the index of the post to uniquely identify each card. The component is exported as 'MediumPosts' to be used in other components.