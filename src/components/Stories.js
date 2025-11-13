// src/components/Stories.js
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/Stories.css';
import './styles/Common.css';

export default function Stories() {
  const [input, setInput] = useState('');
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('storiesUnlocked') === 'true';
    if (saved) setUnlocked(true);
  }, []);

  const handleUnlock = () => {
    if (input === 'secret123') {
      setUnlocked(true);
      localStorage.setItem('storiesUnlocked', 'true');
    } else {
      alert('ib ig để lấy pass he=))))))))))');
    }
  };

  return (
    <div className="stories-page">
      <Link to="/" className="back-home">← Quay lại trang chủ</Link>
      {!unlocked ? (
        <div className="stories-lock">
          <h1>Stories (Private)</h1>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="stories-input"
          />
          <button onClick={handleUnlock} className="stories-btn">Xem nội dung</button>
        </div>
      ) : (
        <div className="stories-content">
          <h2>Truyện riêng tư</h2>
          <p>
            Đây là không gian riêng tư để đăng truyện của bạn. Bạn có thể thay đổi
            mật khẩu trong mã nguồn (Stories.js) hoặc sau này đưa vào env.
          </p>
          <p>
            Hãy để câu chữ bạn an trú ở đây, yên ả và chân thật.
          </p>
        </div>
      )}
    </div>
  );
}
