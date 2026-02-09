// src/components/StoryList.js
import { useState } from 'react';
import { stories } from './storiesdata';
import { Link } from 'react-router-dom';
import './styles/Common.css';
import './styles/Stories.css';

export default function StoryList() {
  const [input, setInput] = useState('');
  const currentPassword = localStorage.getItem('storiesPassword') || 'chaocl'; 
  const currentVersion = localStorage.getItem('passwordVersion') || 'v4';
  const authenticatedVersion = localStorage.getItem('authenticatedVersion');

  const isUnlocked = authenticatedVersion === currentVersion;

  const handleUnlock = () => {
    if (input === currentPassword) {
      localStorage.setItem('authenticatedVersion', currentVersion);
      window.location.reload(); // reload để hiển thị danh sách
    } else {
      alert('Sai mật khẩu!');
    }
  };

  return (
    <div className="stories-page">
      <Link to="/" className="back-home">Quay lại trang chủ</Link>
      <h1 className="stories-heading">Truyện riêng tư</h1>

      {!isUnlocked ? (
        <div className="stories-lock">
          <p>Nhập mật khẩu để xem truyện:</p>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="stories-input"
          />
          <button onClick={handleUnlock} className="stories-btn">Mở khóa</button>
        </div>
      ) : (
        <div className="stories-grid">
          {stories.map((story) => (
            <Link
              to={`/story/${story.id}`}
              key={story.id}
              className="story-card"
            >
              <img src={story.image} alt={story.title} className="story-thumb" />
              <h2 className="story-title">{story.title}</h2>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
