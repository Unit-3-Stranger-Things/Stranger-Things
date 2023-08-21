import { Link } from 'react-router-dom';

function NavBar() {
  return (
    // navigation panel header
    <nav>
        <div>Stranger Things Group 2</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/post">Post</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/login">Sign Out</Link></li>
        <li><Link to="/register">Register</Link></li>             
      </ul>
    </nav>
  );
}

export default NavBar;
