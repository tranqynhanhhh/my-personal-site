import Diary from './Diary';

export default function About() {
  const isOwner = true; // giả định bạn là người truy cập

  return (
    <div className="section">
      <h2>👩‍🎨 Về tôi</h2>
      <p>Tôi là một người yêu nghệ thuật, viết lách và khám phá bản thân.</p>
      {isOwner && <Diary />}
    </div>
  );
}
