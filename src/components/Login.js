// src/components/Login.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Login.css';

export default function Login() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mật khẩu admin: bạn có thể đổi tùy ý
    if (password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      navigate('/');
    } else {
      alert('Sai mật khẩu!');
    }
  };

  const handleNotAdmin = () => {
    localStorage.setItem('isAdmin', 'false');
    navigate('/');
  };

  return (
    <div className="login-page">
      <h1>Đăng nhập Admin</h1>
      <div className="login-box">
        <input
          type="password"
          placeholder="Nhập mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button onClick={handleLogin} className="login-btn">Đăng nhập</button>
        <button onClick={handleNotAdmin} className="not-admin-btn">Không phải admin</button>
      </div>
    </div>
  );
}
