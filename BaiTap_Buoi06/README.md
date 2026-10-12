# BÁO CÁO BÀI TẬP BUỔI 06 - INDEX HUB & TỔNG KẾT TRƯỚC TUẦN 7
**Học phần:** 111101 · Thiết Kế Web · Trường Đại học Lạc Hồng (LHU)  
**Sinh viên thực hiện:** Nguyễn Hoàng Phúc  
**Mã số sinh viên (MSSV):** 25AI111  
**Lớp:** 25AI111 · Ngành: Trí tuệ Nhân tạo (AI)  

---

## 📌 1. TỔNG QUAN DỰ ÁN & CHỦ ĐỀ
- **Tên dự án:** Nexus - Index Hub & Student Portfolio Capstone.
- **Chủ đề:** Trung tâm mục lục điều hướng tổng hợp toàn bộ 6 bài thực hành thiết kế web từ Tuần 1 đến Tuần 6, chuẩn bị cho bài thi đánh giá giữa kỳ vào Tuần 7.
- **Tiêu chuẩn lập trình:** 100% Pure HTML5 & CSS3 chuẩn ngữ nghĩa (Semantic), hoàn toàn không dùng mã JavaScript nghiệp vụ tự viết (do chương trình học chưa tới phần JS). Sử dụng kỹ thuật thuần CSS Checkbox Hack cho thanh menu điều hướng di động (Hamburger Drawer).

---

## 🚀 2. BẢNG MỤC LỤC TỔNG HỢP 6 BÀI THỰC HÀNH (TUẦN 1 &rarr; TUẦN 6)

| Buổi | Tên Bài Thực Hành | Công Nghệ & Kỹ Thuật Chính | Đường Dẫn Bài Làm | Trạng Thái W3C |
| :---: | :--- | :--- | :---: | :---: |
| **01** | Nhập Môn HTML5 & Cấu Trúc Cơ Bản | DOCTYPE chuẩn, thẻ văn bản, danh sách `ul`/`ol`, bảng thời khóa biểu | [`BaiTap_Buoi01/index.html`](../BaiTap_Buoi01/index.html) | Đạt chuẩn |
| **02** | HTML5 Semantic & Bố Cục Trang Web | Thẻ ngữ nghĩa `header`, `nav`, `main`, `section`, `article`, `figure`, `footer` | [`BaiTap_Buoi02/NguyenHoangPhuc_25AI111.html`](../BaiTap_Buoi02/NguyenHoangPhuc_25AI111.html) | Đạt chuẩn |
| **03** | CSS Cơ Bản, Box Model & Typography | Mô hình hộp Margin - Border - Padding - Content, Font chữ, Hệ màu | [`BaiTap_Buoi03/NguyenHoangPhuc_25AI111.html`](../BaiTap_Buoi03/NguyenHoangPhuc_25AI111.html) | Đạt chuẩn |
| **04** | Bố Cục Hiện Đại: Flexbox & CSS Grid | Phân chia lưới đa cột, căn chỉnh trục Flexbox, Responsive Web Design | [`BaiTap_Buoi04/NguyenHoangPhuc_25AI111.html`](../BaiTap_Buoi04/NguyenHoangPhuc_25AI111.html) | Đạt chuẩn |
| **05** | CSS Animation, UI Effects & Thư Viện AOS | Preloader Spinner, FAB Pulse, 3D Flip Card, Menu Mobile, Cuộn AOS | [`BaiTap_Buoi05/index.html`](../BaiTap_Buoi05/index.html) | Đạt chuẩn |
| **06** | Index Hub, W3C Validator & Sticky Footer | CSS Grid Cards hover zoom, Drawer Menu Checkbox Hack, Footer 3 cột | [`BaiTap_Buoi06/index.html`](index.html) | 0 Lỗi, 0 Cảnh báo |

---

## 🛠️ 3. CÔNG NGHỆ VÀ KỸ THUẬT SỬ DỤNG
1. **HTML5 Semantic Standard:** Cấu trúc tài liệu mạch lạc với các thẻ ngữ nghĩa chuẩn SEO và Trợ năng (A11y).
2. **CSS3 Modern Layout:**
   - **CSS Grid:** Sử dụng `grid-template-columns: repeat(auto-fit, minmax(min(100%, 360px), 1fr))` tạo hệ thống Card bài tập tự co giãn hoàn hảo trên mọi kích thước màn hình.
   - **Flexbox:** Sử dụng trục dọc cho toàn trang (`min-height: 100vh; display: flex; flex-direction: column;`) và `margin-top: auto` đảm bảo Sticky Footer luôn cố định ở đáy trang.
   - **CSS Custom Properties (Biến CSS):** 100% mã màu, khoảng cách, kích thước font và bán kính bo góc được quản lý tập trung trong `:root`, không còn mã màu hex cứng trong file CSS.
3. **Kỹ thuật Không Dùng JavaScript:**
   - Thanh điều hướng Mobile Hamburger sử dụng **CSS Checkbox Hack** (`input[type="checkbox"]:checked ~ .nav-menu`), trượt mượt mà với `transform: translateX(0)` và chuyển động 3 vạch thành dấu "X".
   - Hiệu ứng phóng to ảnh khi hover vào Card (`transform: scale(1.08)`) và làm hiện nút "Xem chi tiết" hoàn toàn bằng CSS Transition.
4. **Tối ưu hóa hiệu năng (Performance):**
   - Chuyển đổi toàn bộ hình ảnh sang định dạng `.webp` giảm hơn **85% dung lượng** tải trang (từ 24KB xuống 3.7KB cho ảnh đại diện).
