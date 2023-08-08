import { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Implement API call for registration
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="text" value={name} onChange={e => setName(e.target.value)} />
      <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="tel" placeholder="tel" value={phone} onChange={e => setPhone(e.target.value)} />
      <input type="email" placeholder="Email" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
