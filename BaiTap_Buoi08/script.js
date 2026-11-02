/**
 * ============================================================================
 * HỌC PHẦN: 111101 · THIẾT KẾ WEB · ĐẠI HỌC LẠC HỒNG (LHU)
 * BÀI TẬP BUỔI 08: NHẬP MÔN JAVASCRIPT, BROWSER CONSOLE & LOGIC BUILDER
 * Sinh viên thực hiện: Mạc Thùy Thiên Ân - MSSV: 25AI111
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. KHỞI TẠO HẰNG SỐ & BẢNG THÔNG TIN SINH VIÊN
// ----------------------------------------------------------------------------
const STUDENT_INFO = {
  hoTen: "Mạc Thùy Thiên Ân",
  mssv: "25AI111",
  lop: "25AI111",
  coSo: "Đại học Lạc Hồng (LHU)",
  hocPhan: "111101 · Thiết Kế Web",
  buoiHoc: "Buổi 08 - Nhập Môn JS, Console & Logic Builder"
};

// ----------------------------------------------------------------------------
// 2. BỘ GIẢ LẬP CONSOLE TRÊN TRANG (DEVTOOLS TERMINAL SIMULATOR)
// ----------------------------------------------------------------------------
const Terminal = {
  container: null,
  init() {
    this.container = document.getElementById("terminalOutput");
    this.log("system", "Nexus DevTools Terminal v2.5 initialized.");
    this.log("system", `Chào mừng sinh viên: ${STUDENT_INFO.hoTen} (${STUDENT_INFO.mssv})`);
    this.log("system", "Nhấn F12 để mở DevTools Console gốc của trình duyệt.");
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
      this.log("system", "Terminal screen cleared.");
    }
  }
};

// ----------------------------------------------------------------------------
// 3. HOẠT ĐỘNG 1: "HELLO JS CONSOLE" - ĐỐI THOẠI VỚI TRÌNH DUYỆT (30 PHÚT)
// ----------------------------------------------------------------------------
function runHoatDong1() {
  console.clear();
  console.log(
    "%c=======================================================",
    "color: #38bdf8; font-weight: bold;"
  );
  console.log(
    "%c   BÀI TẬP BUỔI 08 - HOẠT ĐỘNG 1: HELLO JS CONSOLE     ",
    "background: #0284c7; color: #fff; font-weight: bold; padding: 4px 8px; border-radius: 4px;"
  );
  console.log(
    "%c=======================================================",
    "color: #38bdf8; font-weight: bold;"
  );

  // 1. Khai báo Tên và Tuổi
  const tenSinhVien = STUDENT_INFO.hoTen;
  const tuoiSinhVien = 20;

  console.log(`%cHọ và tên: %c${tenSinhVien}`, "color: #94a3b8;", "color: #38bdf8; font-weight: bold;");
  console.log(`%cTuổi: %c${tuoiSinhVien}`, "color: #94a3b8;", "color: #38bdf8; font-weight: bold;");

  // 2. Khai báo hai số toán học
  const a = 15;
  const b = 4;

  const tong = a + b;
  const hieu = a - b;
  const tich = a * b;
  const thuong = a / b;
  const chiaDu = a % b;

  console.log("%c--- CÁC PHÉP TOÁN CƠ BẢN VỚI a = 15, b = 4 ---", "color: #facc15; font-weight: bold;");
  console.log(`Phép cộng (a + b)     = ${a} + ${b} = ${tong}`);
  console.log(`Phép trừ (a - b)      = ${a} - ${b} = ${hieu}`);
  console.log(`Phép nhân (a * b)     = ${a} * ${b} = ${tich}`);
  console.log(`Phép chia (a / b)     = ${a} / ${b} = ${thuong}`);
  console.log(`Chia lấy dư (a % b)   = ${a} % ${b} = ${chiaDu}`);

  console.table([
    { "Phép toán": "Cộng (+)", "Biểu thức": `${a} + ${b}`, "Kết quả": tong },
    { "Phép toán": "Trừ (-)", "Biểu thức": `${a} - ${b}`, "Kết quả": hieu },
    { "Phép toán": "Nhân (*)", "Biểu thức": `${a} * ${b}`, "Kết quả": tich },
    { "Phép toán": "Chia (/)", "Biểu thức": `${a} / ${b}`, "Kết quả": thuong },
    { "Phép toán": "Chia dư (%)", "Biểu thức": `${a} % ${b}`, "Kết quả": chiaDu }
  ]);

  // Đồng bộ ra Terminal mô phỏng trên trang web
  Terminal.log("info", `[HĐ1] Họ tên: ${tenSinhVien} | Tuổi: ${tuoiSinhVien}`);
  Terminal.log("success", `[HĐ1] Các phép tính: Cộng=${tong}, Trừ=${hieu}, Nhân=${tich}, Chia=${thuong}, Chia dư=${chiaDu}`);
}

/**
 * Thử nghiệm Vibe Coding: '10' + 20 trong JavaScript
 */
