# GIẢI THÍCH LOGIC: TÍCH HỢP JAVASCRIPT THỜI GIAN THỰC
**Dự án:** Portfolio - Thách thức Tuần 8 (The Logic Puzzle)
**Sinh viên:** Nguyễn Minh Anh

Để hiển thị thông báo chào mừng linh hoạt theo thời gian thực (sáng, chiều, tối), em đã sử dụng đối tượng Date có sẵn của JavaScript kết hợp với cấu trúc điều kiện if-else. Cụ thể như sau:

**1. Cú pháp `new Date().getHours()` hoạt động như thế nào?**
* `new Date()`: Lệnh này khởi tạo một đối tượng thời gian, tự động chụp lại chính xác ngày, giờ, phút, giây hiện tại dựa trên đồng hồ hệ thống của thiết bị.
* `.getHours()`: Đây là một phương thức được gọi từ đối tượng Date. Nó có nhiệm vụ trích xuất và trả về giá trị **Giờ** dưới định dạng số nguyên từ 0 đến 23 (ví dụ: 14 giờ chiều sẽ trả về số 14).

**2. Logic phân nhánh (`if-else`)**
Sau khi lấy được số giờ thực tế và lưu vào hằng số `currentHour`, em thiết lập các mốc điều kiện:
* `if (currentHour >= 0 && currentHour < 12)`: Từ 0h đến trước 12h trưa -> Gán chuỗi "Chào buổi sáng!".
* `else if (currentHour >= 12 && currentHour < 18)`: Từ 12h trưa đến trước 18h tối -> Gán chuỗi "Chào buổi chiều!".
* `else`: Các khung giờ còn lại trong ngày -> Gán chuỗi "Chào buổi tối!".

**3. Tối ưu hóa trải nghiệm (UX)**
Để tránh việc hàm `alert()` chặn quá trình tải trang (khiến vòng xoay loading bị kẹt), đoạn mã JavaScript trên đã được bọc trong sự kiện `DOMContentLoaded` và hàm `setTimeout()`. Nhờ đó, giao diện và các tài nguyên tĩnh sẽ được ưu tiên hiển thị trước, sau đó thông báo chào mừng mới xuất hiện.