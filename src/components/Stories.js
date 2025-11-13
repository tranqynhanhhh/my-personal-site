// src/components/Stories.js
import { useState, useEffect } from 'react';
import { stories } from './storiesdata';
import { Link } from 'react-router-dom';
import './styles/Common.css';
import './styles/Stories.css';

export default function Stories() {
  const [input, setInput] = useState('');
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('storiesUnlocked') === 'true';
    if (saved) setUnlocked(true);
  }, []);

  const handleUnlock = () => {
    if (input === 'bunbohue') {
      setUnlocked(true);
      localStorage.setItem('storiesUnlocked', 'true');
    } else {
      alert('ib ig tôi để lấy pass nhé ae=))');
    }
  };

  return (
    <div className="stories-page">
      <Link to="/" className="back-home">Quay lại trang chủ</Link>

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
        <div className="stories-list">
          <h1 className="stories-heading">Truyện riêng tư</h1>
          <div className="stories-grid">
            {stories.map((story) => (
              <div key={story.id} className="story-card">
                {story.image && (
                  <img src={story.image} alt={story.title} className="story-thumb" />
                )}
                <div className="story-info">
                  <h2 className="story-title">{story.title}</h2>
                  <p className="story-description">{story.description}</p>
                  <span className="story-date">{story.date}</span>
                  <ul className="story-chapters">
                    {story.chapters.map((chap) => (
                      <li key={chap.id} className="chapter-item">
                        📖 {chap.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
