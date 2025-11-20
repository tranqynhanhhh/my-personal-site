// src/components/Home.js
import { Link, useNavigate } from 'react-router-dom';
import { featuredPost, sidebarPosts, popularPosts } from '../data';
import './styles/Home.css';



export default function Home() {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-brand">☁️ aelin's museum ☁️</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/notes">Posts</Link></li>
          <li><Link to="/articles">Stories</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/music">Music</Link></li>

        </ul>
      </nav>

      {/* Header */}
      <header className="home-header">
        {isAdmin && (
          <button
            className="new-post-btn"
            onClick={() => navigate('/post/new')}
            title="Đăng bài mới"
          >
            Đăng bài
          </button>
        )}
      </header>

      {/* Featured + Sidebar */}
      <section className="layout">
        <div className="featured">
          <img
            src={featuredPost.image}
            alt={featuredPost.title}
            className="featured-img"
          />
          <div className="featured-content">
            <h2 className="featured-title">{featuredPost.title}</h2>
            <p className="featured-excerpt">{featuredPost.excerpt}</p>
            <span className="featured-date">{featuredPost.date}</span>
            <Link to={`/post/${featuredPost.id}`} className="read-more">
              Đọc tiếp →
            </Link>
          </div>
        </div>

        <aside className="sidebar">
  {sidebarPosts.slice(0, 4).map((p) => (
    <Link to={`/post/${p.id}`} key={p.id} className="side-item">
      <img src={p.image} alt={p.title} className="side-thumb" />
      <div className="side-meta">
        <h3 className="side-title">{p.title}</h3>
        <p className="side-excerpt">{p.excerpt}</p>
        <span className="side-date">{p.date}</span>
      </div>
    </Link>
  ))}
</aside>

      </section>

      {/* Popular Posts */}
      <section className="popular">
        <h2 className="section-title">Bài viết khác</h2>
        <div className="popular-grid">
          {popularPosts.map((p) => (
            <Link to={`/post/${p.id}`} key={p.id} className="pop-card">
              <img src={p.image} alt={p.title} className="pop-thumb" />
              <div className="pop-meta">
                <h3 className="pop-title">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
