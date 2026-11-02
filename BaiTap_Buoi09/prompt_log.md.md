# NHẬT KÝ SỬ DỤNG PROMPT (PROMPT LOG) - TUẦN 9

**Chủ đề:** Tự động hóa với Vòng lặp & Tư duy đóng gói với Hàm (Functions)
**Sinh viên thực hiện:** Nguyễn Minh Anh (Ngành Trí tuệ nhân tạo - Đại học Lạc Hồng)

## 1. Giải quyết 6 Bài tập tự rèn luyện (Homework)

* **Mục tiêu:** Hoàn thành 6 bài tập JS cơ bản yêu cầu sử dụng vòng lặp `for`, `while` và tư duy đóng gói Hàm (có tham số và `return`).
* **Prompt đã sử dụng:**

  > "Hãy đóng vai một Mentor dạy lập trình. Viết cho tôi đoạn mã JavaScript để giải quyết 6 bài tập sau, yêu cầu in kết quả ra Console:
  > 1. In bảng cửu chương 7 (dùng vòng lặp for).
  > 2. Hàm tính tổng dãy số từ 1 đến n.
  > 3. Hàm kiểm tra số nguyên tố cơ bản.
  > 4. Hàm máy tính cá nhân (nhận 2 số và 1 toán tử +, -, *, /).
  > 5. Hàm tìm số lớn nhất trong 3 số a, b, c (dùng lệnh if).
  > 6. Cho một mảng tên 5 thành viên nhóm, dùng vòng lặp in ra câu chào từng người.
  > Yêu cầu: Viết code sạch, có comment giải thích rõ tham số và giá trị trả về (return)."

* **Kết quả:** AI cung cấp file `homework_tuan9.js` hoàn chỉnh. Các hàm được đóng gói rất gọn gàng, thể hiện rõ tư duy tái sử dụng và kiểm soát đầu ra bằng lệnh `return`.

## 2. Thách thức "The Smart Interface" (Tích hợp Portfolio)

* **Mục tiêu:** Biến đổi phần "Hồ sơ dự án" trong HTML từ code tĩnh (hard-code) thành code động (dynamic) bằng cách dùng Mảng dữ liệu và Hàm kết xuất (Render Function).
* **Prompt đã sử dụng:**

  > "Tôi đang làm dự án Web Portfolio. Hãy giúp tôi tái cấu trúc phần tử `<div class="project-gallery">` chứa 4 thẻ bài viết tĩnh. Yêu cầu:
  > 1. Tạo một Mảng `projectData` chứa 4 Đối tượng (Object), mỗi đối tượng lưu trữ ảnh, huy hiệu, tiêu đề và mô tả của dự án.
  > 2. Xóa các thẻ bài viết cứng trong HTML, thay bằng một div rỗng có id là `dynamic-projects-container`.
  > 3. Viết một hàm `renderProjects(dataArray, containerId)` sử dụng vòng lặp `for` để duyệt qua mảng dữ liệu, lắp ghép dữ liệu vào chuỗi HTML (Template Literal) và bơm vào container thông qua `innerHTML`.
  > Đảm bảo tuân thủ triết lý DRY (Don't Repeat Yourself)."

* **Kết quả:** AI đã giúp phân tách hoàn toàn phần Dữ liệu (Data) ra khỏi phần Giao diện (UI). Mã HTML trở nên cực kỳ gọn nhẹ, đồng thời hàm JS có thể tái sử dụng dễ dàng nếu sau này muốn thêm dự án thứ 5, thứ 6.

## 3. Soạn thảo file giải mã logic hàm (AI Logic Explainer)

* **Mục tiêu:** Viết file `function_logic.md` theo yêu cầu bài nộp để giải thích cách truyền dữ liệu vào hàm và sử dụng vòng lặp.
* **Prompt đã sử dụng:**

  > "Hãy đóng vai trò là một sinh viên xuất sắc, viết file `function_logic.md` giải thích đoạn code JavaScript vừa tạo ở phần Thách thức Tuần 9. Yêu cầu giải thích rõ 3 ý:
  > 1. Cách khởi tạo và lưu trữ mảng dữ liệu.
  > 2. Cách truyền tham số (Parameters) vào hàm `renderProjects`.
  > 3. Cách vòng lặp `for` hoạt động để kết xuất chuỗi HTML. Trình bày bằng Markdown chuyên nghiệp."

* **Kết quả:** File giải trình được sinh ra rất rõ ràng. Nó thể hiện được sự hiểu biết sâu sắc về các khái niệm cốt lõi của bài học (Scope, Parameters, Loop), đáp ứng 100% yêu cầu đầu ra (LLO) của Tuần 9.