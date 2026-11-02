// ==========================================================================
// JAVASCRIPT PRACTICE HUB - NGUYỄN HOÀNG PHÚC (MSSV: 25AI111)
// Học phần: 111101 · Thiết Kế Web · Đại học Lạc Hồng (LHU)
// BÀI TẬP BUỔI 08, 09, 10: BIẾN, ĐIỀU KIỆN, VÒNG LẶP, HÀM & DOM
// ==========================================================================

// ================================================================
// 0. KHỞI TẠO AOS & HỆ THỐNG TAB
// ================================================================
if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 40 });
}

function switchTab(week) {
    document.querySelectorAll('.week-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

    const panel = document.getElementById('panel-' + week);
    const btn = document.getElementById('btn-' + week);
    if (panel) panel.classList.add('active');
    if (btn) btn.classList.add('active');

    const exercisesArea = document.getElementById('exercises');
    if (exercisesArea) {
        exercisesArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ================================================================
// TIỆN ÍCH HỖ TRỢ XUẤT KẾT QUẢ
// ================================================================
function showOutput(id, html, type) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = html;
    el.className = 'demo-output show ' + (type || '');
}

function getVal(id) {
    const el = document.getElementById(id);
    return el ? el.value.trim() : '';
}

function getNum(id) {
    return parseFloat(getVal(id));
}

// ================================================================
// TUẦN 8 - HOẠT ĐỘNG TRÊN LỚP (IN-CLASS)
// ================================================================

// HĐ 1: "Hello JS Console" - Đối thoại với trình duyệt & Type Coercion
function runHD1() {
    var ten = getVal('hd1-name');
    var tuoi = getVal('hd1-age');
    if (!ten || !tuoi) {
        showOutput('hd1-out', '⚠️ Vui lòng nhập đầy đủ tên và tuổi!', 'warning');
        return;
    }
    var coercionStr = '10';
    var coercionNum = 20;
    var coercionResult = coercionStr + coercionNum; // '1020'
    var correctResult = Number(coercionStr) + coercionNum; // 30

    showOutput('hd1-out',
        `👋 Xin chào, <strong>${ten}</strong>! Bạn ${tuoi} tuổi.<br>` +
        `─────────────────────────────<br>` +
        `🔍 <strong>Giải thích Type Coercion:</strong><br>` +
        `&nbsp;'10' + 20 = <strong>"${coercionResult}"</strong> (nối chuỗi!)<br>` +
        `&nbsp;Vì '10' là string nên JS chuyển 20 thành string rồi ghép chuỗi.<br>` +
        `✅ Dùng Number('10') + 20 = <strong>${correctResult}</strong> (phép cộng số học)`,
        'success');
    console.log(`[Tuần 8 - HĐ1] Tên: ${ten}, Tuổi: ${tuoi}, '10'+20='${coercionResult}'`);
}

// HĐ 2: "Logic Builder" - Máy tính mini xếp loại điểm
function runHD2() {
    var score = getNum('hd2-score');
    if (isNaN(score)) {
        showOutput('hd2-out', '⚠️ Vui lòng nhập điểm số hợp lệ!', 'warning');
        return;
    }
    if (score < 0 || score > 10) {
        showOutput('hd2-out', '⚠️ Điểm phải nằm trong khoảng 0 đến 10!', 'warning');
        return;
    }
    var xepLoai, icon;
    if (score > 8) {
        xepLoai = 'Giỏi 🌟'; icon = 'success';
    } else if (score > 6.5) {
        xepLoai = 'Khá 👍'; icon = 'success';
    } else if (score >= 5) {
        xepLoai = 'Trung Bình ✅'; icon = '';
    } else {
        xepLoai = 'Yếu ❌ - Hãy cố gắng hơn!'; icon = 'error';
    }
    showOutput('hd2-out', `Điểm: <strong>${score}</strong> → Xếp loại: <strong>${xepLoai}</strong>`, icon);
}

// ================================================================
// TUẦN 8 - BÀI TẬP VỀ NHÀ (HOMEWORK)
// ================================================================

// Bài 1: Chuyển đổi tiền tệ USD -> VND (Tỉ giá 25.000)
function runB8_1() {
    var usd = getNum('b8-1-usd');
    if (isNaN(usd) || usd < 0) {
        showOutput('b8-1-out', '⚠️ Vui lòng nhập số USD hợp lệ!', 'warning');
        return;
    }
    var TI_GIA = 25000;
    var vnd = usd * TI_GIA;
    showOutput('b8-1-out',
        `💵 <strong>${usd} USD</strong> × 25,000 = <strong>${vnd.toLocaleString('vi-VN')} VNĐ</strong>`,
        'success');
    console.log(`[Tuần 8 - Bài 1] ${usd} USD = ${vnd} VND`);
}

// Bài 2: Kiểm tra số chẵn / lẻ
function runB8_2() {
    var num = getNum('b8-2-num');
    if (isNaN(num) || !Number.isInteger(num)) {
        showOutput('b8-2-out', '⚠️ Vui lòng nhập một số nguyên!', 'warning');
        return;
    }
    if (num % 2 === 0) {
        showOutput('b8-2-out', `<strong>${num}</strong> là số <strong>CHẴN</strong> (chia hết cho 2) ✅`, 'success');
    } else {
        showOutput('b8-2-out', `<strong>${num}</strong> là số <strong>LẺ</strong> (không chia hết cho 2) 🔢`, '');
    }
}

// Bài 3: Tính chỉ số BMI cơ bản = cân nặng / (chiều cao * chiều cao)
function runB8_3() {
    var height = getNum('b8-3-height');
    var weight = getNum('b8-3-weight');
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        showOutput('b8-3-out', '⚠️ Vui lòng nhập chiều cao (m) và cân nặng (kg) hợp lệ!', 'warning');
        return;
    }
    var bmi = weight / (height * height);
    var phanLoai;
    if (bmi < 18.5) phanLoai = 'Thiếu cân 🟡';
    else if (bmi < 25) phanLoai = 'Bình thường ✅';
    else if (bmi < 30) phanLoai = 'Thừa cân 🟠';
    else phanLoai = 'Béo phì 🔴';

    showOutput('b8-3-out',
        `BMI = ${weight} / (${height} × ${height}) = <strong>${bmi.toFixed(2)}</strong><br>Phân loại: <strong>${phanLoai}</strong>`,
        'success');
}

// Bài 4: Logic Đăng nhập (Mô phỏng)
function runB8_4() {
    var FIXED_USERNAME = 'admin';
    var FIXED_PASSWORD = '123456';
    var inputUser = getVal('b8-4-user');
    var inputPass = getVal('b8-4-pass');
    if (inputUser === FIXED_USERNAME && inputPass === FIXED_PASSWORD) {
        showOutput('b8-4-out', '✅ <strong>Đăng nhập thành công!</strong> Chào mừng, admin!', 'success');
    } else {
        showOutput('b8-4-out', '❌ <strong>Thông tin không chính xác.</strong> Vui lòng thử lại!', 'error');
    }
}

// Bài 5: Máy tính giảm giá (Discount Calculator: > 500k giảm 10%)
function runB8_5() {
    var price = getNum('b8-5-price');
    if (isNaN(price) || price < 0) {
        showOutput('b8-5-out', '⚠️ Vui lòng nhập số tiền hợp lệ!', 'warning');
        return;
    }
    var NGUONG = 500000;
    var GIAM = 0.10;
    var finalPrice, msg;
    if (price > NGUONG) {
        finalPrice = price * (1 - GIAM);
        msg = `🎉 Giảm 10%! ${price.toLocaleString('vi-VN')}đ → <strong>${finalPrice.toLocaleString('vi-VN')}đ</strong> (tiết kiệm ${(price * GIAM).toLocaleString('vi-VN')}đ)`;
    } else {
        finalPrice = price;
        msg = `💰 Không giảm giá (hóa đơn ≤ 500k). Thanh toán: <strong>${finalPrice.toLocaleString('vi-VN')}đ</strong>`;
    }
    showOutput('b8-5-out', msg, price > NGUONG ? 'success' : '');
}

// Bài 6: Phân loại tam giác (Đều, Cân, Thường)
function runB8_6() {
    var a = getNum('b8-6-a');
    var b = getNum('b8-6-b');
    var c = getNum('b8-6-c');
    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        showOutput('b8-6-out', '⚠️ Vui lòng nhập 3 cạnh dương hợp lệ!', 'warning');
        return;
    }
    if (a + b <= c || a + c <= b || b + c <= a) {
        showOutput('b8-6-out', `❌ Ba cạnh ${a}, ${b}, ${c} <strong>không tạo thành tam giác</strong>!`, 'error');
        return;
    }
    var loai;
    if (a === b && b === c) {
        loai = '🔺 <strong>Tam Giác ĐỀU</strong> (3 cạnh bằng nhau)';
    } else if (a === b || b === c || a === c) {
        loai = '🔶 <strong>Tam Giác CÂN</strong> (2 cạnh bằng nhau)';
    } else {
        loai = '🔷 <strong>Tam Giác THƯỜNG</strong> (3 cạnh khác nhau)';
    }
    showOutput('b8-6-out', `Cạnh: ${a}, ${b}, ${c} → ${loai}`, 'success');
}

