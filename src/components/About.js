// src/components/About.js
import { Link } from 'react-router-dom';
import './styles/About.css';
import './styles/Common.css';


export default function About() {
  return (
    <div className="about-page">
       <Link to="/" className="back-home">← Quay lại trang chủ</Link>
      <h1>Tạm thời thì mình chưa biết làm gì với trang này :D</h1>
      <p>
        Chào ae, là mình đây. Trang web này mình lập hoàn toàn bằng FE, không hề có một chút BE nào cả.
        Ban đầu thì đây là một ứng dụng to do list mình tự làm, nhưng rồi quên bẵng đi, mãi đến tháng trước ngồi dọn dẹp ổ D mới thấy.
        Mình nghĩ xóa hẳn đi thì hơi phí, nên mình muốn làm gì đó mới mẻ hơn. Và trang web này ra đời.
        Mọi thứ chắc chắn sẽ không được tối ưu đâu, nên mọi người thông cảm nhé hehe.
      </p>
      <p>
        Mình chỉ muốn trang web này như một bảo tàng nhỏ của mình, do mình và vì mình. Nhưng đồng thời cũng là một nơi mà ae có thể ghé qua và rời đi với một mẩu cảm xúc nào đó.
      </p>
    </div>
  );
}
