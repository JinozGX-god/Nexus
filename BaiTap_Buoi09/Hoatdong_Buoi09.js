// Bài 1: Bảng cửu chương 7 (Dùng vòng lặp for)
console.log("--- Bài 1: Bảng cửu chương 7 ---");
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// Bài 2: Tính tổng dãy số (Hàm nhận số n)
console.log("\n--- Bài 2: Tính tổng dãy số ---");
function tinhTong(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum; // Trả về kết quả
}
console.log("Tổng từ 1 đến 5 là:", tinhTong(5));

// Bài 3: Kiểm tra số nguyên tố cơ bản
console.log("\n--- Bài 3: Kiểm tra số nguyên tố ---");
function kiemTraNguyenTo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Chia hết cho số khác -> Không phải SNT
    }
    return true;
}
console.log("Số 7 có phải số nguyên tố không?", kiemTraNguyenTo(7));
console.log("Số 10 có phải số nguyên tố không?", kiemTraNguyenTo(10));

// Bài 4: Máy tính cá nhân (Calculator Function)
console.log("\n--- Bài 4: Máy tính cá nhân ---");
function calculator(so1, so2, phepTinh) {
    if (phepTinh === '+') return so1 + so2;
    if (phepTinh === '-') return so1 - so2;
    if (phepTinh === '*') return so1 * so2;
    if (phepTinh === '/') return so1 / so2;
    return "Phép tính không hợp lệ";
}
console.log("10 * 5 =", calculator(10, 5, '*'));

// Bài 5: Tìm số lớn nhất trong 3 số
console.log("\n--- Bài 5: Tìm Max ---");
function timMax(a, b, c) {
    let max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    return max;
}
console.log("Số lớn nhất trong (4, 9, 2) là:", timMax(4, 9, 2));

// Bài 6: Vòng lặp "Chào hỏi" mảng 5 thành viên
console.log("\n--- Bài 6: Chào hỏi ---");
const teamMembers = ["Đức", "Anh", "Minh", "Hải", "Tuấn"];
for (let i = 0; i < teamMembers.length; i++) {
    console.log(`Xin chào ${teamMembers[i]}, chúc bạn một ngày tốt lành!`);
}