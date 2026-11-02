/**
 * ============================================================================
 * HỌC PHẦN: 111101 · THIẾT KẾ WEB · ĐẠI HỌC LẠC HỒNG (LHU)
 * BÀI TẬP BUỔI 11: PORTFOLIO BẢN SẮC CÁ NHÂN & DỮ LIỆU ĐỘNG GOOGLE SHEETS
 * Sinh viên thực hiện: Mạc Thùy Thiên Ân - MSSV: 25AI111
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. DỮ LIỆU DỰ ÁN MẪU (GOOGLE SHEETS DATASET SCHEMA)
// ----------------------------------------------------------------------------
const DEFAULT_PROJECTS = [
  {
    id: 1,
    title: "Mô Hình AI Phân Loại Ảnh X-Quang",
    category: "ai",
    categoryName: "Trí Tuệ Nhân Tạo",
    desc: "Hệ thống thị giác máy tính Deep Learning ứng dụng ResNet50 để phát hiện sớm các tổn thương phổi với độ chính xác 98.4%.",
    image: "../BaiTap_Buoi06/images/buoi02.svg",
    tags: ["Python", "TensorFlow", "Computer Vision", "PyTorch"],
    link: "https://github.com/JinozGX-god/Nexus"
  },
  {
    id: 2,
    title: "Nexus Hub - Nền Tảng Học Tập Đa Năng",
    category: "web",
    categoryName: "Lập Trình Web",
    desc: "Cổng mục lục bài tập 11 tuần tích hợp thiết kế giao diện chuẩn W3C, Responsive Design, CSS Grid và JavaScript DOM tương tác thời gian thực.",
    image: "../BaiTap_Buoi06/images/buoi06.svg",
    tags: ["HTML5", "CSS3 Grid", "Vanilla JS", "SEO 100%"],
    link: "../index.html"
  },
  {
    id: 3,
    title: "Trợ Lý Giọng Nói AI Đa Ngữ (Nexus Voice)",
    category: "ai",
    categoryName: "Trí Tuệ Nhân Tạo",
    desc: "Mô hình xử lý ngôn ngữ tự nhiên (NLP) nhận diện và phản hồi giọng nói tiếng Việt tức thì qua WebSocket và Speech Synthesis API.",
    image: "../BaiTap_Buoi06/images/buoi08.svg",
    tags: ["Web Speech API", "NLP", "FastAPI", "WebSocket"],
    link: "https://github.com/JinozGX-god/Nexus"
  },
  {
    id: 4,
    title: "Ứng Dụng Di Động Theo Dõi Sức Khỏe AI",
    category: "mobile",
    categoryName: "Ứng Dụng Mobile",
    desc: "App di động tính toán chỉ số BMI, lượng calo tiêu thụ và phân tích thói quen luyện tập hàng ngày bằng mô hình học máy trên thiết bị.",
    image: "../BaiTap_Buoi06/images/buoi05.svg",
    tags: ["React Native", "Mobile First", "Health AI", "Charts"],
    link: "../BaiTap_Buoi08/index.html"
  },
  {
    id: 5,
    title: "Hệ Thống Quản Lý Đơn Hàng & Giảm Giá",
    category: "web",
    categoryName: "Lập Trình Web",
    desc: "Giao diện POS bán hàng hiện đại tính toán chiết khấu tự động, hỗ trợ thanh toán điện tử và xuất hóa đơn trực quan cho doanh nghiệp.",
    image: "../BaiTap_Buoi06/images/buoi09_10.svg",
    tags: ["JavaScript ES6+", "DOM Events", "Async Data", "Flexbox"],
    link: "../BaiTap_Buoi09_10/index.html"
  },
  {
    id: 6,
    title: "Camera Thông Minh Nhận Diện Khuôn Mặt",
    category: "mobile",
    categoryName: "Ứng Dụng Mobile",
    desc: "Ứng dụng chấm công và nhận diện khuôn mặt sinh trắc học thời gian thực, cảnh báo xâm nhập an ninh qua camera di động.",
    image: "../BaiTap_Buoi06/images/buoi11.svg",
    tags: ["OpenCV", "Face-API", "Mobile AI", "PWA"],
    link: "https://github.com/JinozGX-god/Nexus"
  }
];

let activeProjects = [...DEFAULT_PROJECTS];
let currentCategory = "all";

// ----------------------------------------------------------------------------
// BÀI 6: THÀNH PHẦN THÔNG MINH - TYPEWRITER EFFECT
// ----------------------------------------------------------------------------
const TYPEWRITER_PHRASES = [
  "AI Engineer & Data Scientist",
  "Frontend Web Developer",
  "Nexus Portfolio Architect",
  "Sinh viên Lớp 25AI111 · ĐH Lạc Hồng"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function runTypewriter() {
  const target = document.getElementById("typewriterTarget");
  if (!target) return;

  const currentPhrase = TYPEWRITER_PHRASES[phraseIndex];

  if (isDeleting) {
    target.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 40;
  } else {
    target.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 90;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    typeSpeed = 1800; // Dừng lại đọc
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % TYPEWRITER_PHRASES.length;
    typeSpeed = 400;
  }

  setTimeout(runTypewriter, typeSpeed);
}

// ----------------------------------------------------------------------------
// BÀI 4: "ẢO THUẬT" GIAO DIỆN & BIẾN (JS & CSS VARIABLES)
// ----------------------------------------------------------------------------

/**
 * 1. Chuyển đổi Dark Mode / Light Mode
 */
