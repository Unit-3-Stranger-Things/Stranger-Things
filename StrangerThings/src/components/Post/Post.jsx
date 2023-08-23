// import { useState, useEffect } from 'react';
// import authToken from '../../API/authToken';
// import BASE_URL from '../../API/index';

// const Post = () => {
//   const [postList, setPostList] = useState([]);

//   useEffect(() => {
//     fetch(BASE_URL, {
//       headers: {
//         'Authorization': `Bearer ${authToken}`
//       }
//     })
//     .then(response => response.json())
//     .then(data => {
//       setPostList(data); // Assuming the response is an array of posts
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     });
//   }, []);


                const result = await response.json();
                console.log("Fetched posts:", result); // Check the fetched result
                setPostList(result); // Update postList with the fetched result
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
        <div>Posts</div>
        <div id="homeTab">  
        <div className="home">
            <h1>Post Section</h1>
            <ul>
                {postList.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                    </li>
                ))}
            </ul>    
            </div>                          
        </div>
        </>
    );
}
