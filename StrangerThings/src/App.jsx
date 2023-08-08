import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/navbar';
import Home from './components/Home';
import Login from './components/Authorization/Login';
import Register from './components/Authorization/Register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <NavBar />           
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