// ================================================================
// TUẦN 9 - HOẠT ĐỘNG TRÊN LỚP (IN-CLASS)
// ================================================================

// HĐ 1: "The Counting Machine" - Máy đếm tự động
function runHD9_1(chiCanh) {
    var n = parseInt(getVal('hd9-1-n'));
    if (isNaN(n) || n < 1) {
        showOutput('hd9-1-out', '⚠️ Vui lòng nhập số nguyên dương!', 'warning');
        return;
    }
    if (n > 200) {
        showOutput('hd9-1-out', '⚠️ Vui lòng nhập số ≤ 200 để tránh tràn màn hình!', 'warning');
        return;
    }
    var nums = [];
    for (var i = 1; i <= n; i++) {
        if (!chiCanh || i % 2 === 0) {
            nums.push(i);
        }
    }
    showOutput('hd9-1-out',
        (chiCanh ? '(Chỉ số chẵn): ' : '(1 đến ' + n + '): ') + nums.join(', '),
        'success');
}

// HĐ 2: "Function Factory" - Tính diện tích hình chữ nhật
function tinhDienTich(dai, rong) {
    return dai * rong;
}

function runHD9_2() {
    var dai = getNum('hd9-2-dai');
    var rong = getNum('hd9-2-rong');
    if (isNaN(dai) || isNaN(rong) || dai <= 0 || rong <= 0) {
        showOutput('hd9-2-out', '⚠️ Vui lòng nhập chiều dài và chiều rộng hợp lệ!', 'warning');
        return;
    }
    var dt = tinhDienTich(dai, rong);
    showOutput('hd9-2-out',
        `📐 tinhDienTich(${dai}, ${rong}) = <strong>${dt} đơn vị²</strong>`,
        'success');
}

