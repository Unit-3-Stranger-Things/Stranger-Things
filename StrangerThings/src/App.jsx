import {Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
// import Post from './components/Post/Post';
import Login from './components/Authorization/Login';
import Messages from './components/Message/Messages';
import Register from './components/Authorization/Register';
import Footer from './components/footer';
// import Logout from './components/Authorization/Logout';

const App=()=>{
  return ( 
    <>
    <div id="main-section">
    <Routes>              
        {/* <Route path="/postList" element={<Post />} /> */}
        <Route path="/home" element={<Home />} />        
        <Route path="/messages" element={<Messages />} />        
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />      
        {/* <Route path="/logout" element={<Logout/>} />       */}
    </Routes>    
    <Footer/>
    </div> 
    
    </>

  );
}

export default App;
