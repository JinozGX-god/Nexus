# NHẬT KÝ SỬ DỤNG PROMPT (PROMPT LOG)
**Dự án:** Xây dựng Portfolio Cá nhân - Cấu trúc Layout & Responsive cơ bản
**Sinh viên thực hiện:** Nguyễn Minh Anh (Ngành Trí tuệ nhân tạo - Đại học Lạc Hồng)

---

## 1. Hoạt động 1 & 2: Cấu trúc hóa bản sắc và Bảng mã màu thông minh
* **Mục tiêu:** Khởi tạo cấu trúc Semantic HTML và quản lý màu sắc tập trung bằng CSS Variables.
* **Prompt đã sử dụng:** 
  > "Hãy dùng Vibe Code để khởi tạo file `index.html` cho dự án Portfolio. Yêu cầu cấu trúc Semantic rõ ràng: `header` (chứa `nav`), `main` (chứa 3 `section` là Giới thiệu, Kỹ năng, Dự án), và `footer`. Kèm theo đó, tạo một bộ CSS Variables tại `:root` bao gồm: 2 màu chủ đạo (primary/secondary mang phong cách Dark Tech), 3 mức màu xám cho text, và 1 màu nền. Áp dụng các biến này vào cấu trúc HTML vừa tạo."
* **Kết quả:** Code sinh ra đáp ứng chuẩn Semantic, màu sắc được quản lý thông minh tại `:root`, dễ dàng đồng bộ toàn trang.

## 2. Bài thực hành 2: Xây dựng Layout với CSS Grid + Flexbox
* **Mục tiêu:** Phân chia bố cục tổng thể và xử lý danh sách kỹ năng tự động xuống dòng.
* **Prompt đã sử dụng:** 
  > "Sử dụng CSS Grid để chia bố cục trang thành Main Content và Sidebar (rộng 320px) với `gap` phù hợp. Header và Footer phải trải dài toàn bộ bằng `grid-column: 1 / -1`. Tại section Kỹ năng, dùng Flexbox (`display: flex` kết hợp `flex-wrap: wrap`) và thuộc tính `gap` để các thẻ kỹ năng tự động xuống dòng và có khoảng cách đồng nhất, thay thế hoàn toàn cho margin thủ công."
* **Kết quả:** Bố cục 2 cột cứng cáp, danh sách kỹ năng hiển thị gọn gàng, đúng nguyên lý Flexbox.

## 3. Thách thức "The Grid Master": Khu vực Dự án
* **Mục tiêu:** Xây dựng lưới hiển thị các thẻ dự án linh hoạt, kích thước đồng đều.
* **Prompt đã sử dụng:** 
  > "Xây dựng khu vực Dự án (Project Gallery) gồm 6 item (Trợ lý toàn năng, Smart Home Nova, Gia sư AI, FaceID, OurSpace v19, 404Wall). Sử dụng CSS Grid tạo lưới hiển thị sao cho các item có kích thước bằng nhau và tự động dàn đều linh hoạt trên các kích thước màn hình bằng `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`."
* **Kết quả:** Project Gallery hiển thị chuẩn Grid, các khối dự án tự động co giãn theo chiều ngang.

## 4. Hoạt động 3: Responsive Breakpoint Challenge
* **Mục tiêu:** Điều chỉnh bố cục linh hoạt tại các điểm gãy (breakpoints) trên Tablet và Mobile.
* **Prompt đã sử dụng:** 
  > "Sử dụng CSS Grid và Media Queries để tối ưu Responsive. 
  > 1. Thiết kế khu vực 'Dịch vụ' có `class='services-container'`: Màn hình > 1024px có 4 cột, từ 768px - 1024px có 2 cột, và < 768px có 1 cột. Dùng `gap: 20px`.
  > 2. Trên màn hình Mobile (< 768px), biến đổi bố cục Grid tổng thể từ 2 cột (sidebar/main) thành 1 cột duy nhất, đưa Sidebar lên đầu trang. Căn chỉnh lại thanh `nav` nằm ngang và dàn đều không gian."
* **Kết quả:** Giao diện hiển thị tốt trên mọi thiết bị, Sidebar không bị ẩn đi mà xếp chồng hợp lý trên Mobile.

## 5. Hoạt động 4: Design System Refactoring & Debug
* **Mục tiêu:** Chuyển đổi mã "cứng" thành hệ thống biến quản lý tập trung, rà soát Box Model.
* **Prompt đã sử dụng:** 
  > "Rà soát lại toàn bộ mã CSS. Hãy trích xuất tất cả các thông số khoảng cách (margin/padding) và thông số bo góc (border-radius) đang lặp lại vào các biến CSS tại `:root` (ví dụ: `--space-md: 20px`). Thay thế các giá trị cứng trong code bằng hàm `var()`. Đảm bảo code tuân thủ tuyệt đối quy tắc Box Model bằng `box-sizing: border-box` và không chứa bất kỳ mã hiệu ứng chuyển động (animations/transitions) nào."
* **Kết quả:** Mã nguồn gọn, dễ bảo trì (thay đổi khoảng cách toàn trang chỉ bằng 1 biến). Code thuần túy bám sát kiến thức nền tảng HTML/CSS của tuần học.