// src/components/PostDetail.js
import { useParams, Link } from 'react-router-dom';
import { posts, featuredPost, sidebarPosts, popularPosts } from '../data';
import './styles/PostDetail.css';
import './styles/Common.css';

export default function PostDetail() {
  const { id } = useParams();
  // Tìm trong tất cả nguồn dữ liệu có thể chứa id
  const all = [featuredPost, ...sidebarPosts, ...popularPosts, ...posts].filter(Boolean);
  const post = all.find((p) => String(p.id) === String(id));

  if (!post) {
    return (
      <div className="post-detail">
        <Link to="/" className="back-link">← Quay lại trang chủ</Link>
        <p>Bài viết không tồn tại.</p>
      </div>
    );
  }

  return (
    <div className="post-detail">
      <Link to="/" className="back-link">← Quay lại trang chủ</Link>
      <article
  className="article"
  style={{
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
  <h1 className="title">{post.title}</h1>
  <p className="date">{post.date}</p>
  <div
    className="content"
    dangerouslySetInnerHTML={{
      __html: (post.content || '').replace(/\n/g, '<br>')
    }}
  />
</article>

    </div>
  );
}
