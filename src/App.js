// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PostDetail from './components/PostDetail';
import Login from './components/Login';
import Posts from './components/Posts';
import Stories from './components/Stories';
import Asks from './components/Asks';
import About from './components/About';
import StoryList from './components/StoryList';
import StoryDetail from './components/StoryDetail';
import ChapterDetail from './components/ChapterDetail';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Bài viết chi tiết */}
        <Route path="/post/:id" element={<PostDetail />} />

        {/* Trang mới thêm */}
        <Route path="/login" element={<Login />} />
        <Route path="/notes" element={<Posts />} />
        <Route path="/articles" element={<StoryList />} />
        <Route path="/story/:id" element={<StoryDetail />} />
        <Route path="/story/:id/chapter/:chapterId" element={<ChapterDetail />} />
        <Route path="/ranking" element={<Asks />} />
        <Route path="/about" element={<About />} />

        {/* Tùy chọn: Nếu bạn có trang /post/new sau này */}
        {/* <Route path="/post/new" element={<NewPost />} /> */}
      </Routes>
    </Router>
  );
}
