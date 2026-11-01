# NHẬT KÝ SỬ DỤNG PROMPT (PROMPT LOG) - TUẦN 8

**Thử thách:** "The Logic Puzzle" - Tích hợp JavaScript thời gian thực
**Sinh viên thực hiện:** Nguyễn Minh Anh (Ngành Trí tuệ nhân tạo - Đại học Lạc Hồng)

## 1. Viết mã JavaScript xử lý thời gian thực

* **Mục tiêu:** Tạo script hiển thị lời chào (alert) theo đúng buổi trong ngày bằng cách lấy giờ từ hệ thống người dùng, đồng thời đảm bảo không làm gián đoạn hiệu ứng tải trang (loading) hiện tại của dự án.
* **Prompt đã sử dụng:**
  > "Hãy đóng vai một chuyên gia lập trình Web. Viết một đoạn mã JavaScript để nhúng vào thẻ `<script>` trong file `index.html` của dự án Portfolio Tuần 6. Yêu cầu:
  > 1. Khai báo hằng số `currentHour` và gán giá trị bằng đối tượng `new Date().getHours()` để lấy giờ thực tế.
  > 2. Sử dụng cấu trúc `if-else` để phân nhánh: Buổi sáng (0h đến < 12h), Buổi chiều (12h đến < 18h), và Buổi tối (các khung giờ còn lại).
  > 3. Hiển thị lời chào bằng hàm `alert()`.
  > 4. QUAN TRỌNG: Phải bọc logic này trong sự kiện `DOMContentLoaded` và dùng `setTimeout` để đảm bảo thẻ HTML và hiệu ứng Loading xoay vòng được ẩn đi hoàn toàn trước khi bật thông báo `alert`, tránh tình trạng trình duyệt bị treo."
* **Kết quả:** AI đã tạo ra đoạn mã xử lý mượt mà. Thông báo alert() chỉ xuất hiện sau khi giao diện và các tài nguyên đã tải xong, mang lại trải nghiệm người dùng (UX) rất tốt.

## 2. Soạn thảo file giải mã tư duy logic (AI Logic Explainer)

* **Mục tiêu:** Hoàn thiện file `logic_explanation.md` theo yêu cầu bài tập để giải thích cách vận hành của mã nguồn.
* **Prompt đã sử dụng:**
  > "Dựa vào đoạn mã JS vừa tạo, hãy đóng vai một Mentor để giúp tôi soạn thảo file `logic_explanation.md`. Yêu cầu trình bày bằng định dạng Markdown chuyên nghiệp. Cần giải thích cặn kẽ 3 vấn đề:
  > 1. Hàm `new Date().getHours()` hoạt động như thế nào (cách nó lấy giờ hệ thống và kiểu dữ liệu trả về)?
  > 2. Logic phân nhánh `if-else` đã được phân bổ dựa trên biến `currentHour` ra sao?
  > 3. Giải thích thêm về việc tại sao lại cần dùng `setTimeout` để tối ưu trải nghiệm người dùng (UX)."
* **Kết quả:** File Markdown được sinh ra có cấu trúc mạch lạc, giải thích rõ ràng từ kỹ thuật xử lý ngày giờ đến tư duy tối ưu hóa hiệu suất giao diện, đáp ứng hoàn hảo tiêu chí đánh giá của giảng viên.