// src/components/EpisodeDetail.js
import { useParams, Link } from 'react-router-dom';
import { filmCategories } from './filmdata';
// import './styles/EpisodeDetail.css';

export default function EpisodeDetail() {
  const { id, episodeId } = useParams();

  let episode;
  for (const cat of filmCategories) {
    const film = cat.films.find((f) => f.id === id);
    if (film) {
      episode = film.episodes.find((ep) => ep.id === episodeId);
      break;
    }
  }

  if (!episode) {
    return <div className="episode-detail">Không tìm thấy tập phim</div>;
  }

  return (
    <div className="episode-detail">
      <Link to={`/film/${id}`} className="back-link">← Quay lại phim</Link>
      <h1 className="episode-title">{episode.title}</h1>
      <video controls className="episode-video">
        <source src={episode.videoUrl} type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>
    </div>
  );
}
