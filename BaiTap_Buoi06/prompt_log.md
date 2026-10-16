# NHẬT KÝ SỬ DỤNG PROMPT (PROMPT LOG)
**Dự án:** Tái cấu trúc CSS, Tối ưu UI/UX & Hiệu năng (Speed Up)
**Sinh viên thực hiện:** Nguyễn Minh Anh

---

## 1. Tái cấu trúc kiến trúc CSS (CSS Refactoring)
* **Mục tiêu:** Dọn dẹp mã nguồn, giải quyết xung đột Cascade và thiết lập cấu trúc file chuyên nghiệp.
* **Prompt đã sử dụng:** 
  > "Đóng vai chuyên gia UX/UI, hãy phân tích file `style.css` hiện tại: liệt kê các selector bị trùng lặp, đề xuất gộp class, chuyển các giá trị màu cứng thành CSS Variables (sử dụng định dạng RGB để kết hợp với `rgba`). Cuối cùng, cấu trúc lại toàn bộ mã nguồn theo chuẩn Base -> Layout -> Components dựa trên tài liệu web.dev và MDN."
* **Kết quả:** Mã nguồn được phân tầng logic, dễ bảo trì. Các mã màu cứng được thay thế bằng hệ thống biến linh hoạt, khắc phục triệt để lỗi ghi đè CSS không cần thiết.

## 2. Xử lý lỗi UI và Tối ưu trải nghiệm tương tác (Hover Effects)
* **Mục tiêu:** Khắc phục lỗi cắt xén icon khi hiệu ứng phóng to vượt quá ranh giới thẻ (overflow).
* **Prompt đã sử dụng:** 
  > "Hiện tại khi hover, thẻ icon SVG bị cắt mất một nửa do thuộc tính `overflow: hidden`. Hãy viết lại CSS cho phần Card System: Sử dụng `background-position` để tạo tia sáng lướt qua (giữ dải sáng trong viền bo cong), đồng thời gỡ bỏ `overflow: hidden`. Với icon, hãy thiết lập `transform-origin: left top` kết hợp khoảng đệm an toàn để icon phóng to mượt mà không lấn ra ngoài."
* **Kết quả:** Hiệu ứng tia sáng hoạt động hoàn hảo, icon SVG tự do chuyển động và phóng to mượt mà ngay trong lòng thẻ mà không bị biến dạng hay cắt xén.

## 3. Chống lỗi Layout (Fallback) & Chuẩn hóa Mobile First
* **Mục tiêu:** Đảm bảo các thẻ không bị dính sát vào nhau khi mất Grid và tối ưu hóa tốc độ render trên thiết bị di động.
* **Prompt đã sử dụng:** 
  > "Các thẻ đang bị dính sát vào nhau. Hãy bổ sung `gap: var(--space-lg)` cho hệ thống lưới và thêm `margin-bottom` trực tiếp vào class `.card` làm phương án dự phòng (fallback). Đồng thời, hãy tối ưu Hamburger Menu theo tiêu chí Mobile First: thiết lập hiển thị mặc định trên Mobile bằng Flexbox, và sử dụng Media Query `@media (min-width: 1024px)` để ẩn menu này trên màn hình Desktop."
* **Kết quả:** Giao diện hiển thị không gian rộng rãi, thoáng mắt. Đảm bảo cấu trúc an toàn tuyệt đối trên mọi kích thước màn hình và tuân thủ đúng triết lý thiết kế ưu tiên thiết bị di động.

## 4. Hoạt động "Speed Up!": Tối ưu hóa hiệu năng & Dung lượng
* **Mục tiêu:** Giảm dung lượng file CSS tối đa thông qua việc gộp các class có chung thuộc tính.
* **Prompt đã sử dụng:** 
  > "Thực hiện Hoạt động 'Speed Up!': Yêu cầu AI rà soát lại toàn bộ file CSS hiện tại để tìm và gộp các class có chung các định dạng lặp lại (như Flexbox căn giữa tuyệt đối, bo góc tròn `border-radius: 50%`, và xóa gạch chân thẻ link `text-decoration: none`). Hãy gom chúng thành một khu vực UTILITIES chung để giảm dung lượng file."
* **Kết quả:** File CSS được thu gọn đáng kể, mã nguồn trở nên tinh gọn (DRY - Don't Repeat Yourself), đáp ứng xuất sắc tiêu chí tối ưu hóa hiệu năng của đề bài.