// ================================================================
// TUẦN 9 - BÀI TẬP VỀ NHÀ (HOMEWORK)
// ================================================================

// Bài 1: Bảng cửu chương 7 (hoặc số n tùy chỉnh)
function runB9_1() {
    var n = parseInt(getVal('b9-1-n'));
    if (isNaN(n) || n < 1) {
        showOutput('b9-1-out', '⚠️ Vui lòng nhập số nguyên dương!', 'warning');
        return;
    }
    var lines = [];
    for (var i = 1; i <= 10; i++) {
        lines.push(`<span style="color:var(--color-primary-indigo)">${n}</span> × <span style="color:var(--color-text-muted)">${i}</span> = <span style="color:var(--color-accent-emerald);font-weight:700">${n * i}</span>`);
    }
    showOutput('b9-1-out', lines.join('<br>'), 'success');
}

// Bài 2: Tính tổng các số từ 1 đến n
function tinhTong(n) {
    var tong = 0;
    for (var i = 1; i <= n; i++) {
        tong += i;
    }
    return tong;
}

function runB9_2() {
    var n = parseInt(getVal('b9-2-n'));
    if (isNaN(n) || n < 1) {
        showOutput('b9-2-out', '⚠️ Vui lòng nhập số nguyên dương!', 'warning');
        return;
    }
    var result = tinhTong(n);
    showOutput('b9-2-out',
        `Tổng(1 → ${n}) = 1 + 2 + … + ${n} = <strong>${result}</strong>`,
        'success');
}

