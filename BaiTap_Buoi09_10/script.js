/**
 * ============================================================================
 * HỌC PHẦN: 111101 · THIẾT KẾ WEB · ĐẠI HỌC LẠC HỒNG (LHU)
 * BÀI TẬP KẾT HỢP BUỔI 09 & BUỔI 10: VÒNG LẶP, HÀM & TƯƠNG TÁC DOM
 * Sinh viên thực hiện: Mạc Thùy Thiên Ân - MSSV: 25AI111
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. TERMINAL SIMULATOR DEVTOOLS
// ----------------------------------------------------------------------------
const Terminal = {
  container: null,
  init() {
    this.container = document.getElementById("terminalOutput");
    this.log("system", "Nexus DevTools Lab (Buổi 09 & 10) đã kích hoạt.");
    this.log("system", "Sinh viên: Mạc Thùy Thiên Ân (25AI111) · LHU.");
    this.log("info", "Mở Console F12 của trình duyệt để xem log chi tiết đầy đủ!");
  },
  log(type, message) {
    if (!this.container) return;
    const line = document.createElement("div");
    line.className = "terminal-line";

    let prefix = ">";
    if (type === "system") prefix = "[SYS]";
    if (type === "error") prefix = "[ERR]";
    if (type === "warn") prefix = "[WARN]";

    line.innerHTML = `<span class="line-prefix">${prefix}</span><span class="line-output log-${type}">${message}</span>`;
    this.container.appendChild(line);
    this.container.scrollTop = this.container.scrollHeight;
  },
  clear() {
    if (this.container) {
      this.container.innerHTML = "";
      this.log("system", "Màn hình Terminal đã được làm sạch.");
    }
  }
};

// ----------------------------------------------------------------------------
// 2. CHUYỂN ĐỔI CHẾ ĐỘ HIỂN THỊ (BUỔI 09 / BUỔI 10 / TẤT CẢ)
// ----------------------------------------------------------------------------
function switchSessionView(session) {
  const b9Sec = document.getElementById("sec-buoi09");
  const b10Sec = document.getElementById("sec-buoi10");
  const tabBtns = document.querySelectorAll(".session-tab-btn");

  tabBtns.forEach(btn => btn.classList.remove("active"));

  if (session === "b9") {
    if (b9Sec) b9Sec.style.display = "block";
    if (b10Sec) b10Sec.style.display = "none";
    document.querySelector(".session-tab-btn.b9")?.classList.add("active");
    Terminal.log("info", "Đang chuyển sang chế độ: BUỔI 09 (Vòng lặp & Hàm)");
  } else if (session === "b10") {
    if (b9Sec) b9Sec.style.display = "none";
    if (b10Sec) b10Sec.style.display = "block";
    document.querySelector(".session-tab-btn.b10")?.classList.add("active");
    Terminal.log("info", "Đang chuyển sang chế độ: BUỔI 10 (Thao tác DOM & Sự kiện)");
  } else {
    if (b9Sec) b9Sec.style.display = "block";
    if (b10Sec) b10Sec.style.display = "block";
    document.querySelector(".session-tab-btn.all")?.classList.add("active");
    Terminal.log("info", "Đang hiển thị TẤT CẢ: Cả Buổi 09 và Buổi 10");
  }
}

// ============================================================================
// 3. LOGIC BUỔI 09: VÒNG LẶP & HÀM (LOOPS & FUNCTIONS)
// ============================================================================

/**
 * BUỔI 09 - HĐ1: The Counting Machine (Máy đếm tự động)
 * In 1 -> 100 trên Console & tùy chỉnh in số chẵn
 */
