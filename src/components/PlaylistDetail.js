// src/components/PlaylistDetail.js
import { useParams, Link } from 'react-router-dom';
import { playlists } from './musicdata';
import './styles/PlaylistDetail.css';

export default function PlaylistDetail() {
  const { id } = useParams();
  const playlist = playlists.find((p) => p.id === id);

  if (!playlist) {
    return (
      <div className="playlist-detail">
        <Link to="/music" className="back-link">← Quay lại Music</Link>
        <p>Không tìm thấy playlist.</p>
      </div>
    );
  }

  return (
    <div className="playlist-detail">
      <div className="playlist-header">
        {/* ảnh bìa album lấy từ playlist.image */}
        <img src={playlist.image} alt={playlist.title} className="playlist-cover" />
        <div className="playlist-info">
          <h1>{playlist.title}</h1>
          <p>{playlist.tracks.length} bài hát</p>
        </div>
      </div>

      <Link to="/music" className="back-link">← quay lại aelin's playlist 🧸</Link>

      <ul className="track-list">
        {playlist.tracks.map((track, index) => (
          <li key={index} className="track-item">
            <div className="track-meta">
              <img src={track.image} alt={track.title} className="track-thumb" />
              <span className="track-index">{index + 1}</span>
              <div>
                <p className="track-title">{track.title}</p>
                <p className="track-artist">{track.artist}</p>
              </div>
            </div>
            <button
              className="play-button"
              onClick={() => {
                const fullTrack = {
                  ...track,
                  image: track.image || playlist.image || '/default.jpg', // fallback nếu thiếu
                };
                // lưu cả track và playlist (bao gồm image)
                localStorage.setItem('currentTrack', JSON.stringify(fullTrack));
                localStorage.setItem(
                  'currentPlaylist',
                  JSON.stringify({ tracks: playlist.tracks, image: playlist.image })
                );
                window.dispatchEvent(new Event('trackChanged'));
              }}
            >
              Phát bài này
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}