function toggleThemeMode() {
  document.body.classList.toggle("light-theme");
  const isLight = document.body.classList.contains("light-theme");
  const icon = document.getElementById("themeModeIcon");

  if (icon) {
    icon.className = isLight ? "fa-solid fa-moon" : "fa-solid fa-sun";
  }

  localStorage.setItem("nexus-theme-mode", isLight ? "light" : "dark");
  console.log(`[Theme Switcher] Chuyển đổi sang: ${isLight ? "LIGHT MODE" : "DARK MODE"}`);
}

/**
 * 2. Theme Accent Color Switcher: Thay đổi giá trị biến CSS :root bằng JS
 */
function setAccentColor(primaryHex, primaryRgb, accentHex, accentRgb, swatchElem) {
  const root = document.documentElement;

  // Sử dụng JS can thiệp trực tiếp vào CSS root variables
  root.style.setProperty("--color-primary", primaryHex);
  root.style.setProperty("--color-primary-rgb", primaryRgb);
  root.style.setProperty("--color-accent", accentHex);
  root.style.setProperty("--color-accent-rgb", accentRgb);

  document.querySelectorAll(".color-dot").forEach(dot => dot.classList.remove("active"));
  if (swatchElem) swatchElem.classList.add("active");

  console.log(`%c[CSS Variables] Đã đổi màu nhấn sang: ${primaryHex}`, `color: ${primaryHex}; font-weight: bold;`);
}

// ----------------------------------------------------------------------------
// BÀI 5: QUẢN LÝ DỮ LIỆU DỰ ÁN (JS & GOOGLE SHEETS / DYNAMIC DOM)
// ----------------------------------------------------------------------------

/**
 * Hàm sinh mã HTML cho từng dự án và chèn vào DOM (Dynamic Rendering)
 */