// Bài 3: Kiểm tra số nguyên tố
function laNguyenTo(n) {
    if (n < 2) return false;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function runB9_3() {
    var n = parseInt(getVal('b9-3-n'));
    if (isNaN(n) || n < 1) {
        showOutput('b9-3-out', '⚠️ Vui lòng nhập số nguyên dương!', 'warning');
        return;
    }
    if (laNguyenTo(n)) {
        showOutput('b9-3-out', `✅ <strong>${n}</strong> là số <strong>NGUYÊN TỐ</strong>!`, 'success');
    } else {
        showOutput('b9-3-out', `❌ <strong>${n}</strong> <strong>KHÔNG</strong> phải số nguyên tố.`, 'error');
    }
}

// Bài 4: Máy tính cá nhân (Calculator Function)
function mayTinh(so1, so2, phepTinh) {
    if (phepTinh === '+') return so1 + so2;
    if (phepTinh === '-') return so1 - so2;
    if (phepTinh === '*') return so1 * so2;
    if (phepTinh === '/') {
        if (so2 === 0) return 'Lỗi: Chia cho 0!';
        return so1 / so2;
    }
    return 'Phép tính không hợp lệ';
}

function runB9_4(phepTinh) {
    var a = getNum('b9-4-a');
    var b = getNum('b9-4-b');
    if (isNaN(a) || isNaN(b)) {
        showOutput('b9-4-out', '⚠️ Vui lòng nhập cả Số 1 và Số 2!', 'warning');
        return;
    }
    var result = mayTinh(a, b, phepTinh);
    var opLabel = { '+': '+', '-': '−', '*': '×', '/': '÷' };
    const displayEl = document.getElementById('b9-4-display');
    if (displayEl) displayEl.textContent = result;
    showOutput('b9-4-out',
        `mayTinh(${a}, ${b}, '${phepTinh}') → ${a} ${opLabel[phepTinh]} ${b} = <strong>${result}</strong>`,
        typeof result === 'string' && result.includes('Lỗi') ? 'error' : 'success');
}

// Bài 5: Tìm số lớn nhất trong 3 số
function timMax(a, b, c) {
    var max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    return max;
}

function runB9_5() {
    var a = getNum('b9-5-a');
    var b = getNum('b9-5-b');
    var c = getNum('b9-5-c');
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        showOutput('b9-5-out', '⚠️ Vui lòng nhập đủ cả 3 số!', 'warning');
        return;
    }
    var max = timMax(a, b, c);
    showOutput('b9-5-out',
        `timMax(${a}, ${b}, ${c}) → Số lớn nhất: <strong>${max}</strong> 🏆`,
        'success');
}

// Bài 6: Vòng lặp "Chào hỏi" mảng thành viên
function runB9_6() {
    var thanhVien = ['Nguyễn Hoàng Phúc', 'Trần Văn An', 'Lê Thị Bích', 'Phạm Minh Khôi', 'Đặng Thùy Linh'];
    var lines = [];
    for (var i = 0; i < thanhVien.length; i++) {
        lines.push(`[${i + 1}] 👋 Xin chào, <strong>${thanhVien[i]}</strong>!`);
    }
    showOutput('b9-6-out', lines.join('<br>'), 'success');
}

// ================================================================
// TUẦN 10 - HOẠT ĐỘNG TRÊN LỚP (IN-CLASS)
// ================================================================

// HĐ 2: "Light Switch" - Bật/Tắt bóng đèn
var isLightOn = false;
function runHD10_2() {
    isLightOn = !isLightOn;
    var bulb = document.getElementById('bulb-icon');
    var btn = document.getElementById('toggle-bulb-btn');
    var out = document.getElementById('hd10-2-out');
    if (isLightOn) {
        if (bulb) bulb.classList.add('on');
        if (btn) btn.innerHTML = '<i class="fa-solid fa-toggle-on"></i> Tắt đèn';
        if (out) {
            out.textContent = 'Trạng thái: Đèn sáng ☀️';
            out.className = 'demo-output show success';
        }
    } else {
        if (bulb) bulb.classList.remove('on');
        if (btn) btn.innerHTML = '<i class="fa-solid fa-toggle-off"></i> Bật đèn';
        if (out) {
            out.textContent = 'Trạng thái: Đèn tắt 🌑';
            out.className = 'demo-output show';
        }
    }
}