function runCountingMachine(mode) {
  console.clear();
  console.log("%c=== BUỔI 09: THE COUNTING MACHINE ===", "color: #38bdf8; font-weight: bold;");

  const outElem = document.getElementById("countingOutput");
  let numbers = [];

  if (mode === "all") {
    console.log("In dãy số từ 1 đến 100:");
    for (let i = 1; i <= 100; i++) {
      numbers.push(i);
    }
    console.log(numbers.join(", "));
    Terminal.log("success", `[HĐ1] Đếm từ 1 đến 100: ${numbers.slice(0, 15).join(", ")} ... ${numbers.slice(-5).join(", ")}`);
    if (outElem) outElem.textContent = numbers.join(", ");
  } else {
    console.log("In các số CHẴN từ 1 đến 100:");
    for (let i = 1; i <= 100; i++) {
      if (i % 2 === 0) {
        numbers.push(i);
      }
    }
    console.log(numbers.join(", "));
    Terminal.log("success", `[HĐ1] Các số chẵn từ 1 đến 100: ${numbers.slice(0, 15).join(", ")} ... ${numbers.slice(-5).join(", ")}`);
    if (outElem) outElem.textContent = numbers.join(", ");
  }
}

/**
 * BUỔI 09 - HĐ2: Function Factory (Nhà máy xử lý dữ liệu)
 * 1. Hàm tính diện tích chữ nhật
 */
function tinhDienTich(dai, rong) {
  return dai * rong;
}

function runFunctionFactoryDemo() {
  console.log("%c=== BUỔI 09: FUNCTION FACTORY DEMO ===", "color: #a855f7; font-weight: bold;");

  // Gọi hàm 3 lần với tham số khác nhau theo đúng yêu cầu đề bài
  const s1 = tinhDienTich(5, 3);
  const s2 = tinhDienTich(12, 7);
  const s3 = tinhDienTich(20, 15);

  console.log(`Lần 1: Dài 5, Rộng 3   => Diện tích: ${s1}`);
  console.log(`Lần 2: Dài 12, Rộng 7  => Diện tích: ${s2}`);
  console.log(`Lần 3: Dài 20, Rộng 15 => Diện tích: ${s3}`);

  Terminal.log("info", `[HĐ2] Gọi hàm tính diện tích 3 lần: (5,3) => ${s1} | (12,7) => ${s2} | (20,15) => ${s3}`);

  const outBox = document.getElementById("dtOutputBox");
  if (outBox) {
    outBox.innerHTML = `Lần 1 (5×3) = <strong>${s1}</strong> | Lần 2 (12×7) = <strong>${s2}</strong> | Lần 3 (20×15) = <strong>${s3}</strong>`;
  }
}

/**
 * BUỔI 09 - HĐ2 Prompt Mẫu: Chào người dùng và tính tuổi
 */
function chaoHoiVaTinhTuoi(ten, namSinh) {
  const namHienTai = 2026;
  const tuoi = namHienTai - namSinh;
  return `Chào ${ten}, bạn hiện tại ${tuoi} tuổi.`;
}

function runGreetingAgeDemo() {
  const tenInput = document.getElementById("ageNameInput")?.value || "Mạc Thùy Thiên Ân";
  const namInput = parseInt(document.getElementById("ageYearInput")?.value) || 2006;

  const loiChao = chaoHoiVaTinhTuoi(tenInput, namInput);
  console.log(`%c[HĐ2 Prompt Mẫu] ${loiChao}`, "color: #38bdf8; font-weight: bold;");
  Terminal.log("success", `[HĐ2] ${loiChao}`);

  const outElem = document.getElementById("greetingAgeOutput");
  if (outElem) outElem.textContent = loiChao;
}

/**
 * BUỔI 09 - HĐ3: Refactoring Challenge
 * Đóng gói hàm tính thuế thu nhập cá nhân có thể tái sử dụng
 */
function tinhThueThuNhap(luong) {
  if (isNaN(luong) || luong < 0) return { thue: 0, thucLinh: 0, tyLe: 0 };

  let thue = 0;
  let tyLe = 0;

  // Thuế suất mô phỏng đơn giản hóa theo các bậc thu nhập:
  // Dưới 11 triệu: 0%
  // 11 đến 20 triệu: 10% cho phần vượt 11 triệu
  // Trên 20 triệu: 20% cho phần vượt 20 triệu + 900k
  if (luong <= 11000000) {
    thue = 0;
    tyLe = 0;
  } else if (luong <= 20000000) {
    thue = (luong - 11000000) * 0.1;
    tyLe = 10;
  } else {
    thue = (9000000 * 0.1) + (luong - 20000000) * 0.2;
    tyLe = 20;
  }

  const thucLinh = luong - thue;
  const fmt = (n) => new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(n);

  return {
    luong,
    thue,
    thucLinh,
    tyLe,
    thueFmt: fmt(thue),
    thucLinhFmt: fmt(thucLinh)
  };
}

