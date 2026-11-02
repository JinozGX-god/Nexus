# GIẢI THÍCH LOGIC: TƯƠNG TÁC DOM VÀ XỬ LÝ SỰ KIỆN
**Dự án:** Portfolio - Thách thức Tuần 10 (The Smart Project)
**Sinh viên:** Nguyễn Minh Anh

Để tạo ra một trang web tương tác động mà không cần tải lại trang (chống reload), em đã sử dụng các phương thức truy xuất DOM và lắng nghe sự kiện. Dưới đây là giải trình các sự kiện (Events) được sử dụng trong bài tập:

**1. Sự kiện `click` (Click Event)**
* **Light Switch:** Lắng nghe click chuột lên nút Đổi nền, sử dụng hàm `classList.toggle()` để thêm/xóa class CSS nền trắng trực tiếp vào thẻ `<body>`. 
* **Modal Hộp Thoại (Thách thức Tuần 10):** Gắn sự kiện `click` vào nút "Mở Hộp Thoại". Khi người dùng nhấn, JS sẽ đổi thuộc tính CSS của khối `<div id="contact-modal">` từ `display: none` sang `display: flex` để hộp thoại hiện ra mượt mà, ghi đè lên giao diện gốc.
* Kỹ thuật đóng Modal: Bắt sự kiện `click` vào dấu X (nút close) hoặc kiểm tra nếu mục tiêu click (Event Target) trùng với chính thẻ nền của Modal, thì đổi CSS lại thành `display: none`.

**2. Sự kiện `input` (Live Input)**
* **Phản hồi tức thì:** Gắn sự kiện `input` vào ô điền tên (`#name-input`). Hàm lắng nghe này nhạy đến mức mỗi khi người dùng gõ một phím (keyup), nó lập tức trích xuất dữ liệu (`e.target.value`) và bơm ngay lập tức vào nội dung (`textContent`) của thẻ `<span>` bên dưới. Điều này giúp tối ưu hóa UX, tạo cảm giác phản hồi theo thời gian thực (Real-time).

Những tương tác này giúp website từ một tập hợp thông tin "tĩnh" trở thành một "ứng dụng" sống động, nâng cao trải nghiệm người dùng theo đúng mục tiêu bài học.