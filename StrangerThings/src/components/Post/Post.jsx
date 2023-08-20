import { useState, useEffect } from "react";
import BASE_URL from "../../API";

export default function Post({ token }) {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        async function fetchPost() {
            try {
                const response = await fetch(`${BASE_URL}/post`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });

                const result = await response.json();
                console.log("Fetched posts:", result.data.posts);
                setPostList(result.data.posts);
            } catch (err) {
                console.error("Error fetching posts:", err);
            }
        }

        // Call fetchPost only if the token is available
        if (token) {
            fetchPost();
        }
    }, [token]);

    return (
        <>
        <div id="homeTab">Posts</div>         
        <div className="home">
            <h1>Post Section </h1>
            <ul>
                {postList.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                    </li>
                ))}
            </ul>    
        </div>                          
        </>
    );
}
