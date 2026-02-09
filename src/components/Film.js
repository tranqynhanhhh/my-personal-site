// src/components/Film.js
import { filmCategories } from './filmdata';
import { Link } from 'react-router-dom';
import './styles/Film.css';

export default function Film() {
  return (
    <div className="film-page">
      {/* Thanh quay lại trang Home */}
      <Link to="/" className="back-link">← Quay lại trang Home</Link>

      <h1 className="film-heading">aelin's film collection 🎬</h1>

      {filmCategories.map((cat) => (
        <div key={cat.id} className="film-row">
          <h2 className="row-title">{cat.title}</h2>
          <div className="row-grid">
            {cat.films.map((f) => (
              <Link to={`/film/${f.id}`} key={f.id} className="film-card">
                <img src={f.image} alt={f.title} className="film-thumb" />
                <h3 className="film-title">{f.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