function testTypeCoercion() {
  const resultString = "10" + 20;
  const resultNumber = Number("10") + 20;

  console.log("%c--- VIBE CODING: TẠI SAO '10' + 20 LẠI RA '1020'? ---", "color: #a855f7; font-weight: bold;");
  console.log(`Biểu thức: "10" + 20  => Kiểu: ${typeof resultString} | Kết quả: "${resultString}"`);
  console.log(`Biểu thức: Number("10") + 20 => Kiểu: ${typeof resultNumber} | Kết quả: ${resultNumber}`);

  Terminal.log("warn", `[Vibe Coding] '10' + 20 = "${resultString}" (Nối chuỗi - String Concatenation)`);
  Terminal.log("success", `[Vibe Coding Sửa lỗi] Number('10') + 20 = ${resultNumber} (Phép cộng số học)`);
}

// ----------------------------------------------------------------------------
// 4. HOẠT ĐỘNG 2: "LOGIC BUILDER" - MÁY TÍNH MINI & PHÂN LOẠI ĐIỂM (45 PHÚT)
// ----------------------------------------------------------------------------

/**
 * Hàm phân loại điểm học tập
 * Logic theo Prompt mẫu:
 * Giỏi: điểm > 8
 * Khá: điểm > 6.5
 * Trung bình: điểm >= 5
 * Yếu: điểm < 5
 */
function classifyScore(score) {
  if (isNaN(score) || score < 0 || score > 10) {
    return {
      isValid: false,
      grade: "Không hợp lệ",
      message: "Vui lòng nhập điểm số từ 0.0 đến 10.0!",
      cssClass: "grade-yeu",
      isPassed: false
    };
  }

  let grade = "";
  let message = "";
  let cssClass = "";
  let isPassed = score >= 5;

  if (score > 8) {
    grade = "Giỏi (Grade A)";
    message = "Chúc mừng bạn đã đạt loại Giỏi! Thành tích xuất sắc!";
    cssClass = "grade-gioi";
  } else if (score > 6.5) {
    grade = "Khá (Grade B)";
    message = "Chúc mừng bạn đã đạt loại Khá! Kết quả rất tốt!";
    cssClass = "grade-kha";
  } else if (score >= 5) {
    grade = "Trung bình (Grade C)";
    message = "Chúc mừng bạn đã đạt yêu cầu học phần!";
    cssClass = "grade-tb";
  } else {
    grade = "Yếu (Grade D/F)";
    message = "Rất tiếc, hãy cố gắng hơn ở các bài tập tiếp theo!";
    cssClass = "grade-yeu";
  }

  return { isValid: true, grade, message, cssClass, isPassed };
}

/**
 * Chạy Hoạt động 2 bằng prompt() & alert() chuẩn theo giáo trình
 */
function runHoatDong2Prompt() {
  const input = prompt("Nhập số điểm của bạn (thang điểm 10):", "8.5");
  if (input === null) return; // Người dùng ấn Hủy (Cancel)

  const score = parseFloat(input.trim());
  const res = classifyScore(score);

  if (!res.isValid) {
    alert(res.message);
    Terminal.log("error", `[HĐ2 Prompt] Điểm "${input}" không hợp lệ.`);
    return;
  }

  // Thông báo theo chuẩn giáo trình Lạc Hồng:
  // "Nếu điểm >= 5 thì hiện 'Chúc mừng bạn đã đạt!', ngược lại hiện 'Rất tiếc, hãy cố gắng hơn!'"
  // Kết hợp Xếp loại theo prompt mẫu: Giỏi (>8), Khá (>6.5), Trung bình (>=5), Yếu (<5).
  const alertText = `${res.isPassed ? "🎉 Chúc mừng bạn đã đạt!" : "⚠️ Rất tiếc, hãy cố gắng hơn!"}\n\n` +
                    `Điểm của bạn: ${score.toFixed(1)} / 10\n` +
                    `Xếp loại: ${res.grade}\n` +
                    `Đánh giá: ${res.message}`;

  alert(alertText);

  console.log(`%c[HĐ2 Logic Builder] Điểm: ${score} -> ${res.grade} | ${res.message}`, "color: #38bdf8; font-weight: bold;");
  Terminal.log("info", `[HĐ2] Điểm: ${score.toFixed(1)} -> Xếp loại: ${res.grade}`);

  // Cập nhật lên UI Realtime
  updateLogicBuilderUI(score);
}

/**
 * Cập nhật giao diện Trực quan Hoạt động 2
 */
