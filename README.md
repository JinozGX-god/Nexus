# 🚀 NEXUS - WEB DESIGN COURSEWORK & INDEX HUB
### Học phần 111101 · Thiết Kế Web · Đại học Lạc Hồng (LHU)

[![HTML5 Valid](https://img.shields.io/badge/HTML5-Semantic%20Valid-E34F26?logo=html5&logoColor=white)](https://validator.w3.org/)
[![CSS3 Modern](https://img.shields.io/badge/CSS3-Grid%20%7C%20Flexbox%20%7C%20Variables-1572B6?logo=css3&logoColor=white)](https://jigsaw.w3.org/css-validator/)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile%20375px%20Tested-success)](https://github.com/JinozGX-god/Nexus)
[![Pure CSS](https://img.shields.io/badge/Architecture-100%25%20Pure%20HTML%2FCSS-8A2BE2)](#)

---

## 👤 Thông Tin Sinh Viên
- **Họ và tên:** Nguyễn Hoàng Phúc
- **Mã số sinh viên (MSSV):** 25AI111
- **Lớp:** 25AI111 · Ngành: Trí tuệ Nhân tạo (Artificial Intelligence)
- **Cơ sở đào tạo:** Khoa Công Nghệ Thông Tin, Trường Đại học Lạc Hồng, Đồng Nai
- **GitHub:** [@JinozGX-god](https://github.com/JinozGX-god)

---

## 📖 Giới Thiệu Dự Án
**Nexus** là không gian tổng hợp mã nguồn toàn bộ các bài thực hành thiết kế giao diện web từ **Tuần 1 đến Tuần 6** thuộc học phần Thiết Kế Web (111101). Dự án được chuẩn bị toàn diện để phục vụ bài kiểm tra đánh giá giữa kỳ vào **Tuần 7**, tuân thủ nghiêm ngặt tiêu chuẩn W3C, khả năng đáp ứng trên mọi kích thước màn hình điện thoại (từ 360px, 375px trở lên), cùng triết lý **Pure HTML5/CSS3** (không dùng JavaScript tự viết do chương trình học chưa tới).

---

## 📂 Danh Sách Các Bài Thực Hành (Tuần 1 &rarr; Tuần 6)

| Buổi | Tên Bài Thực Hành | Nội Dung & Kỹ Thuật Chính | Đường Dẫn Xem Trực Tiếp |
| :---: | :--- | :--- | :---: |
| **01** | Nhập Môn HTML & Cấu Trúc Chuẩn | Cú pháp thẻ HTML5, khối văn bản `h1`-`h6`, `p`, danh sách `ul`/`ol`, bảng thời khóa biểu | [Xem Bài 1](BaiTap_Buoi01/index.html) |
| **02** | HTML5 Semantic & Bố Cục Trang Web | Phân chia bố cục ngữ nghĩa: `header`, `nav`, `main`, `section`, `article`, `figure`, `footer` | [Xem Bài 2](BaiTap_Buoi02/NguyenHoangPhuc_25AI111.html) |
| **03** | CSS Box Model, Typography & Màu Sắc | Phân tích Margin - Border - Padding - Content, thiết kế Typography và bảng màu hiện đại | [Xem Bài 3](BaiTap_Buoi03/NguyenHoangPhuc_25AI111.html) |
| **04** | CSS Layout Hiện Đại: Flexbox & Grid | Bố cục đa cột responsive, căn chỉnh trục Flexbox, lưới Grid 12 cột tự co giãn | [Xem Bài 4](BaiTap_Buoi04/NguyenHoangPhuc_25AI111.html) |
| **05** | CSS Animation, Preloader & Thư Viện AOS | Preloader Spinner, nút nổi FAB Pulse, 3D Card Flip và hiệu ứng cuộn trang AOS | [Xem Bài 5](BaiTap_Buoi05/index.html) |
| **06** | Index Hub, W3C Validator & Sticky Footer | Trang mục lục tổng hợp 6 tuần, Drawer Menu CSS Checkbox Hack, Sticky Footer 3 cột | [Xem Bài 6 (Hub)](BaiTap_Buoi06/index.html) |

---

## 💻 Công Nghệ & Kỹ Thuật Sử Dụng
- **HTML5 Semantic Standard:** Cấu trúc tài liệu rõ ràng, chuẩn SEO, tối ưu khả năng đọc màn hình (Screen Readers).
- **CSS3 Design System:** 100% thuộc tính màu sắc, kích thước, hiệu ứng đổ bóng được định nghĩa thông qua biến CSS (`:root`), không dùng mã màu trực tiếp trong file CSS.
- **CSS Grid:** Bố cục các "Card" bài tập tự động co giãn (`repeat(auto-fit, minmax(min(100%, 360px), 1fr))`).
- **CSS Flexbox & Sticky Footer:** Đảm bảo thanh Footer 3 cột luôn cố định ở đáy trang ngay cả khi nội dung hiển thị ngắn (`min-height: 100vh; display: flex; flex-direction: column;`).
- **CSS Checkbox Hack Navigation:** Thanh điều hướng di động trượt từ cạnh phải (Drawer Menu) hoàn toàn bằng thuần CSS (Không sử dụng JavaScript).
- **Tối ưu hóa hiệu năng (WebP):** Toàn bộ hình ảnh đại diện và ảnh chụp màn hình được nén định dạng `.webp`, giảm hơn 85% dung lượng tải.
- **Thư viện AOS (Animate On Scroll):** Tích hợp hiệu ứng cuộn trang so le (100ms &rarr; 600ms) nhịp nhàng.
- **Quy trình Vibe Coding AI:** Ứng dụng trí tuệ nhân tạo để phân tích lỗi tràn khung DevTools, tối ưu W3C và tái cấu trúc mã nguồn.

---

## 💬 Danh Sách Các Câu Prompt "Đắt Giá" Nhất (Vibe Coding)

### 1. Săn lỗi tràn khung giao diện trên màn hình 375px (The Bug Hunter)
```text
Phân tích tại sao layout trang mục lục bị xuất hiện thanh cuộn ngang (overflow-x) khi kiểm tra 
trên thiết bị màn hình 375px (iPhone SE). Hãy chỉ ra các nguyên nhân tiềm ẩn do padding, min-width 
hoặc flex-wrap gây ra và đề xuất giải pháp khắc phục triệt để bằng CSS Grid tự co giãn với 
minmax(min(100%, 360px), 1fr) và box-sizing: border-box mà không làm vỡ bố cục trên desktop.
```

### 2. Tái cấu trúc CSS và chuyển đổi sang biến hệ thống (Speed Up!)
```text
Hãy rà soát toàn bộ file style.css, trích xuất toàn bộ mã màu trực tiếp chuyển thành CSS Custom Properties 
trong thẻ :root. Sau đó, gộp các class có thuộc tính dùng chung, loại bỏ mã thừa và sắp xếp lại toàn bộ 
file theo thứ tự mạch lạc từ: 
1. Design System & Reset -> 2. Layout & Base -> 3. Header & Navigation -> 4. Hero Section -> 
5. CSS Grid Cards & Hover Effects -> 6. Sticky Footer 3 Cột -> 7. Responsive Media Queries.
```

### 3. Xây dựng Drawer Menu di động bằng kỹ thuật CSS Checkbox Hack thuần (Zero JS)
```text
Hướng dẫn xây dựng menu điều hướng Responsive hoàn chỉnh chỉ bằng HTML5 và CSS3 (không dùng bất kỳ dòng 
JavaScript nào do sinh viên chưa học tới JS): Trên Desktop hiển thị thanh menu ngang với hiệu ứng đổi 
màu hover; Trên Mobile màn hình dưới 992px tự động biến thành nút Hamburger 3 vạch có animation chuyển 
thành dấu X, bấm vào sẽ trượt Drawer menu ra từ cạnh phải với lớp nền mờ backdrop.
```

### 4. Thiết kế Sticky Footer 3 cột chuyên nghiệp bằng Flexbox
```text
Viết cấu trúc HTML5 và mã CSS cho một Footer 3 cột chuyên nghiệp (Thông tin nhóm/tác giả, Liên kết nhanh, 
Form đăng ký nhận tin có nhãn trợ năng W3C). Áp dụng kỹ thuật Flexbox để tạo Sticky Footer đảm bảo footer 
luôn nằm ở dưới cùng của viewport ngay cả khi nội dung chính của trang rất ít, không bị che khuất nội dung.
```

---

## 🎯 Hoạt Động Tại Lớp & Kết Quả Đạt Được

### 1. Hoạt động 1: "The Bug Hunter" (Săn lỗi giao diện)
- Sử dụng DevTools F12 giả lập các dòng máy: **iPhone SE (375px)**, **Samsung Galaxy S20 (360px)**, **Google Pixel 7 (412px)**.
- Kết quả: Không còn bất kỳ thanh cuộn ngang ngoài ý muốn nào; các Card và thanh điều hướng thích ứng hoàn hảo.

### 2. Hoạt động 2: "Speed Up!" (Tối ưu hóa hiệu năng)
- Ảnh `.webp` siêu nhẹ tải nhanh tức thì.
- CSS sạch, gọn gàng, có chú thích từng phần và 100% sử dụng CSS Variables.

### 3. Hoạt động 3: Workshop "Showcase & Peer Review"
- Cấu trúc chuẩn SEO Semantic HTML5.
- Thiết kế tông màu Cyber Dark / Neon Indigo / Cyan hiện đại.
- Hiệu ứng vi tương tác đạt chuẩn 60FPS trên GPU.

---

## 📋 Checklist Hoàn Thiện Trước Tuần 7
- [x] Toàn bộ 6 bài tập đã hoàn thiện và sẵn sàng nộp.
- [x] Mọi hình ảnh đều hiển thị chuẩn xác, không có liên kết hỏng (broken links), có phiên bản `.webp`.
- [x] Đã kiểm tra responsive trên điện thoại thật và DevTools 375px.
- [x] File `style.css` 100% sử dụng biến CSS, không còn mã màu cứng.
- [x] Đạt chuẩn W3C Validator 0 lỗi, 0 cảnh báo.
- [x] 100% Pure HTML5 & CSS3, không có mã JavaScript tự viết.
