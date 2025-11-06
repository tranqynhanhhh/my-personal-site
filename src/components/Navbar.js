import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Trang chủ</Link>
      <Link to="/art">Nghệ thuật</Link>
      <Link to="/stories">Truyện</Link>
      <Link to="/about">Về tôi</Link>
    </nav>
  );
}
