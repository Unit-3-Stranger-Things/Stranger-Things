// import { useState, useEffect } from 'react';
// import authToken from '../../API/authToken';
// import BASE_URL from '../../API/index';

// const Post = () => {
//   const [postList, setPostList] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch(BASE_URL, {
//       headers: {
//         'Authorization': `Bearer ${authToken}`
//       }
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       setPostList(data); // Assuming the response is an array of posts
//       setIsLoading(false);
//     })
//     .catch(error => {
//       setError(error);
//       setIsLoading(false);
//     });
//   }, []);

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <>
//       <div id="homeTab">Posts</div>         
//       <div className="home">
//         <h1>Post Section</h1>
//         <ul>
//           {postList.map(post => (
//             <li key={post.id}>
//               <h3>{post.title}</h3>
//               <p>{post.description}</p>
//             </li>
//           ))}
//         </ul>    
//       </div>                          
//     </>
//   );
// }

// export default Post;
