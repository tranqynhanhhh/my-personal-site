// src/components/FilmDetail.js
import { useParams, Link } from 'react-router-dom';
import { filmCategories } from './filmdata';
import './styles/Film.css';

export default function FilmDetail() {
  const { id } = useParams();

  // Tìm phim theo id trong tất cả categories
  let film;
  for (const cat of filmCategories) {
    const found = cat.films.find((f) => f.id === id);
    if (found) {
      film = found;
      break;
    }
  }

  if (!film) {
    return <div className="film-detail">Phim không tồn tại</div>;
  }

  return (
    <div className="film-detail">
      <Link to="/film" className="back-link">← Quay lại Film</Link>
      <h1 className="film-title">{film.title}</h1>
      <img src={film.image} alt={film.title} className="film-banner" />

      <h2 className="episode-heading">Các tập phim</h2>
      <ul className="episode-list">
        {film.episodes?.map((ep) => (
          <li key={ep.id} className="episode-item">
            <Link to={`/film/${id}/episode/${ep.id}`} className="episode-link">
              {ep.title}
            </Link>
          </li>
        )) || <p>Chưa có tập phim nào.</p>}
      </ul>
    </div>
  );
}