function updateLogicBuilderUI(score) {
  const numInput = document.getElementById("scoreInput");
  const slider = document.getElementById("scoreSlider");
  const gradeTitle = document.getElementById("gradeTitle");
  const gradeDesc = document.getElementById("gradeDesc");
  const meterNum = document.getElementById("meterNum");
  const iconBox = document.getElementById("gradeIconBox");

  if (numInput && numInput.value != score) numInput.value = score;
  if (slider && slider.value != score) slider.value = score;
  if (meterNum) meterNum.textContent = Number(score).toFixed(1);

  const res = classifyScore(score);

  if (gradeTitle) gradeTitle.textContent = res.grade;
  if (gradeDesc) gradeDesc.textContent = res.message;

  if (iconBox) {
    iconBox.className = `result-icon-box ${res.cssClass}`;
    if (res.cssClass === "grade-gioi") iconBox.innerHTML = '<i class="fa-solid fa-trophy"></i>';
    else if (res.cssClass === "grade-kha") iconBox.innerHTML = '<i class="fa-solid fa-star"></i>';
    else if (res.cssClass === "grade-tb") iconBox.innerHTML = '<i class="fa-solid fa-check"></i>';
    else iconBox.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>';
  }
}

// ----------------------------------------------------------------------------
// 5. HOẠT ĐỘNG 3: "AI LOGIC EXPLAINER" (30 PHÚT)
// ----------------------------------------------------------------------------
function switchExplainerTab(tabId) {
  const tabs = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".explainer-panel");

  tabs.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });

  panels.forEach(panel => {
    panel.classList.toggle("active", panel.id === `panel-${tabId}`);
  });
}

function runExplainerSnippet(caseId) {
  console.log(`%c--- AI LOGIC EXPLAINER: CASE ${caseId} ---`, "color: #a855f7; font-weight: bold;");
  if (caseId === "hoisting") {
    Terminal.log("info", "[AI Explainer - Case 1: Hoisting]");
    Terminal.log("warn", "var x; // x được nâng lên đầu phạm vi và có giá trị undefined");
    Terminal.log("error", "let y; // nằm trong Temporal Dead Zone (TDZ), truy cập sớm sẽ ném ReferenceError");
  } else if (caseId === "equality") {
    const result = ([] == ![]);
    Terminal.log("info", `[AI Explainer - Case 2: Equality] [] == ![] => Kết quả là: ${result}`);
    Terminal.log("system", "Giải mã: ![] thành false -> [] == false -> '' == 0 -> 0 == 0 -> true");
  } else if (caseId === "float") {
    const sum = 0.1 + 0.2;
    const isExact = (sum === 0.3);
    Terminal.log("info", `[AI Explainer - Case 3: Float] 0.1 + 0.2 = ${sum}`);
    Terminal.log("warn", `0.1 + 0.2 === 0.3 => ${isExact} (Chuẩn IEEE 754 dấu phẩy động)`);
  } else if (caseId === "closure") {
    Terminal.log("info", "[AI Explainer - Case 4: Scope Loop]");
    Terminal.log("warn", "Vòng lặp var i dùng chung 1 biến toàn cục/hàm. Khi setTimeout chạy, i đã là 4.");
    Terminal.log("success", "Khắc phục: Dùng 'let i' để mỗi vòng lặp tạo ra một Block Scope độc lập!");
  }
}

// ----------------------------------------------------------------------------
// 6. 6 BÀI TẬP TỰ RÈN LUYỆN TẠI NHÀ (HOMEWORK)
// ----------------------------------------------------------------------------

/**
 * BÀI 1: Chuyển đổi tiền tệ đơn giản (USD -> VND)
 * Tỉ giá: 25.000 VNĐ / 1 USD. Kết quả in ra console.
 */
function chuyenDoiTienTe(usd) {
  const TI_GIA = 25000;
  if (isNaN(usd) || usd < 0) {
    return { isValid: false, message: "Số tiền USD không hợp lệ!" };
  }
  const vnd = usd * TI_GIA;
  const vndFormatted = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND"
  }).format(vnd);

  return { isValid: true, usd, vnd, vndFormatted };
}

function runBai1Prompt() {
  const input = prompt("BÀI 1: Nhập số lượng USD cần chuyển đổi (Tỉ giá 25.000):", "100");
  if (input === null) return;
  const usd = parseFloat(input);
  const res = chuyenDoiTienTe(usd);

  if (!res.isValid) {
    alert(res.message);
    return;
  }

  // In ra console theo đúng yêu cầu đề bài
  console.log(`%c[BÀI 1 - Đổi tiền] ${res.usd} USD = ${res.vnd} VND (${res.vndFormatted})`, "color: #34d399; font-weight: bold;");
  Terminal.log("success", `[BÀI 1] $${res.usd} USD = ${res.vndFormatted}`);
  alert(`Kết quả quy đổi:\n$${res.usd} USD = ${res.vndFormatted}`);

  // Cập nhật UI
  const usdInput = document.getElementById("hw1UsdInput");
  const outputBox = document.getElementById("hw1Output");
  if (usdInput) usdInput.value = usd;
  if (outputBox) outputBox.innerHTML = `<strong>${res.vndFormatted}</strong> (Tỉ giá: 25.000 VNĐ)`;
}

