// import { useState, useEffect } from 'react';
// import authToken from '../../API/authToken';
// import BASE_URL from '../../API/index';

//   useEffect(() => {
//     // Fetch posts when the component mounts
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     try {
//       const response = await fetch(`${BASE_URL}/post`)  
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       setPostList(data); // Assuming the response is an array of posts
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Post Section</h1>
//       <ul>
//         {postList.map(post => (
//           <li key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default PostList;