// HĐ 3: "Live Input" - Phản hồi tức thì
function runHD10_3(value) {
    var out = document.getElementById('hd10-3-out');
    if (!out) return;
    if (value === '') {
        out.textContent = 'Bắt đầu gõ...';
        out.style.color = 'var(--color-text-muted)';
    } else {
        out.textContent = value;
        out.style.color = 'var(--color-primary)';
    }
}

// ================================================================
// TUẦN 10 - BÀI TẬP VỀ NHÀ (HOMEWORK)
// ================================================================

// Bài 1: Thay đổi lời chào theo tên
function runB10_1() {
    var name = getVal('b10-1-name');
    if (!name) {
        showOutput('b10-1-out', '⚠️ Vui lòng nhập tên của bạn!', 'warning');
        return;
    }
    showOutput('b10-1-out', `🎉 <strong>Chào mừng ${name}!</strong> Rất vui được gặp bạn!`, 'success');
}

// Bài 2: Bộ sưu tập ảnh (Simple Gallery)
function runB10_2(btn, emoji, color, label) {
    document.querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    var main = document.getElementById('b10-2-main');
    if (main) {
        main.style.background = color;
        main.textContent = emoji;
    }
    showOutput('b10-2-out', `Đang hiển thị: ${emoji} ${label}`, 'success');
}

// Bài 3: Danh sách việc cần làm (To-Do List cơ bản)
function runB10_3() {
    var task = getVal('b10-3-task');
    if (!task) return;
    var list = document.getElementById('b10-3-list');
    if (list) {
        var li = document.createElement('li');
        li.textContent = task;
        list.appendChild(li);
    }
    var inputEl = document.getElementById('b10-3-task');
    if (inputEl) {
        inputEl.value = '';
        inputEl.focus();
    }
}

// Bài 4: Kiểm tra độ dài mật khẩu (Real-time feedback)
function runB10_4(value) {
    var out = document.getElementById('b10-4-out');
    if (!out) return;
    if (value.length === 0) {
        out.className = 'demo-output show';
        out.style.borderLeftColor = 'var(--color-text-dim)';
        out.style.color = 'var(--color-text-dim)';
        out.textContent = 'Hãy bắt đầu nhập...';
    } else if (value.length < 8) {
        out.className = 'demo-output show error';
        out.style.borderLeftColor = '';
        out.style.color = '';
        out.textContent = `🔴 Mật khẩu quá ngắn! (${value.length}/8 ký tự)`;
    } else {
        out.className = 'demo-output show success';
        out.style.borderLeftColor = '';
        out.style.color = '';
        out.textContent = `✅ Mật khẩu hợp lệ! (${value.length} ký tự)`;
    }
}

// Bài 5: Thay đổi kích thước văn bản (+/- 2px)
var currentFontSize = 16;
function runB10_5(delta) {
    currentFontSize += delta;
    if (currentFontSize < 10) currentFontSize = 10;
    if (currentFontSize > 32) currentFontSize = 32;

    var textEl = document.getElementById('b10-5-text');
    var sizeEl = document.getElementById('b10-5-size');
    if (textEl) textEl.style.fontSize = currentFontSize + 'px';
    if (sizeEl) sizeEl.textContent = currentFontSize;
}

// Bài 6: Ẩn/Hiện mật khẩu
var isPasswordVisible = false;
function runB10_6() {
    isPasswordVisible = !isPasswordVisible;
    var passInput = document.getElementById('b10-6-pass');
    var eyeIcon = document.getElementById('b10-6-eyeicon');
    var out = document.getElementById('b10-6-out');

    if (isPasswordVisible) {
        if (passInput) passInput.setAttribute('type', 'text');
        if (eyeIcon) eyeIcon.className = 'fa-solid fa-eye-slash';
        if (out) {
            out.textContent = 'Chế độ: Hiện mật khẩu 👁️';
            out.className = 'demo-output show success';
        }
    } else {
        if (passInput) passInput.setAttribute('type', 'password');
        if (eyeIcon) eyeIcon.className = 'fa-solid fa-eye';
        if (out) {
            out.textContent = 'Chế độ: Ẩn mật khẩu 🔒';
            out.className = 'demo-output show';
            out.style.borderLeftColor = 'var(--color-text-dim)';
            out.style.color = 'var(--color-text-dim)';
        }
    }
}

