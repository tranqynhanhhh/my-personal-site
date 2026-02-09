// src/components/ChapterDetail.js
import { useParams, Link, useNavigate } from 'react-router-dom';
import { stories } from './storiesdata';
import './styles/Common.css';
import './styles/Stories.css';

export default function ChapterDetail() {
  const { id, chapterId } = useParams();
  const navigate = useNavigate();
  const story = stories.find((s) => s.id === id);
  const chapter = story?.chapters.find((c) => c.id === chapterId);

  if (!story || !chapter) return <p>Không tìm thấy chương.</p>;

  return (
    <div className="chapter-page">
      <div className="nav-links">
  <Link to="/" className="back-home">← Quay lại trang chủ</Link>
  <div>
    <button onClick={() => navigate(-1)} className="back-prev">← Quay lại trang trước</button>
  </div>
</div>

      <h1>{chapter.title}</h1>
      <p className="chapter-content">{chapter.content}</p>
    </div>
  );
}