function calculateBai1UI() {
  const usdInput = document.getElementById("hw1UsdInput");
  const outputBox = document.getElementById("hw1Output");
  if (!usdInput || !outputBox) return;

  const usd = parseFloat(usdInput.value);
  const res = chuyenDoiTienTe(usd);

  if (!res.isValid) {
    outputBox.className = "hw-output-box error";
    outputBox.textContent = res.message;
    return;
  }

  console.log(`[BÀI 1 UI] ${res.usd} USD = ${res.vnd} VND`);
  Terminal.log("info", `[BÀI 1] Chuyển đổi: $${res.usd} USD = ${res.vndFormatted}`);
  outputBox.className = "hw-output-box success";
  outputBox.innerHTML = `<strong>${res.vndFormatted}</strong> (Tỉ giá 25.000 ₫/USD)`;
}

/**
 * BÀI 2: Kiểm tra số chẵn / lẻ
 * Nhập một số bất kỳ, thông báo cho người dùng biết đó là số chẵn hay số lẻ.
 */
function kiemTraChanLe(num) {
  if (isNaN(num)) {
    return { isValid: false, message: "Dữ liệu nhập vào không phải là một số!" };
  }
  // Kiểm tra số nguyên
  if (!Number.isInteger(num)) {
    const isEven = Math.floor(num) % 2 === 0;
    return {
      isValid: true,
      num,
      isInteger: false,
      isEven,
      message: `${num} là số thập phân (phần nguyên ${Math.floor(num)} là số ${isEven ? "chẵn" : "lẻ"}).`
    };
  }

  const isEven = (num % 2 === 0);
  return {
    isValid: true,
    num,
    isInteger: true,
    isEven,
    message: `${num} là số ${isEven ? "CHẴN" : "LẺ"}.`
  };
}

function runBai2Prompt() {
  const input = prompt("BÀI 2: Nhập một số bất kỳ từ bàn phím:", "42");
  if (input === null) return;
  const num = Number(input.trim());
  const res = kiemTraChanLe(num);

  if (!res.isValid) {
    alert(res.message);
    return;
  }

  alert(`Thông báo: ${res.message}`);
  console.log(`%c[BÀI 2 - Chẵn/Lẻ] ${res.message}`, "color: #38bdf8; font-weight: bold;");
  Terminal.log("info", `[BÀI 2] ${res.message}`);

  // Cập nhật UI
  const numInput = document.getElementById("hw2NumInput");
  const outputBox = document.getElementById("hw2Output");
  if (numInput) numInput.value = num;
  if (outputBox) {
    outputBox.className = `hw-output-box ${res.isEven ? "success" : "warning"}`;
    outputBox.innerHTML = `<strong>${res.message}</strong>`;
  }
}

function calculateBai2UI() {
  const numInput = document.getElementById("hw2NumInput");
  const outputBox = document.getElementById("hw2Output");
  if (!numInput || !outputBox) return;

  const num = Number(numInput.value.trim());
  const res = kiemTraChanLe(num);

  if (!res.isValid) {
    outputBox.className = "hw-output-box error";
    outputBox.textContent = res.message;
    return;
  }

  Terminal.log("info", `[BÀI 2 UI] ${res.message}`);
  outputBox.className = `hw-output-box ${res.isEven ? "success" : "warning"}`;
  outputBox.innerHTML = `<strong>${res.message}</strong>`;
}

/**
 * BÀI 3: Tính chỉ số BMI cơ bản
 * BMI = cân nặng / (chiều cao * chiều cao). Chiều cao tính bằng mét, cân nặng bằng kg.
 */
function tinhBMI(chieuCao, canNang) {
  if (isNaN(chieuCao) || isNaN(canNang) || chieuCao <= 0 || canNang <= 0) {
    return { isValid: false, message: "Chiều cao và cân nặng phải là số dương lớn hơn 0!" };
  }

  // Tự động nhận diện nếu người dùng lỡ nhập chiều cao tính bằng cm (ví dụ 165 thay vì 1.65)
  let h = chieuCao;
  if (h > 3) h = h / 100;

  const bmi = canNang / (h * h);
  let status = "";
  let advice = "";
  let cssClass = "";

  if (bmi < 18.5) {
    status = "Gầy (Underweight)";
    advice = "Bạn cần tăng cường thêm chế độ dinh dưỡng và nghỉ ngơi hợp lý.";
    cssClass = "warning";
  } else if (bmi < 24.9) {
    status = "Bình thường (Normal weight)";
    advice = "Tuyệt vời! Thể trạng của bạn đang ở mức rất lý tưởng và cân đối.";
    cssClass = "success";
  } else if (bmi < 29.9) {
    status = "Thừa cân (Overweight)";
    advice = "Nên tăng cường tập thể dục và kiểm soát năng lượng nạp vào.";
    cssClass = "warning";
  } else {
    status = "Béo phì (Obese)";
    advice = "Cần có chế độ giảm cân và luyện tập khoa học dưới sự hướng dẫn y tế.";
    cssClass = "error";
  }

  return {
    isValid: true,
    chieuCao: h,
    canNang,
    bmi: bmi.toFixed(2),
    status,
    advice,
    cssClass
  };
}

