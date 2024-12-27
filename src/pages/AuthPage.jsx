import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';

    function AuthPage() {
      const navigate = useNavigate();
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');

      // Admin credentials
      const adminUsername = 'admin';
      const adminPassword = 'admin123';

      const handleLogin = (e) => {
        e.preventDefault();
        // Check credentials
        if (username === adminUsername && password === adminPassword) {
          navigate('/dashboard');
        } else {
          alert('Invalid credentials');
        }
      };

      return (
        <div style={{ padding: '20px', maxWidth: '300px', margin: 'auto' }}>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      );
    }

    export default AuthPage;