5. **Thư viện hiệu ứng AOS (Animate On Scroll):**
   - Tích hợp qua CDN với các thuộc tính `data-aos`, tinh chỉnh `data-aos-duration` và `data-aos-delay` so le nhịp nhàng từ 100ms đến 600ms.

---

## 💡 4. DANH SÁCH CÁC CÂU PROMPT "ĐẮT GIÁ" NHẤT (VIBE CODING AI)

Dưới đây là các câu Prompt tiêu biểu đã áp dụng trong quá trình giải quyết các bài toán layout khó và tối ưu hóa mã nguồn:

### Prompt 1: Xử lý lỗi tràn khung trên màn hình 375px (The Bug Hunter)
> *"Phân tích tại sao layout trang mục lục bị xuất hiện thanh cuộn ngang (overflow-x) khi kiểm tra trên thiết bị màn hình 375px (iPhone SE). Hãy chỉ ra các nguyên nhân tiềm ẩn do padding, min-width hoặc flex-wrap gây ra và đề xuất giải pháp khắc phục triệt để bằng CSS Grid tự co giãn với `minmax(min(100%, 360px), 1fr)` và `box-sizing: border-box` mà không làm vỡ bố cục trên desktop."*

### Prompt 2: Refactor CSS và đồng bộ hệ thống biến Design System (Speed Up!)
> *"Hãy rà soát toàn bộ file `style.css`, trích xuất toàn bộ mã màu trực tiếp chuyển thành CSS Custom Properties trong thẻ `:root`. Sau đó, gộp các class có thuộc tính dùng chung, loại bỏ mã thừa và sắp xếp lại toàn bộ file theo thứ tự mạch lạc từ: 1. Design System & Reset -> 2. Layout & Base -> 3. Header & Navigation -> 4. Hero Section -> 5. CSS Grid Cards & Hover Effects -> 6. Sticky Footer 3 Cột -> 7. Responsive Media Queries."*

### Prompt 3: Thiết kế Sticky Footer 3 cột chuyên nghiệp bằng Flexbox
> *"Viết cấu trúc HTML5 và mã CSS cho một Footer 3 cột chuyên nghiệp (Thông tin nhóm/tác giả, Liên kết nhanh, Form đăng ký nhận tin có nhãn trợ năng W3C). Áp dụng kỹ thuật Flexbox để tạo Sticky Footer đảm bảo footer luôn nằm ở dưới cùng của viewport ngay cả khi nội dung chính của trang rất ít, không bị che khuất nội dung."*

### Prompt 4: Tạo Drawer Menu di động bằng kỹ thuật CSS Checkbox Hack thuần (Không dùng JS)
> *"Hướng dẫn xây dựng menu điều hướng Responsive hoàn chỉnh chỉ bằng HTML5 và CSS3 (không dùng bất kỳ dòng JavaScript nào do sinh viên chưa học tới JS): Trên Desktop hiển thị thanh menu ngang với hiệu ứng đổi màu hover; Trên Mobile màn hình dưới 992px tự động biến thành nút Hamburger 3 vạch có animation chuyển thành dấu X, bấm vào sẽ trượt Drawer menu ra từ cạnh phải với lớp nền mờ backdrop."*

---

## 🔍 5. BÁO CÁO HOẠT ĐỘNG TẠI LỚP (IN-CLASS ACTIVITIES)

### Hoạt động 1: "The Bug Hunter" (Săn lỗi giao diện)
- **Thiết bị kiểm thử:** iPhone SE (375px), Pixel 7 (412px), Samsung Galaxy S20 (360px), iPad Mini (768px).
- **Lỗi phát hiện:** 
  1. Ban đầu phần tử `pre`/`code` và bảng dữ liệu có thể gây tràn ngang nếu kích thước cố định.
  2. Các Card trong Grid nếu đặt `minmax(360px, 1fr)` cứng trên màn hình 375px kèm padding sẽ gây ra tràn 10px.
- **Cách khắc phục:** Thay bằng `minmax(min(100%, 360px), 1fr)`, bổ sung `overflow-x: hidden` trên thẻ cha và đặt `box-sizing: border-box` toàn diện.

### Hoạt động 2: "Speed Up!" (Tối ưu hóa hiệu năng)
- **Nén ảnh:** Đã tạo toàn bộ các ảnh `buoi01.webp` &rarr; `buoi06.webp` và `avatar.webp`.
- **Refactor CSS:** 100% thuộc tính màu sắc, bóng đổ, gradient đều sử dụng biến CSS. Không còn mã hex nằm rải rác trong các rule.

### Hoạt động 3: Workshop "Showcase & Peer Review"
- Cấu trúc chuẩn SEO Semantic HTML5.
- Hệ thống biến CSS đồng bộ tông màu Cyber Dark / Neon Indigo / Cyan.
- Hiệu ứng vi tương tác mượt mà đạt 60FPS trên GPU.

---

## 📋 6. CHECKLIST HOÀN THIỆN TRƯỚC TUẦN 7
- [x] Toàn bộ bài tập 1 đến 6 đã được tổ chức sạch sẽ, sẵn sàng push lên nhánh `main`.
- [x] Mọi hình ảnh đều hiển thị đúng, không bị lỗi link (broken links), đã có phiên bản `.webp`.
- [x] Đã kiểm tra website trên cả điện thoại (375px) và máy tính (responsive layout).
- [x] File `style.css` không còn chứa mã màu trực tiếp (100% sử dụng biến CSS).
- [x] Không sử dụng mã JavaScript tự viết, tuân thủ yêu cầu chương trình đào tạo hiện tại.
