// src/components/About.js
import { Link } from 'react-router-dom';
import './styles/About.css';
import './styles/Common.css';


export default function About() {
  return (
    <div className="about-page">
       <Link to="/" className="back-home">← Quay lại trang chủ</Link>
      <h1>About Me</h1>
      <p>
        Xin chào, tôi là Aelin (Trần). Đây là nơi tôi viết, cất giữ những mảnh
        tản văn, truyện riêng tư, và những câu hỏi chưa có lời đáp.
      </p>
      <p>
        Tôi muốn không gian này nhẹ nhàng, chậm rãi — như một bảo tàng nhỏ,
        nơi bạn có thể ghé qua và rời đi với một mẩu cảm xúc nào đó.
      </p>
    </div>
  );
}
