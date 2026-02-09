// src/components/StoryDetail.js
import { useParams, Link, useNavigate } from 'react-router-dom';
import { stories } from './storiesdata';
import './styles/Common.css';
import './styles/Stories.css';

export default function StoryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  const story = stories.find((s) => s.id === id);

  if (!story) return <p>Không tìm thấy truyện.</p>;

  return (
    <div className="story-detail-page">
      <div className="nav-links">
      <Link to="/" className="back-home">Quay lại trang chủ</Link>
      <button onClick={() => navigate(-1)} className="back-prev">Quay lại trang trước</button>
    </div>
      <h1>{story.title}</h1>
      {isAdmin && (
        <button
          className="add-chapter-btn"
          onClick={() => alert('Thêm chương mới (chưa xử lý lưu)')}
        >
          ➕ Thêm chương mới
        </button>
      )}
      <ul className="chapter-list">
        {story.chapters.map((chap) => (
          <li key={chap.id}>
            <Link to={`/story/${story.id}/chapter/${chap.id}`}>{chap.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
