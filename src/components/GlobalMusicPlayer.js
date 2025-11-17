import { useState, useRef, useEffect, useCallback } from 'react';
import './styles/GlobalMusicPlayer.css';

export default function GlobalMusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(() => {
    const saved = localStorage.getItem('currentTrack');
    return saved ? JSON.parse(saved) : null;
  });

  const [playlist, setPlaylist] = useState(() => {
    const saved = localStorage.getItem('currentPlaylist');
    return saved ? JSON.parse(saved).tracks || [] : [];
  });

  const [playlistImage, setPlaylistImage] = useState(() => {
    const saved = localStorage.getItem('currentPlaylist');
    return saved ? JSON.parse(saved).image || null : null;
  });

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const playTrack = useCallback((track) => {
    setCurrentTrack(track);
    localStorage.setItem('currentTrack', JSON.stringify(track));
    setTimeout(() => {
      audioRef.current?.play();
    }, 100);
  }, []);

  const playNext = useCallback(() => {
    const index = playlist.findIndex((t) => t.url === currentTrack?.url);
    if (index < playlist.length - 1) {
      playTrack(playlist[index + 1]);
    }
  }, [playlist, currentTrack, playTrack]);

  const playPrev = useCallback(() => {
    const index = playlist.findIndex((t) => t.url === currentTrack?.url);
    if (index > 0) {
      playTrack(playlist[index - 1]);
    }
  }, [playlist, currentTrack, playTrack]);

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  useEffect(() => {
    const updateTrack = () => {
      const track = JSON.parse(localStorage.getItem('currentTrack'));
      const listData = JSON.parse(localStorage.getItem('currentPlaylist'));
      if (track) {
        setCurrentTrack(track);
        setPlaylist(listData?.tracks || []);
        setPlaylistImage(listData?.image || null);
        setTimeout(() => {
          audioRef.current?.play();
        }, 100);
      }
    };

    window.addEventListener('trackChanged', updateTrack);
    return () => window.removeEventListener('trackChanged', updateTrack);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);
    const handleEnded = () => playNext();

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrack, playNext]);

  return (
    <div className="global-player">
      {currentTrack ? (
        <>
          <div className="player-left">
            <img src={currentTrack.image} alt={currentTrack.title} className="player-thumb" />
            <div className="player-meta">
              <p className="player-title">{currentTrack.title}</p>
              <p className="player-artist">{currentTrack.artist}</p>
            </div>
          </div>

          <div className="player-center">
            <div className="player-controls">
              <button className="control-btn" onClick={playPrev}>⏮</button>
              <button
                className="control-btn"
                onClick={() => {
                  if (audioRef.current.paused) {
                    audioRef.current.play();
                  } else {
                    audioRef.current.pause();
                  }
                }}
              >
                ⏯
              </button>
              <button className="control-btn" onClick={playNext}>⏭</button>
            </div>

            <div className="player-progress">
              <span className="time-label">{formatTime(currentTime)}</span>
              <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleSeek}
                className="progress-bar"
              />
              <span className="time-label">{formatTime(duration)}</span>
            </div>
          </div>

          {playlistImage && (
            <div className="player-right">
              <img src={playlistImage} alt="Album cover" className="album-thumb" />
            </div>
          )}

          <audio ref={audioRef} src={currentTrack.url} className="hidden-audio" />
        </>
      ) : (
        <p>🎵 Chọn một bài hát để bắt đầu phát</p>
      )}
    </div>
  );
}
