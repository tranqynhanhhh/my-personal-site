// src/components/Music.js
import { playlists } from './musicdata';
import { Link } from 'react-router-dom';
import './styles/Music.css';

export default function Music() {
  return (
    <div className="music-page">
      {/* Thanh quay lại trang Home */}
      <Link to="/" className="back-link">← Quay lại trang Home</Link>

      <h1 className="music-heading">aelin's playlist 🦢ྀི</h1>

      <div className="playlist-grid">
        {playlists.map((p) => (
          <Link to={`/music/${p.id}`} key={p.id} className="playlist-card">
            <img src={p.image} alt={p.title} className="playlist-thumb" />
            <h2 className="playlist-title">{p.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
