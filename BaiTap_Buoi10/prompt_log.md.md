# NHẬT KÝ SỬ DỤNG PROMPT (PROMPT LOG) - TUẦN 10

**Chủ đề:** Thao tác với DOM & Xử lý sự kiện (DOM Manipulation)
**Sinh viên thực hiện:** Nguyễn Minh Anh (Ngành Trí tuệ nhân tạo - Đại học Lạc Hồng)

## 1. Tương tác cơ bản: Light Switch & Live Input (Hoạt động 2 & 3)

* **Mục tiêu:** Áp dụng kỹ năng truy xuất phần tử DOM (`getElementById`) và lắng nghe sự kiện (`addEventListener`) để thay đổi giao diện/nội dung ngay lập tức.

* **Prompt đã sử dụng:**

  > "Hãy đóng vai một chuyên gia Frontend. Tôi muốn thêm 2 tính năng tương tác vào trang Portfolio của mình bằng JavaScript:
  >
  > 1. **Light Switch:** Một nút bấm có id `toggle-btn`. Khi người dùng click, hãy dùng `classList.toggle` để thêm/xóa class `light-mode` cho thẻ body, đồng thời đổi nền body sang màu trắng và đổi chữ trên nút thành 'Đổi sang Nền Tối'.
  >
  > 2. **Live Input:** Một ô input có id `name-input` và thẻ span `name-display`. Khi người dùng gõ phím (sự kiện input), lập tức lấy giá trị đang gõ gán vào thẻ span. Nếu kết hợp thêm một nút bấm 'Chào tôi', hãy hiện `alert` kèm tên người dùng. 
  > 
  > Viết code theo chuẩn ES6."

* **Kết quả:** AI đã cung cấp logic chính xác, sử dụng đúng `e.target.value` cho sự kiện `input` và bắt được sự kiện `click` hoàn hảo để thay đổi CSS inline và class.

## 2. Thách thức "The Smart Project" (Modal Popup)

* **Mục tiêu:** Tạo một Hộp thoại (Modal) đăng ký thông tin hiện lên ghi đè lên giao diện hiện tại mà không làm tải lại trang (reload).

* **Prompt đã sử dụng:**

  > "Hãy giúp tôi hoàn thành Thách thức Tuần 10: 'The Smart Project'. 
  > 
  > 1. Cung cấp mã HTML cho một Modal form đăng ký (gồm input email và nút Gửi). Modal này mặc định bị ẩn (`display: none`) và bao phủ toàn màn hình với nền đen mờ.
  >
  > 2. Viết mã JS để: Mở modal khi bấm nút 'Mở Hộp Thoại', đóng modal khi bấm nút 'X', và đặc biệt: Đóng modal nếu người dùng click ra vùng nền đen bên ngoài form.
  > 
  > Lưu ý: Không dùng thư viện ngoài, chỉ dùng DOM thuần (Vanilla JS)."

* **Kết quả:** Code tạo ra hoạt động mượt mà. Kỹ thuật bắt sự kiện click ra ngoài (kiểm tra `e.target === modal`) được AI xử lý tinh tế và chuyên nghiệp.

## 3. Soạn thảo file giải trình Logic (AI Logic Explainer)

* **Mục tiêu:** Viết file `dom_interaction.md` để nộp kèm bài, giải thích rõ cách thức hoạt động của các sự kiện đã dùng.

* **Prompt đã sử dụng:**

  > "Hãy đóng vai Mentor giúp tôi viết file `dom_interaction.md` giải thích mã JS Tuần 10. Tập trung phân tích 2 loại sự kiện chính mà tôi vừa dùng là `click` (trong Light Switch, Modal) và `input` (trong Live Input). Giải thích rõ lợi ích của chúng đối với Trải nghiệm người dùng (UX) và việc không tải lại trang."

* **Kết quả:** File Markdown được trình bày rõ ràng, sử dụng đúng thuật ngữ chuyên ngành (DOM manipulation, event target, real-time feedback), thể hiện rõ việc hoàn thành các LLO của bài học.