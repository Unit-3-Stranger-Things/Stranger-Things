import { useState } from 'react';
import BASE_URL from '../../API/index';
//import {authToken, setAuth}  from '../../API/authToken';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log(BASE_URL)
  
  const handleRegister = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            name,
            email,
            phone,
            username,
            password,
          },
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle success response here, e.g., show a success message or redirect to login page
        console.log('Registration successful:', data);
      }
      
      else {
        
        // Handle error response here, e.g., display an error message
        console.error('Registration failed:', data);
      
      }
      console.log(data);
      //parseData = JSON.parse(data);
      //console.log(parseData.token);
      //authToken = parseData.token;

    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  
  return (
    <>
      <div id="homeTab">Sign-Up Here</div>
      <div className="home">
        <form onSubmit={handleRegister}>
          <div className="input-table">
            <div className="input-row">
              <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
              <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
              <input type="tel" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
              <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
              <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
              <button type="submit" className='loginTab'>Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;