function runTaxRefactorDemo() {
  const input = document.getElementById("taxSalaryInput");
  const luong = parseFloat(input?.value.replace(/[^\d]/g, "") || "18000000");

  const res = tinhThueThuNhap(luong);
  console.log(`%c[HĐ3 Refactoring] Lương: ${res.luong} => Thuế: ${res.thueFmt} (Thực lĩnh: ${res.thucLinhFmt})`, "color: #34d399;");
  Terminal.log("info", `[HĐ3 Thuế] Thuế: ${res.thueFmt} | Thực lĩnh: ${res.thucLinhFmt}`);

  const out = document.getElementById("taxOutput");
  if (out) {
    out.innerHTML = `Thuế TNCN: <strong>${res.thueFmt}</strong> | Thực lĩnh: <strong>${res.thucLinhFmt}</strong>`;
  }
}

// ----------------------------------------------------------------------------
// 6 BÀI TẬP VỀ NHÀ BUỔI 09
// ----------------------------------------------------------------------------

// Bài 1: Bảng cửu chương 7
function inBangCuuChuong7() {
  console.log("%c=== BÀI 1: BẢNG CỬU CHƯƠNG 7 ===", "color: #facc15; font-weight: bold;");
  let arr = [];
  for (let i = 1; i <= 10; i++) {
    const dong = `7 x ${i} = ${7 * i}`;
    console.log(dong);
    arr.push(dong);
  }
  Terminal.log("success", `[B9 - Bài 1] Bảng cửu chương 7: 7x1=7 ... 7x10=70`);
  const out = document.getElementById("b9Hw1Output");
  if (out) out.innerHTML = arr.join("<br>");
}

// Bài 2: Tính tổng dãy số từ 1 đến n
function tinhTongDaySo(n) {
  if (isNaN(n) || n < 1) return 0;
  let tong = 0;
  for (let i = 1; i <= n; i++) {
    tong += i;
  }
  return tong;
}

function runB9Hw2() {
  const n = parseInt(document.getElementById("b9Hw2Input")?.value || "10");
  const tong = tinhTongDaySo(n);
  console.log(`[B9 - Bài 2] Tổng từ 1 đến ${n} là: ${tong}`);
  Terminal.log("info", `[B9 - Bài 2] Tổng 1..${n} = ${tong}`);
  const out = document.getElementById("b9Hw2Output");
  if (out) out.innerHTML = `Tổng từ 1 đến ${n} là: <strong>${tong}</strong>`;
}