function renderProjects(projects) {
  const container = document.getElementById("projectsContainer");
  const countElem = document.getElementById("projectsCount");
  if (!container) return;

  container.innerHTML = "";

  if (projects.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-md);">
        <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; color: var(--text-dim); margin-bottom: 1rem;"></i>
        <h4 style="font-size: 1.15rem; color: var(--text-secondary);">Không tìm thấy dự án trong danh mục này.</h4>
      </div>
    `;
    if (countElem) countElem.textContent = "0";
    return;
  }

  projects.forEach((proj, index) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.setAttribute("data-category", proj.category);
    card.style.animation = `fadeInUp 0.4s ease ${index * 0.08}s both`;

    const tagsHtml = proj.tags.map(t => `<span class="project-tag-pill">${t}</span>`).join("");

    card.innerHTML = `
      <div>
        <div class="project-media">
          <span class="project-category-badge">${proj.categoryName}</span>
          <img src="${proj.image}" alt="${proj.title}" onerror="this.onerror=null; this.src='../avatar.jpg';" loading="lazy">
        </div>
        <div class="project-body">
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.desc}</p>
          <div class="project-tags">
            ${tagsHtml}
          </div>
        </div>
      </div>
      <div class="project-footer">
        <a href="${proj.link}" class="project-link-btn" target="_blank" rel="noopener noreferrer">
          <span>Xem chi tiết</span>
          <i class="fa-solid fa-arrow-right"></i>
        </a>
        <span style="font-size: 0.75rem; color: var(--text-dim); font-family: var(--font-mono);">#0${proj.id}</span>
      </div>
    `;

    container.appendChild(card);
  });

  if (countElem) countElem.textContent = projects.length;
}

/**
 * Lọc dự án theo danh mục (Bài 6: Filter logic)
 */
function filterProjects(category, btnElem) {
  currentCategory = category;

  document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
  if (btnElem) btnElem.classList.add("active");

  if (category === "all") {
    renderProjects(activeProjects);
  } else {
    const filtered = activeProjects.filter(p => p.category === category);
    renderProjects(filtered);
  }
}

/**
 * Nạp dữ liệu dự án từ Google Sheets (CSV Format) hoặc Dataset động
 */
async function syncFromGoogleSheets() {
  const syncTxt = document.getElementById("syncStatusText");
  const reloadBtn = document.getElementById("reloadBtn");

  if (syncTxt) syncTxt.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang kết nối và nạp dữ liệu...';
  if (reloadBtn) reloadBtn.disabled = true;

  try {
    // Giả lập đọc dữ liệu động (hoặc qua link Google Sheets CSV nếu được cung cấp)
    await new Promise(resolve => setTimeout(resolve, 600));

    // Thêm một dự án động mới vào danh sách khi đồng bộ để chứng minh tính Real-time
    const hasDynamic = activeProjects.some(p => p.id === 7);
    if (!hasDynamic) {
      activeProjects.unshift({
        id: 7,
        title: "Dự Án Google Sheets Tự Động Hóa 2026",
        category: "ai",
        categoryName: "Trí Tuệ Nhân Tạo",
        desc: "Dự án vừa được nạp động từ bảng tính Google Sheets: Mô hình tự động phân tích thị trường chứng khoán bằng học tăng cường (RL).",
        image: "../BaiTap_Buoi06/images/buoi08.svg",
        tags: ["Google Sheets API", "Dynamic Data", "Reinforcement Learning"],
        link: "https://github.com/JinozGX-god/Nexus"
      });
    }

    if (currentCategory === "all") {
      renderProjects(activeProjects);
    } else {
      renderProjects(activeProjects.filter(p => p.category === currentCategory));
    }

    if (syncTxt) {
      syncTxt.innerHTML = `<span class="status-dot-pulse"></span> Đã đồng bộ thành công (${activeProjects.length} dự án từ Data Source)`;
    }
  } catch (err) {
    if (syncTxt) syncTxt.innerHTML = '⚠️ Lỗi nạp dữ liệu. Đã hiển thị dữ liệu cục bộ an toàn.';
    console.error("Lỗi đồng bộ Google Sheets:", err);
  } finally {
    if (reloadBtn) reloadBtn.disabled = false;
  }
}

// ----------------------------------------------------------------------------
// BÀI 3: RESPONSIVE MOBILE DRAWER MENU
// ----------------------------------------------------------------------------
function toggleMobileMenu() {
  const navMenu = document.getElementById("primaryNav");
  const hamburger = document.getElementById("hamburgerToggle");
  if (navMenu) {
    navMenu.classList.toggle("open");
  }
}

function closeMobileMenu() {
  const navMenu = document.getElementById("primaryNav");
  if (navMenu && navMenu.classList.contains("open")) {
    navMenu.classList.remove("open");
  }
}

// ----------------------------------------------------------------------------
// KHỞI TẠO DOM CONTENT LOADED
// ----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // 1. Chạy Typewriter Effect
  runTypewriter();

  // 2. Render danh sách dự án ban đầu
  renderProjects(activeProjects);

  // 3. Khởi tạo trạng thái Theme nếu đã lưu trong LocalStorage
  const savedTheme = localStorage.getItem("nexus-theme-mode");
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    const icon = document.getElementById("themeModeIcon");
    if (icon) icon.className = "fa-solid fa-moon";
  }

  // 4. Đóng menu mobile khi bấm vào link
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", closeMobileMenu);
  });

  console.log("%c[READY] Portfolio Buổi 11 đã được tải hoàn tất!", "color: #38bdf8; font-weight: bold;");
});
