// src/components/Asks.js
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Asks.css';
import './styles/Common.css';


export default function Asks() {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('asksComments');
    if (saved) {
      try {
        setComments(JSON.parse(saved));
      } catch {
        setComments([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('asksComments', JSON.stringify(comments));
  }, [comments]);

  const addComment = () => {
    const content = text.trim();
    if (!content) return;
    const newComment = {
      id: Date.now(),
      text: content,
      createdAt: new Date().toISOString(),
    };
    setComments([newComment, ...comments]);
    setText('');
  };

  const deleteComment = (id) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  const editComment = (id) => {
    const current = comments.find((c) => c.id === id);
    const newText = prompt('Sửa bình luận:', current?.text || '');
    if (newText !== null) {
      const trimmed = newText.trim();
      if (trimmed) {
        setComments(comments.map((c) => (c.id === id ? { ...c, text: trimmed } : c)));
      }
    }
  };

  return (
    <div className="asks-page">
      <Link to="/" className="back-home">← Quay lại trang chủ</Link>
      <h1>hỏi gì đó (miễn đừng chửi tôi là được)</h1>
      <div className="asks-input-row">
        <input
          type="text"
          placeholder="Viết bình luận..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="asks-input"
        />
        <button onClick={addComment} className="asks-add-btn">Thêm</button>
      </div>

      <ul className="asks-list">
        {comments.map((c) => (
          <li key={c.id} className="asks-item">
            <div className="asks-text">{c.text}</div>
            <div className="asks-actions">
              <button onClick={() => editComment(c.id)} className="asks-edit-btn">Sửa</button>
              <button onClick={() => deleteComment(c.id)} className="asks-delete-btn">Xóa</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