function runBai3Prompt() {
  const hInput = prompt("BÀI 3: Nhập chiều cao của bạn theo mét (Ví dụ: 1.68):", "1.68");
  if (hInput === null) return;
  const wInput = prompt("BÀI 3: Nhập cân nặng của bạn theo kg (Ví dụ: 58):", "58");
  if (wInput === null) return;

  const res = tinhBMI(parseFloat(hInput), parseFloat(wInput));
  if (!res.isValid) {
    alert(res.message);
    return;
  }

  // In ra console theo đúng yêu cầu đề bài
  console.log(`%c[BÀI 3 - BMI] Chiều cao: ${res.chieuCao}m | Cân nặng: ${res.canNang}kg | BMI = ${res.bmi} -> ${res.status}`, "color: #38bdf8; font-weight: bold;");
  Terminal.log("info", `[BÀI 3] BMI: ${res.bmi} (${res.status})`);

  alert(`KẾT QUẢ TÍNH CHỈ SỐ BMI:\n` +
        `- Chiều cao: ${res.chieuCao} m\n` +
        `- Cân nặng: ${res.canNang} kg\n` +
        `- Chỉ số BMI: ${res.bmi}\n` +
        `- Phân loại: ${res.status}\n` +
        `- Lời khuyên: ${res.advice}`);

  // Cập nhật UI
  const hElem = document.getElementById("hw3HeightInput");
  const wElem = document.getElementById("hw3WeightInput");
  const outElem = document.getElementById("hw3Output");
  if (hElem) hElem.value = res.chieuCao;
  if (wElem) wElem.value = res.canNang;
  if (outElem) {
    outElem.className = `hw-output-box ${res.cssClass}`;
    outElem.innerHTML = `<strong>BMI: ${res.bmi}</strong> - ${res.status}<br><small>${res.advice}</small>`;
  }
}

function calculateBai3UI() {
  const hElem = document.getElementById("hw3HeightInput");
  const wElem = document.getElementById("hw3WeightInput");
  const outElem = document.getElementById("hw3Output");
  if (!hElem || !wElem || !outElem) return;

  const res = tinhBMI(parseFloat(hElem.value), parseFloat(wElem.value));
  if (!res.isValid) {
    outElem.className = "hw-output-box error";
    outElem.textContent = res.message;
    return;
  }

  console.log(`[BÀI 3 UI] BMI: ${res.bmi} (${res.status})`);
  Terminal.log("info", `[BÀI 3] BMI: ${res.bmi} - ${res.status}`);
  outElem.className = `hw-output-box ${res.cssClass}`;
  outElem.innerHTML = `<strong>BMI: ${res.bmi}</strong> - ${res.status}<br><small>${res.advice}</small>`;
}

/**
 * BÀI 4: Logic Đăng nhập (Mô phỏng)
 * 2 biến username và password cố định.
 * Đúng cả 2 -> "Đăng nhập thành công"
 * Sai 1 trong 2 -> "Thông tin không chính xác"
 */
const AUTH_CONFIG = {
  fixedUser: "thienan",
  fixedPass: "25AI111",
  adminUser: "admin",
  adminPass: "123456"
};

function xacThucDangNhap(user, pass) {
  const u = (user || "").trim().toLowerCase();
  const p = (pass || "").trim();

  // Kiểm tra tài khoản sinh viên hoặc admin dự phòng
  const isStudentValid = (u === AUTH_CONFIG.fixedUser && p === AUTH_CONFIG.fixedPass);
  const isAdminValid = (u === AUTH_CONFIG.adminUser && p === AUTH_CONFIG.adminPass);

  if (isStudentValid || isAdminValid) {
    return {
      isSuccess: true,
      message: "Đăng nhập thành công",
      user: u
    };
  } else {
    return {
      isSuccess: false,
      message: "Thông tin không chính xác"
    };
  }
}

