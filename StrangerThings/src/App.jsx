import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Authorization/Login';
import Register from './components/Authorization/Register';

function App() {
  return (
    <>
    <div id="HomePage">   
        <Routes>              
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />      
      </Routes>
    </div>
    </>
  );
}

export default App;
