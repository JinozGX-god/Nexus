// ==========================================================================
// PORTFOLIO CÁ NHÂN THÔNG MINH - NGUYỄN HOÀNG PHÚC (MSSV: 25AI111)
// BÀI 4: "ẢO THUẬT" GIAO DIỆN & BIẾN (THEME SWITCHER & COLOR PICKER)
// BÀI 5: QUẢN LÝ DỮ LIỆU DỰ ÁN (GOOGLE SHEETS API & FALLBACK)
// BÀI 6: THÀNH PHẦN THÔNG MINH, TYPEWRITER & LỌC DỰ ÁN DYNAMIC
// ==========================================================================

// --------------------------------------------------------------------------
// 1. DỮ LIỆU DỰ PHÒNG CHUẨN GOOGLE SHEETS SCHEMA
// (Tự động kích hoạt khi chưa có mạng hoặc Google Sheets URL tùy biến)
// --------------------------------------------------------------------------
const DEFAULT_PROJECTS = [
    {
        id: 1,
        title: "AI Face Attendance System",
        category: "ai",
        desc: "Hệ thống điểm danh sinh viên bằng nhận diện khuôn mặt Real-time sử dụng OpenCV, YOLOv8 và Flask backend.",
        tags: ["Python", "YOLOv8", "OpenCV", "Flask"],
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&auto=format&fit=crop&q=80",
        link: "https://github.com/JinozGX-god",
        badge: "AI / ML"
    },
    {
        id: 2,
        title: "Nexus Web Coursework Hub",
        category: "web",
        desc: "Trang mục lục tổng hợp 10 tuần thực hành môn Thiết Kế Web chuẩn HTML5 Semantic, CSS Grid, Responsive 375px.",
        tags: ["HTML5", "CSS Grid", "AOS", "Responsive"],
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80",
        link: "https://github.com/JinozGX-god/Nexus",
        badge: "Web Frontend"
    },
    {
        id: 3,
        title: "Student Tasks Mobile App",
        category: "mobile",
        desc: "Ứng dụng nhắc lịch học, quản lý bài tập theo chuẩn Pomodoro dành cho sinh viên CNTT Lạc Hồng.",
        tags: ["Flutter", "Dart", "Firebase", "State Management"],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=80",
        link: "https://github.com/JinozGX-god",
        badge: "Mobile App"
    },
    {
        id: 4,
        title: "Smart E-Commerce Shop",
        category: "web",
        desc: "Giao diện website thương mại điện tử tích hợp giỏ hàng thời gian thực, lọc sản phẩm và Dark/Light mode.",
        tags: ["JavaScript", "CSS Variables", "Local Storage"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
        link: "https://github.com/JinozGX-god",
        badge: "Web Fullstack"
    },
    {
        id: 5,
        title: "Vietnamese NLP Chatbot",
        category: "ai",
        desc: "Trợ lý ảo hỗ trợ giải đáp thắc mắc học phần, lịch thi dựa trên mô hình ngôn ngữ lớn PhoBERT và RAG.",
        tags: ["PhoBERT", "LangChain", "Vector DB", "FastAPI"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop&q=80",
        link: "https://github.com/JinozGX-god",
        badge: "GenAI"
    },
    {
        id: 6,
        title: "Campus IoT Parking Monitor",
        category: "mobile",
        desc: "Giám sát chỗ trống nhà xe đại học Lạc Hồng thời gian thực qua giao thức MQTT và bảng điều khiển trực quan.",
        tags: ["ESP32", "MQTT", "React Native", "NodeJS"],
        image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600&auto=format&fit=crop&q=80",
        link: "https://github.com/JinozGX-god",
        badge: "IoT & App"
    }
];

let allProjects = [];

// --------------------------------------------------------------------------
// 2. BÀI 6: HIỆU ỨNG GÕ CHỮ (TYPEWRITER EFFECT)
// --------------------------------------------------------------------------
class Typewriter {
    constructor(element, words, waitTime = 2000) {
        this.element = element;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.waitTime = parseInt(waitTime, 10);
        this.isDeleting = false;
        this.type();
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.element.innerHTML = `<span class="txt">${this.txt}</span>`;

        let typeSpeed = 100;
        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.waitTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 400;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// --------------------------------------------------------------------------
// 3. BÀI 4: "ẢO THUẬT" GIAO DIỆN & BIẾN (THEME SWITCHER & COLOR PICKER)
// --------------------------------------------------------------------------
function initThemeController() {
    const themeBtn = document.getElementById('theme-toggle-btn');
    const root = document.documentElement;
    const currentTheme = localStorage.getItem('nexus_portfolio_theme') || 'dark';

    applyTheme(currentTheme);

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const activeTheme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            applyTheme(activeTheme);
            localStorage.setItem('nexus_portfolio_theme', activeTheme);
        });
    }

    // Color Palette Switcher (Thay đổi biến CSS --color-primary trực tiếp trên :root)
    const savedColor = localStorage.getItem('nexus_portfolio_color');
    if (savedColor) {
        changePrimaryColor(savedColor);
    }
}

function applyTheme(theme) {
    const root = document.documentElement;
    const icon = document.querySelector('#theme-toggle-btn i');
    if (theme === 'light') {
        root.setAttribute('data-theme', 'light');
        if (icon) icon.className = 'fa-solid fa-moon';
    } else {
        root.removeAttribute('data-theme');
        if (icon) icon.className = 'fa-solid fa-sun';
    }
}

// Hàm thay đổi biến CSS :root bằng JavaScript theo yêu cầu Bài 4
function changePrimaryColor(hex) {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', hex);

    // Chuyển HEX sang RGB để hỗ trợ rgba(var(--color-primary-rgb), opacity)
    const rgb = hexToRgb(hex);
    if (rgb) {
        root.style.setProperty('--color-primary-rgb', `${rgb.r}, ${rgb.g}, ${rgb.b}`);
    }
    localStorage.setItem('nexus_portfolio_color', hex);
}

function hexToRgb(hex) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// --------------------------------------------------------------------------
// 4. BÀI 3: RESPONSIVE HAMBURGER MENU
// --------------------------------------------------------------------------
function initMobileNavigation() {
    const hamburger = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('open');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('open');
            });
        });
    }
}

