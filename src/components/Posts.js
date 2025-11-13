// src/components/Posts.js
import { posts } from '../data';
import { Link } from 'react-router-dom';
import './styles/Posts.css';
import './styles/Common.css';

export default function Posts() {
  return (
    <div className="posts-page">
      <Link to="/" className="back-home">← Quay lại trang chủ</Link>
      <h1 className="posts-heading">Bài viết mới nhất</h1>
      <div className="posts-grid">
        {posts.map((post) => (
          <Link to={`/post/${post.id}`} key={post.id} className="post-card">
            {post.image && (
              <img src={post.image} alt={post.title} className="post-thumb" />
            )}
            <div className="post-info">
              <h2 className="post-title">{post.title}</h2>
              <p className="post-excerpt">
                {post.content.slice(0, 100)}...
              </p>
              <span className="post-date">{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
