import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PostDetail from './components/PostDetail';
import Login from './components/Login';
import Posts from './components/Posts';
import Stories from './components/Stories'; // đã import
import About from './components/About';
import StoryList from './components/StoryList';
import StoryDetail from './components/StoryDetail';
import ChapterDetail from './components/ChapterDetail';
import Music from './components/Music';
import PlaylistDetail from './components/PlaylistDetail';
import GlobalMusicPlayer from './components/GlobalMusicPlayer';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notes" element={<Posts />} />
        <Route path="/articles" element={<StoryList />} />
        <Route path="/story/:id" element={<StoryDetail />} />
        <Route path="/story/:id/chapter/:chapterId" element={<ChapterDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/music" element={<Music />} />
<Route path="/music/:id" element={<PlaylistDetail />} />

        {/* ✅ Thêm route để dùng Stories */}
        <Route path="/stories" element={<Stories />} />
      </Routes>
      <GlobalMusicPlayer />
    </Router>
  );
}