function runBai4Prompt() {
  const uInput = prompt("BÀI 4: Nhập Username (Gợi ý: 'thienan' hoặc 'admin'):", "thienan");
  if (uInput === null) return;
  const pInput = prompt("BÀI 4: Nhập Password (Gợi ý: '25AI111' hoặc '123456'):", "25AI111");
  if (pInput === null) return;

  const res = xacThucDangNhap(uInput, pInput);

  // Alert thông báo đúng theo câu chữ yêu cầu đề bài
  alert(res.message);

  if (res.isSuccess) {
    console.log(`%c[BÀI 4 - Đăng nhập] Thành công với tài khoản: ${res.user}`, "color: #34d399; font-weight: bold;");
    Terminal.log("success", `[BÀI 4] ${res.message} (User: ${res.user})`);
  } else {
    console.warn(`[BÀI 4 - Đăng nhập] Thất bại: ${res.message}`);
    Terminal.log("error", `[BÀI 4] ${res.message}`);
  }

  // Cập nhật UI
  const uElem = document.getElementById("hw4UserInput");
  const pElem = document.getElementById("hw4PassInput");
  const outElem = document.getElementById("hw4Output");
  if (uElem) uElem.value = uInput;
  if (pElem) pElem.value = pInput;
  if (outElem) {
    outElem.className = `hw-output-box ${res.isSuccess ? "success" : "error"}`;
    outElem.innerHTML = `<strong>${res.message}</strong>`;
  }
}

function calculateBai4UI() {
  const uElem = document.getElementById("hw4UserInput");
  const pElem = document.getElementById("hw4PassInput");
  const outElem = document.getElementById("hw4Output");
  if (!uElem || !pElem || !outElem) return;

  const res = xacThucDangNhap(uElem.value, pElem.value);
  outElem.className = `hw-output-box ${res.isSuccess ? "success" : "error"}`;
  outElem.innerHTML = `<strong>${res.message}</strong>`;

  if (res.isSuccess) {
    Terminal.log("success", `[BÀI 4 UI] Đăng nhập thành công! User: ${uElem.value}`);
  } else {
    Terminal.log("warn", `[BÀI 4 UI] Đăng nhập thất bại: ${res.message}`);
  }
}

/**
 * BÀI 5: Máy tính giảm giá (Discount Calculator)
 * Hóa đơn > 500.000đ thì giảm 10%, ngược lại không giảm.
 * Tính số tiền cuối cùng phải trả.
 */
function tinhGiamGia(soTien) {
  if (isNaN(soTien) || soTien < 0) {
    return { isValid: false, message: "Số tiền hóa đơn không hợp lệ!" };
  }

  const NGUONG_GIAM_GIA = 500000;
  const TY_LE_GIAM = 0.1; // 10%

  let tyLe = 0;
  let tienGiam = 0;
  let phaiTra = soTien;

  if (soTien > NGUONG_GIAM_GIA) {
    tyLe = 10;
    tienGiam = soTien * TY_LE_GIAM;
    phaiTra = soTien - tienGiam;
  }

  const formatVND = (num) =>
    new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(num);

  return {
    isValid: true,
    goc: soTien,
    tyLe,
    tienGiam,
    phaiTra,
    gocFormatted: formatVND(soTien),
    tienGiamFormatted: formatVND(tienGiam),
    phaiTraFormatted: formatVND(phaiTra)
  };
}

function runBai5Prompt() {
  const input = prompt("BÀI 5: Nhập số tiền hóa đơn (VNĐ):", "750000");
  if (input === null) return;
  const soTien = parseFloat(input.replace(/[^\d.]/g, ""));
  const res = tinhGiamGia(soTien);

  if (!res.isValid) {
    alert(res.message);
    return;
  }

  const alertMsg = `HÓA ĐƠN THANH TOÁN:\n` +
                   `- Tiền gốc: ${res.gocFormatted}\n` +
                   `- Mức giảm giá: ${res.tyLe}%\n` +
                   `- Tiền được giảm: ${res.tienGiamFormatted}\n` +
                   `-----------------------------\n` +
                   `=> SỐ TIỀN PHẢI TRẢ: ${res.phaiTraFormatted}`;

  alert(alertMsg);

  console.log(`%c[BÀI 5 - Giảm giá] Hóa đơn: ${res.gocFormatted} | Giảm: ${res.tyLe}% | Phải trả: ${res.phaiTraFormatted}`, "color: #34d399; font-weight: bold;");
  Terminal.log("success", `[BÀI 5] Hóa đơn ${res.gocFormatted} -> Giảm ${res.tyLe}% -> Còn ${res.phaiTraFormatted}`);

  // Cập nhật UI
  const inElem = document.getElementById("hw5BillInput");
  const outElem = document.getElementById("hw5Output");
  if (inElem) inElem.value = soTien;
  if (outElem) {
    outElem.className = "hw-output-box success";
    outElem.innerHTML = `Phải trả: <strong>${res.phaiTraFormatted}</strong> (Giảm: ${res.tienGiamFormatted})`;
  }
}