// Bài 3: Kiểm tra số nguyên tố cơ bản
function kiemTraSoNguyenTo(n) {
  if (isNaN(n) || n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function runB9Hw3() {
  const n = parseInt(document.getElementById("b9Hw3Input")?.value || "17");
  const isPrime = kiemTraSoNguyenTo(n);
  const msg = isPrime ? `${n} là SỐ NGUYÊN TỐ.` : `${n} KHÔNG PHẢI là số nguyên tố.`;
  console.log(`[B9 - Bài 3] ${msg}`);
  Terminal.log(isPrime ? "success" : "warn", `[B9 - Bài 3] ${msg}`);
  const out = document.getElementById("b9Hw3Output");
  if (out) {
    out.className = `output-box ${isPrime ? "success" : "warning"}`;
    out.innerHTML = `<strong>${msg}</strong>`;
  }
}

// Bài 4: Máy tính cá nhân (so1, so2, phepTinh)
function mayTinh(so1, so2, phepTinh) {
  switch (phepTinh) {
    case "+": return so1 + so2;
    case "-": return so1 - so2;
    case "*": return so1 * so2;
    case "/": return so2 !== 0 ? (so1 / so2) : "Lỗi: Không thể chia cho 0";
    default: return "Phép tính không hợp lệ";
  }
}

function runB9Hw4() {
  const s1 = parseFloat(document.getElementById("b9Hw4Num1")?.value || "10");
  const s2 = parseFloat(document.getElementById("b9Hw4Num2")?.value || "2");
  const op = document.getElementById("b9Hw4Op")?.value || "+";

  const kq = mayTinh(s1, s2, op);
  console.log(`[B9 - Bài 4] ${s1} ${op} ${s2} = ${kq}`);
  Terminal.log("info", `[B9 - Bài 4] ${s1} ${op} ${s2} = ${kq}`);
  const out = document.getElementById("b9Hw4Output");
  if (out) out.innerHTML = `Kết quả: <strong>${kq}</strong>`;
}

// Bài 5: Tìm số lớn nhất trong 3 số (sử dụng if)
function timMax(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}

function runB9Hw5() {
  const a = parseFloat(document.getElementById("b9Hw5A")?.value || "15");
  const b = parseFloat(document.getElementById("b9Hw5B")?.value || "28");
  const c = parseFloat(document.getElementById("b9Hw5C")?.value || "9");

  const maxVal = timMax(a, b, c);
  console.log(`[B9 - Bài 5] timMax(${a}, ${b}, ${c}) => Số lớn nhất là: ${maxVal}`);
  Terminal.log("success", `[B9 - Bài 5] Max(${a}, ${b}, ${c}) = ${maxVal}`);
  const out = document.getElementById("b9Hw5Output");
  if (out) out.innerHTML = `Số lớn nhất trong 3 số là: <strong>${maxVal}</strong>`;
}

// Bài 6: Vòng lặp "Chào hỏi" mảng 5 thành viên
const TEAM_MEMBERS = [
  "Mạc Thùy Thiên Ân (25AI111)",
  "Lê Hoàng Phúc",
  "Trần Minh Anh",
  "Phạm Gia Huy",
  "Nguyễn Bảo Trâm"
];

function runB9Hw6() {
  console.log("%c=== BÀI 6: VÒNG LẶP CHÀO HỎI THÀNH VIÊN NHÓM ===", "color: #38bdf8; font-weight: bold;");
  let greetings = [];
  for (let i = 0; i < TEAM_MEMBERS.length; i++) {
    const chao = `Xin chào thành viên: ${TEAM_MEMBERS[i]}! Chúc bạn học tập tốt!`;
    console.log(chao);
    greetings.push(chao);
  }
  Terminal.log("info", `[B9 - Bài 6] Đã in lời chào cho cả 5 thành viên nhóm trên Console.`);
  const out = document.getElementById("b9Hw6Output");
  if (out) out.innerHTML = greetings.join("<br>");
}

// ============================================================================
// 4. LOGIC BUỔI 10: TƯƠNG TÁC DOM & SỰ KIỆN (DOM & EVENTS)
// ============================================================================

/**
 * BUỔI 10 - HĐ1: The Element Picker - Truy tìm thẻ bằng document.querySelector()
 */
function runElementPickerDemo() {
  console.log("%c=== BUỔI 10: THE ELEMENT PICKER ===", "color: #10b981; font-weight: bold;");

  // Tìm thẻ header, logo, và demo querySelector
  const brand = document.querySelector(".brand-link");
  const heroCard = document.querySelector(".hero-card");

  console.log("Tìm thẻ .brand-link:", brand);
  console.log("Tìm thẻ .hero-card:", heroCard);

  Terminal.log("info", `[B10 - HĐ1] querySelector('.brand-link') => Tìm thấy thẻ <a> với text "${brand?.textContent.trim()}"`);

  // Thử nghiệm Vibe Coding: chọn tất cả thẻ bên trong #menu và đổi màu chữ sang đỏ
  const menuDemo = document.getElementById("vibeMenuDemo");
  if (menuDemo) {
    const links = menuDemo.querySelectorAll("a");
    links.forEach(a => {
      a.style.color = "#ef4444";
      a.style.fontWeight = "bold";
    });
    Terminal.log("success", "[B10 - Vibe Coding] Đã dùng document.querySelectorAll('#menu a') và đổi màu sang ĐỎ!");
  }
}

/**
 * BUỔI 10 - HĐ2: Light Switch (Bật / Tắt bóng đèn & Đổi màu Dark/Light Mode)
 */
let isLightOn = false;

function toggleLightSwitch() {
  isLightOn = !isLightOn;
  const lamp = document.getElementById("lampIcon");
  const statusTxt = document.getElementById("lampStatus");
  const btn = document.getElementById("lightSwitchBtn");

  if (isLightOn) {
    if (lamp) lamp.className = "fa-solid fa-lightbulb lamp-graphic is-lit";
    if (statusTxt) {
      statusTxt.textContent = "ĐÈN ĐANG BẬT (ON)";
      statusTxt.style.color = "#facc15";
    }
    if (btn) btn.innerHTML = '<i class="fa-solid fa-power-off"></i> Tắt Đèn';
    Terminal.log("warn", "[B10 - HĐ2] Trạng thái đèn: BẬT SÁNG (ON)");
  } else {
    if (lamp) lamp.className = "fa-regular fa-lightbulb lamp-graphic";
    if (statusTxt) {
      statusTxt.textContent = "ĐÈN ĐANG TẮT (OFF)";
      statusTxt.style.color = "#94a3b8";
    }
    if (btn) btn.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Bật Đèn';
    Terminal.log("info", "[B10 - HĐ2] Trạng thái đèn: TẮT (OFF)");
  }
}

/**
 * Prompt Mẫu Buổi 10 HĐ2: Toggle Dark Mode / Light Mode cho body
 */
function toggleDarkMode() {
  document.body.classList.toggle("light-theme");
  const isLight = document.body.classList.contains("light-theme");
  const btn = document.getElementById("toggle-btn");

  if (btn) {
    btn.innerHTML = isLight
      ? '<i class="fa-solid fa-moon"></i> Chuyển sang Dark Mode'
      : '<i class="fa-solid fa-sun"></i> Chuyển sang Light Mode';
  }

  Terminal.log("system", `[B10 Prompt Mẫu] Giao diện chuyển sang: ${isLight ? "LIGHT MODE" : "DARK MODE"}`);
}

/**
 * BUỔI 10 - HĐ3: Live Input - Phản hồi tức thì với sự kiện 'input'
 */
function initLiveInputDemo() {
  const textInput = document.getElementById("liveTextInput");
  const spanTarget = document.getElementById("liveSpanTarget");
  const h2Target = document.getElementById("liveH2Target");

  if (textInput) {
    textInput.addEventListener("input", (e) => {
      const val = e.target.value;
      if (spanTarget) spanTarget.textContent = val ? `(${val})` : "";
      if (h2Target) h2Target.textContent = val || "Nội dung sẽ xuất hiện tức thì tại đây...";
    });
  }
}

// ----------------------------------------------------------------------------
// 6 BÀI TẬP VỀ NHÀ BUỔI 10
// ----------------------------------------------------------------------------

// Bài 1: Thay đổi lời chào theo tên (hiển thị DOM thay vì alert)
function runB10Hw1() {
  const input = document.getElementById("b10Hw1Input");
  const name = input?.value.trim() || "Thiên Ân";
  const out = document.getElementById("b10Hw1Output");
  if (out) {
    out.className = "output-box success";
    out.innerHTML = `🎉 <strong>Chào mừng ${name}!</strong> Chúc bạn một ngày tràn đầy năng lượng!`;
  }
  Terminal.log("success", `[B10 - Bài 1] Chào mừng ${name}! (Hiển thị trực tiếp trên DOM)`);
}

// Bài 2: Bộ sưu tập ảnh (Simple Gallery)
function selectGalleryImage(src, thumbElem) {
  const mainImg = document.getElementById("mainGalleryImg");
  if (mainImg) {
    mainImg.src = src;
    mainImg.style.opacity = "0.4";
    setTimeout(() => {
      mainImg.style.opacity = "1";
    }, 150);
  }

  document.querySelectorAll(".gallery-thumb").forEach(t => t.classList.remove("active"));
  if (thumbElem) thumbElem.classList.add("active");

  Terminal.log("info", `[B10 - Bài 2] Đã chọn ảnh: ${src}`);
}

// Bài 3: Danh sách việc cần làm (To-Do List cơ bản)
function addTodoItem() {
  const input = document.getElementById("todoInput");
  const taskText = input?.value.trim();
  if (!taskText) return;

  const list = document.getElementById("todoList");
  if (list) {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = `
      <span onclick="this.parentElement.classList.toggle('done')">${taskText}</span>
      <button type="button" class="btn-remove-todo" onclick="this.parentElement.remove()" title="Xóa">
        <i class="fa-solid fa-trash"></i>
      </button>
    `;
    list.appendChild(li);
    input.value = "";
    Terminal.log("success", `[B10 - Bài 3] Đã thêm việc: "${taskText}"`);
  }
}

// Bài 4: Kiểm tra độ dài mật khẩu (< 8 ký tự đỏ, >= 8 ký tự xanh)
function initPasswordLengthCheck() {
  const passInput = document.getElementById("b10PassLengthInput");
  const msgElem = document.getElementById("b10PassLengthMsg");

  if (passInput && msgElem) {
    passInput.addEventListener("input", (e) => {
      const len = e.target.value.length;
      if (len === 0) {
        msgElem.textContent = "Vui lòng nhập mật khẩu để kiểm tra...";
        msgElem.className = "output-box";
      } else if (len < 8) {
        msgElem.textContent = `⚠️ Mật khẩu quá ngắn (${len}/8 ký tự). Cần tối thiểu 8 ký tự!`;
        msgElem.className = "output-box error";
      } else {
        msgElem.textContent = `✅ Mật khẩu hợp lệ (${len} ký tự). Đạt tiêu chuẩn an toàn!`;
        msgElem.className = "output-box success";
      }
    });
  }
}

// Bài 5: Thay đổi kích thước văn bản (+2px / -2px)
let currentTextSize = 16;

function resizeText(delta) {
  currentTextSize += delta;
  if (currentTextSize < 10) currentTextSize = 10;
  if (currentTextSize > 32) currentTextSize = 32;

  const box = document.getElementById("resizerTarget");
  const numSpan = document.getElementById("currentSizeSpan");

  if (box) box.style.fontSize = `${currentTextSize}px`;
  if (numSpan) numSpan.textContent = `${currentTextSize}px`;

  Terminal.log("info", `[B10 - Bài 5] Kích thước chữ: ${currentTextSize}px`);
}

// Bài 6: Ẩn / Hiện mật khẩu (type="password" <-> type="text")
function togglePasswordVisibility() {
  const passField = document.getElementById("b10TogglePassInput");
  const btn = document.getElementById("b10TogglePassBtn");

  if (passField && btn) {
    if (passField.type === "password") {
      passField.type = "text";
      btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i> Ẩn';
      Terminal.log("info", "[B10 - Bài 6] Mật khẩu đang HIỂN THỊ");
    } else {
      passField.type = "password";
      btn.innerHTML = '<i class="fa-solid fa-eye"></i> Hiện';
      Terminal.log("info", "[B10 - Bài 6] Mật khẩu đã được ẨN");
    }
  }
}

// ----------------------------------------------------------------------------
// 5. KHỞI TẠO DOM CONTENT LOADED
// ----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Khởi tạo Terminal Simulator
  Terminal.init();

  // Khởi tạo Live Input & Password Length
  initLiveInputDemo();
  initPasswordLengthCheck();

  // Chạy mẫu một số hàm Buổi 09
  runFunctionFactoryDemo();
  inBangCuuChuong7();
  runB9Hw6();

  // Xử lý ô gõ lệnh Terminal trên trang web
  const termInput = document.getElementById("termCommandInput");
  if (termInput) {
    termInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const cmd = termInput.value.trim();
        if (!cmd) return;
        Terminal.log("info", `<span style="color:#facc15;">&gt; ${cmd}</span>`);
        try {
          const evalResult = eval(cmd);
          Terminal.log("success", `&lt; ${evalResult}`);
          console.log(`[Terminal Shell]`, evalResult);
        } catch (err) {
          Terminal.log("error", `Error: ${err.message}`);
          console.error(`[Terminal Shell Error]`, err);
        }
        termInput.value = "";
      }
    });
  }

  console.log("%c[READY] Mọi hoạt động Buổi 09 & 10 đã sẵn sàng!", "color: #10b981; font-weight: bold;");
});
