import React, { useState } from "react";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Login } from './components/Autorization/Login.jsx';
import { Register } from './components/Autorization/Register.jsx';
import { Routes, Route } from "react-router-dom";

import Profile from "./components/Pages/Profile.jsx";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className='App'>
      {currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />}

      <Routes>
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

