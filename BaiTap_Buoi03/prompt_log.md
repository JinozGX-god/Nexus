# Nhật ký thiết kế & Tối ưu AI (Master Prompt Log)

**Sinh viên thực hiện:** Nguyễn Minh Anh
**Môn học:** Thiết kế Web (Buổi 3)

### 1. Ý tưởng nâng cấp tổng thể
Thay vì chỉ làm một giao diện tĩnh cơ bản, tôi đã quyết định yêu cầu AI hỗ trợ nâng cấp dự án thành một giao diện tạp chí chuyên nghiệp, áp dụng các chuẩn mực UI/UX hiện đại như: Glassmorphism (Kính mờ), Card-UI có chiều sâu, và Responsive hoàn hảo.

### 2. Các Master Prompt đã sử dụng

**Prompt 1: Xây dựng bộ khung CSS Grid Layout tổng thể (Chuẩn Desktop & Mobile)**
> "Hãy đóng vai một Senior Front-end Developer. Tôi có một file HTML chứa Header, Main, Sidebar, và Footer. Hãy viết một đoạn CSS sử dụng thuộc tính `display: grid` kết hợp `grid-template-areas` để dàn trang theo chuẩn Holy Grail Layout. Yêu cầu:
> 1. Main và Sidebar nằm chung một hàng (Main chiếm tỷ lệ lớn hơn).
> 2. Sử dụng hệ thống biến `:root` để quản lý màu sắc chuyên nghiệp.
> 3. Cấu hình Responsive (Media Query): Khi xuống dưới 900px, Sidebar tự động nhảy xuống dưới Main Content."

**Prompt 2: Thiết kế Khu vực Dự án (Project Gallery) với CSS Grid**
> "Hãy tạo giúp tôi CSS cho phần '<section id="projects">' chứa một danh sách gồm 6 `<article>`. Yêu cầu:
> 1. Bắt buộc dùng `display: grid` với `repeat(auto-fit, minmax(220px, 1fr))` để 6 thẻ article (dự án) tự động co giãn kích thước bằng nhau và linh hoạt lấp đầy khoảng trống trên mọi kích thước màn hình.
> 2. Áp dụng phong cách Image Card: Đặt hình nền (background-image) cho từng item, thiết lập `aspect-ratio: 4/3`.
> 3. Tạo một lớp phủ (overlay gradient) tối màu và thêm hiệu ứng hover chuyên nghiệp (chữ trượt lên khi đưa chuột vào)."

### 3. Giải quyết vấn đề phát sinh & Bài học
* **Vấn đề:** Các hình ảnh trong Project Gallery khi thu nhỏ màn hình bị méo tỷ lệ.
* **Cách giải quyết:** Tôi đã sử dụng thuộc tính `aspect-ratio: 4/3` kết hợp `background-size: cover` để giữ khung hình luôn vuông vức hoàn hảo.
* **Tối ưu code:** Việc tách bạch CSS Grid của Layout tổng thể (layout-container) và CSS Grid của Component (project-grid) giúp code dễ quản lý và thực hiện Pull Request không bị conflict giữa các thành viên.