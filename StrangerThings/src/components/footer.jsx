import { Link } from "react-router-dom";
const footer = () => {
    return (  
      <div id="footer">
      <Link to="/Home">Home</Link>
      <Link to="/Post">Post</Link>     
      <p>coded by Group two © {new Date().getFullYear()}</p>
      </div> 
    
    );
}
 
export default footer;