function calculateBai5UI() {
  const inElem = document.getElementById("hw5BillInput");
  const outElem = document.getElementById("hw5Output");
  if (!inElem || !outElem) return;

  const soTien = parseFloat(inElem.value.replace(/[^\d.]/g, ""));
  const res = tinhGiamGia(soTien);

  if (!res.isValid) {
    outElem.className = "hw-output-box error";
    outElem.textContent = res.message;
    return;
  }

  Terminal.log("info", `[BÀI 5 UI] Hóa đơn: ${res.gocFormatted} -> Phải trả: ${res.phaiTraFormatted}`);
  outElem.className = "hw-output-box success";
  outElem.innerHTML = `Phải trả: <strong>${res.phaiTraFormatted}</strong> ${res.tyLe > 0 ? `(Đã giảm 10%: ${res.tienGiamFormatted})` : "(Không giảm giá)"}`;
}

/**
 * BÀI 6: Phân loại tam giác
 * Nhập 3 cạnh. Kiểm tra xem có phải tam giác đều không (3 cạnh bằng nhau).
 * Mở rộng: Kiểm tra tính hợp lệ và các loại tam giác khác (cân, vuông, thường).
 */
function phanLoaiTamGiac(a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    return {
      isValidTriangle: false,
      isEquilateral: false,
      type: "Không hợp lệ",
      message: "Độ dài các cạnh của tam giác phải là số dương lớn hơn 0!"
    };
  }

  // Kiểm tra bất đẳng thức tam giác: tổng 2 cạnh bất kỳ phải lớn hơn cạnh còn lại
  const isTriangle = (a + b > c) && (a + c > b) && (b + c > a);
  if (!isTriangle) {
    return {
      isValidTriangle: false,
      isEquilateral: false,
      type: "Không phải tam giác",
      message: `Ba cạnh (${a}, ${b}, ${c}) không thỏa mãn bất đẳng thức tam giác!`
    };
  }

  // 1. Kiểm tra tam giác đều (Yêu cầu chính của đề bài)
  if (a === b && b === c) {
    return {
      isValidTriangle: true,
      isEquilateral: true,
      type: "Tam giác ĐỀU",
      message: "Đây là TAM GIÁC ĐỀU (cả 3 cạnh bằng nhau: a = b = c)."
    };
  }

  // Mở rộng kiểm tra tam giác vuông theo định lý Pytago
  const eps = 0.0001;
  const isRightAngled = 
    Math.abs(a * a + b * b - c * c) < eps ||
    Math.abs(a * a + c * c - b * b) < eps ||
    Math.abs(b * b + c * c - a * a) < eps;

  // Kiểm tra tam giác cân
  const isIsosceles = (a === b || b === c || a === c);

  let type = "Tam giác thường";
  let message = "Đây KHÔNG PHẢI là tam giác đều.";

  if (isRightAngled && isIsosceles) {
    type = "Tam giác Vuông Cân";
    message = "Đây là tam giác Vuông Cân (không phải tam giác đều).";
  } else if (isRightAngled) {
    type = "Tam giác Vuông";
    message = "Đây là tam giác Vuông (không phải tam giác đều).";
  } else if (isIsosceles) {
    type = "Tam giác Cân";
    message = "Đây là tam giác Cân (có 2 cạnh bằng nhau, không phải đều).";
  } else {
    type = "Tam giác Thường (Scalene)";
    message = "Đây là tam giác thường có 3 cạnh khác nhau (không phải đều).";
  }

  return {
    isValidTriangle: true,
    isEquilateral: false,
    type,
    message
  };
}

function runBai6Prompt() {
  const aIn = prompt("BÀI 6: Nhập cạnh thứ nhất a:", "5");
  if (aIn === null) return;
  const bIn = prompt("BÀI 6: Nhập cạnh thứ hai b:", "5");
  if (bIn === null) return;
  const cIn = prompt("BÀI 6: Nhập cạnh thứ ba c:", "5");
  if (cIn === null) return;

  const a = parseFloat(aIn);
  const b = parseFloat(bIn);
  const c = parseFloat(cIn);

  const res = phanLoaiTamGiac(a, b, c);

  alert(`KẾT QUẢ KIỂM TRA TAM GIÁC (a=${a}, b=${b}, c=${c}):\n\n` +
        `Phân loại: ${res.type}\n` +
        `Tam giác đều? ${res.isEquilateral ? "CÓ (Đúng chuẩn)" : "KHÔNG"}\n` +
        `Chi tiết: ${res.message}`);

  console.log(`%c[BÀI 6 - Tam giác] a=${a}, b=${b}, c=${c} -> ${res.type} | Đều: ${res.isEquilateral}`, "color: #38bdf8; font-weight: bold;");
  Terminal.log(res.isEquilateral ? "success" : "info", `[BÀI 6] a=${a}, b=${b}, c=${c} -> ${res.type}`);

  // Cập nhật UI
  const aEl = document.getElementById("hw6SideA");
  const bEl = document.getElementById("hw6SideB");
  const cEl = document.getElementById("hw6SideC");
  const outElem = document.getElementById("hw6Output");
  if (aEl) aEl.value = a;
  if (bEl) bEl.value = b;
  if (cEl) cEl.value = c;
  if (outElem) {
    outElem.className = `hw-output-box ${res.isEquilateral ? "success" : (res.isValidTriangle ? "warning" : "error")}`;
    outElem.innerHTML = `<strong>${res.type}</strong>: ${res.message}`;
  }
  drawTrianglePreview(a, b, c, res.isValidTriangle);
}

