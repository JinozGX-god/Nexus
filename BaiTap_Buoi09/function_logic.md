# GIẢI THÍCH LOGIC: TỰ ĐỘNG HÓA GIAO DIỆN VỚI HÀM VÀ VÒNG LẶP
**Dự án:** Portfolio - Thách thức Tuần 9 (The Smart Interface)
**Sinh viên:** Nguyễn Minh Anh

Thay vì code cứng (hard-code) từng thẻ `<article>` HTML cho danh sách dự án, em đã áp dụng tư duy "Don't Repeat Yourself" (DRY) bằng cách đóng gói mã nguồn vào hàm `renderProjects(dataArray, containerId)`.

**1. Khởi tạo mảng dữ liệu (Data Array)**
Em tạo một mảng `projectData` chứa các Đối tượng (Objects). Mỗi đối tượng lưu trữ thông tin của một dự án (badge, title, desc, img). Việc tách rời dữ liệu khỏi giao diện giúp sau này dễ dàng thêm, sửa, xóa dự án mà không cần chạm vào HTML.

**2. Truyền tham số vào Hàm (Parameters)**
Hàm `renderProjects` nhận vào 2 tham số:
* `dataArray`: Nguồn dữ liệu mảng sẽ được đưa vào máy xay (ở đây truyền vào `projectData`).
* `containerId`: ID của thẻ div trên HTML làm nơi chứa kết quả hiển thị (truyền vào `"dynamic-projects-container"`).

**3. Xử lý Vòng lặp For (Loop)**
* Bên trong hàm, em khai báo chuỗi `htmlString` rỗng. 
* Vòng lặp `for` sẽ chạy từ `i = 0` đến `i < dataArray.length`. 
* Ở mỗi lần lặp, vòng lặp rút trích dữ liệu của 1 dự án (`dataArray[i].title`, `dataArray[i].img`...) và bọc chúng vào một khuôn mẫu HTML (Template Literal), sau đó cộng dồn vào `htmlString`.
* Cuối cùng, dùng `innerHTML` đổ toàn bộ chuỗi HTML đã đóng gói ra ngoài giao diện một lần duy nhất, tối ưu hiệu suất trình duyệt.