// --------------------------------------------------------------------------
// 5. BÀI 5: QUẢN LÝ DỮ LIỆU DỰ ÁN (GOOGLE SHEETS & JSON RENDER)
// --------------------------------------------------------------------------
async function fetchProjectsFromGoogleSheets(sheetUrl) {
    const statusEl = document.getElementById('data-source-status');
    
    // Nếu có Google Sheets CSV URL công khai (hoặc App Script JSON)
    if (sheetUrl && sheetUrl.startsWith('http')) {
        try {
            if (statusEl) statusEl.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang nạp dữ liệu từ Google Sheets...';
            const res = await fetch(sheetUrl);
            const data = await res.json();
            allProjects = data;
            if (statusEl) statusEl.innerHTML = '<i class="fa-solid fa-circle-check"></i> Đã đồng bộ từ Google Sheets!';
            renderProjects(allProjects);
            return;
        } catch (err) {
            console.warn("Không kết nối được Google Sheets trực tiếp, chuyển sang dữ liệu mẫu:", err);
        }
    }

    // Dùng danh sách cấu trúc chuẩn (tương thích Google Sheets Table)
    allProjects = DEFAULT_PROJECTS;
    if (statusEl) {
        statusEl.innerHTML = '<i class="fa-solid fa-cloud-arrow-down"></i> Dữ liệu dự án động (Cấu trúc tương thích Google Sheets JSON API)';
    }
    renderProjects(allProjects);
}

function renderProjects(projects) {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    if (projects.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted)">
                <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; margin-bottom: 1rem; opacity: 0.5"></i>
                <p>Không có dự án nào trong danh mục này.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = projects.map(p => `
        <article class="project-card" data-category="${p.category}" data-aos="fade-up">
            <div class="project-thumb">
                <img src="${p.image}" alt="${p.title}" loading="lazy">
                <span class="project-badge">${p.badge || 'Dự án'}</span>
            </div>
            <div class="project-body">
                <h3 class="project-title">${p.title}</h3>
                <p class="project-desc">${p.desc}</p>
                <div class="project-tags">
                    ${(p.tags || []).map(t => `<span class="p-tag">${t}</span>`).join('')}
                </div>
                <div class="project-footer">
                    <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="project-link">
                        <span>Chi tiết mã nguồn</span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </article>
    `).join('');

    // Re-init AOS sau khi render DOM động
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

// --------------------------------------------------------------------------
// 6. BÀI 6: LỌC DỮ LIỆU DỰ ÁN THEO DANH MỤC (CATEGORY FILTER)
// --------------------------------------------------------------------------
function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');
            if (filterValue === 'all') {
                renderProjects(allProjects);
            } else {
                const filtered = allProjects.filter(p => p.category === filterValue);
                renderProjects(filtered);
            }
        });
    });
}

// --------------------------------------------------------------------------
// KHỞI ĐỘNG CÁC MODULE TRÊN TRANG (DOM CONTENT LOADED)
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // 1. Kích hoạt hiệu ứng gõ chữ Typewriter
    const typewriterElement = document.getElementById('typewriter-text');
    if (typewriterElement) {
        const words = ["Sinh Viên AI & Kỹ Sư Phần Mềm", "Chuyên Gia Web Frontend", "Đam Mê Trí Tuệ Nhân Tạo"];
        new Typewriter(typewriterElement, words, 2200);
    }

    // 2. Khởi tạo điều khiển giao diện Theme
    initThemeController();

    // 3. Khởi tạo menu di động Mobile First
    initMobileNavigation();

    // 4. Tải dữ liệu dự án (Google Sheets Engine)
    fetchProjectsFromGoogleSheets(null);

    // 5. Khởi tạo chức năng lọc dự án Bài 6
    initProjectFilter();

    // 6. Khởi tạo AOS Scroll Animation
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 750,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50
        });
    }
});