function calculateBai6UI() {
  const aEl = document.getElementById("hw6SideA");
  const bEl = document.getElementById("hw6SideB");
  const cEl = document.getElementById("hw6SideC");
  const outElem = document.getElementById("hw6Output");
  if (!aEl || !bEl || !cEl || !outElem) return;

  const a = parseFloat(aEl.value);
  const b = parseFloat(bEl.value);
  const c = parseFloat(cEl.value);

  const res = phanLoaiTamGiac(a, b, c);

  outElem.className = `hw-output-box ${res.isEquilateral ? "success" : (res.isValidTriangle ? "warning" : "error")}`;
  outElem.innerHTML = `<strong>${res.type}</strong>: ${res.message}`;

  Terminal.log(res.isEquilateral ? "success" : "info", `[BÀI 6 UI] Tam giác: a=${a}, b=${b}, c=${c} -> ${res.type}`);
  drawTrianglePreview(a, b, c, res.isValidTriangle);
}

/**
 * Vẽ minh họa hình tam giác lên Canvas
 */
function drawTrianglePreview(a, b, c, isValid) {
  const canvas = document.getElementById("triangleCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (!isValid || a <= 0 || b <= 0 || c <= 0) {
    ctx.fillStyle = "#ef4444";
    ctx.font = "12px monospace";
    ctx.textAlign = "center";
    ctx.fillText("Không thể dựng tam giác", canvas.width / 2, canvas.height / 2);
    return;
  }

  // Tọa độ định hình tam giác theo luật Cosin
  const cosC = (a * a + b * b - c * c) / (2 * a * b);
  const sinC = Math.sqrt(Math.max(0, 1 - cosC * cosC));

  const scale = 110 / Math.max(a, b, c);
  const p1 = { x: 40, y: 120 };
  const p2 = { x: 40 + a * scale, y: 120 };
  const p3 = { x: 40 + b * scale * cosC, y: 120 - b * scale * sinC };

  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.lineTo(p3.x, p3.y);
  ctx.closePath();

  // Tô màu gradient cho tam giác
  const grad = ctx.createLinearGradient(p1.x, p1.y, p3.x, p3.y);
  if (a === b && b === c) {
    grad.addColorStop(0, "#10b981");
    grad.addColorStop(1, "#38bdf8");
  } else {
    grad.addColorStop(0, "#6366f1");
    grad.addColorStop(1, "#a855f7");
  }

  ctx.fillStyle = "rgba(56, 189, 248, 0.15)";
  ctx.fill();
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = grad;
  ctx.stroke();

  // Đỉnh A, B, C
  ctx.fillStyle = "#facc15";
  ctx.font = "bold 11px sans-serif";
  ctx.fillText(`A (${c})`, p3.x, p3.y - 8);
  ctx.fillText(`B (${b})`, p1.x - 20, p1.y + 5);
  ctx.fillText(`C (${a})`, p2.x + 8, p2.y + 5);
}

// ----------------------------------------------------------------------------
// 7. KHỞI TẠO SỰ KIỆN KHI DOM TẢI XONG (DOM CONTENT LOADED)
// ----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // 1. Khởi tạo Terminal Simulator
  Terminal.init();

  // 2. Chạy tự động Hoạt động 1 vào F12 Console & Terminal
  runHoatDong1();

  // 3. Gán sự kiện cho Slider & Number Input của Hoạt động 2
  const scoreSlider = document.getElementById("scoreSlider");
  const scoreInput = document.getElementById("scoreInput");

  if (scoreSlider) {
    scoreSlider.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value);
      updateLogicBuilderUI(val);
    });
  }

  if (scoreInput) {
    scoreInput.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value);
      if (!isNaN(val)) updateLogicBuilderUI(val);
    });
  }

  // 4. Lắng nghe Terminal Input trên trang (cho phép sinh viên gõ lệnh JS)
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

  // 5. Khởi tạo giá trị mặc định cho các bài tập
  updateLogicBuilderUI(8.5);
  calculateBai1UI();
  calculateBai2UI();
  calculateBai3UI();
  calculateBai4UI();
  calculateBai5UI();
  calculateBai6UI();

  console.log("%c[READY] Mọi hoạt động Buổi 08 đã sẵn sàng!", "color: #10b981; font-weight: bold;");
});
