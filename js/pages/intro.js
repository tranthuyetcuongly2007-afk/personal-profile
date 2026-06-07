/**
 * Intro Page - Trang Giới thiệu
 * 
 * ╔══════════════════════════════════════════════════╗
 * ║  HƯỚNG DẪN CHỈNH SỬA THÔNG TIN CÁ NHÂN:       ║
 * ║  Tìm object PERSONAL_INFO bên dưới và thay đổi  ║
 * ║  các giá trị theo thông tin thật của bạn.        ║
 * ╚══════════════════════════════════════════════════╝
 */

// ============================================================
// CHỈNH SỬA THÔNG TIN CÁ NHÂN TẠI ĐÂY
// ============================================================
const PERSONAL_INFO = {
  name: 'Trần Văn Thuyết',
  greeting: 'Xin chào, mình là',
  subtitle: 'Sinh viên Công nghệ Thông tin yêu thích lập trình, AI và thiết kế trải nghiệm web hiện đại.',
  typingLines: ['Building intelligent web experiences...', 'Learning AI responsibly...', 'Turning ideas into real products...', 'Exploring software engineering...'],

  // Thông tin cá nhân
  school: 'Trường Đại học Công nghệ - Đại học Quốc Gia Hà Nội',
  major: 'Công nghệ thông tin',
  year: 'Năm 1',
  email: '25020414@vnu.edu.vn',
  location: 'TP Hà Nội',

  // Giới thiệu bản thân
  bio: 'Mình là sinh viên năm nhất yêu thích lập trình và luôn hứng thú với việc xây dựng những sản phẩm kết hợp giữa công nghệ, sáng tạo và trải nghiệm người dùng. Mục tiêu của mình là trở thành một kỹ sư phần mềm không chỉ viết được code tốt mà còn tạo ra giá trị thực tế.',

  // Phương châm cá nhân
  quote: '"Không chỉ học để biết, mà học để tạo ra sản phẩm có giá trị."',
  quoteAuthor: '— Phương châm cá nhân',

  stats: [
    { value: '06+', label: 'Bài tập / dự án', icon: '🚀' },
    { value: '08+', label: 'Kỹ năng số', icon: '🧠' },
    { value: 'AI', label: 'Learning focus', icon: '🤖' },
  ],

  // Kỹ năng & công cụ
  skills: [
    { name: 'HTML/CSS', icon: '🌐', level: 70 },
    { name: 'JavaScript', icon: '⚡', level: 50 },
    { name: 'Python', icon: '🐍', level: 40 },
    { name: 'Git', icon: '📦', level: 55 },
    { name: 'AI Tools', icon: '🤖', level: 65 },
    { name: 'Figma', icon: '🎨', level: 45 },
  ],

  // Marquee items — infinite scroll content
  marqueeRow1: [
    { icon: '🌐', text: 'HTML / CSS', level: '70%' },
    { icon: '⚡', text: 'JavaScript', level: '50%' },
    { icon: '🐍', text: 'Python', level: '40%' },
    { icon: '📦', text: 'Git & GitHub', level: '55%' },
    { icon: '🤖', text: 'ChatGPT / AI', level: '65%' },
    { icon: '🎨', text: 'Figma', level: '45%' },
    { icon: '📊', text: 'Google Sheets', level: '60%' },
    { icon: '🖥️', text: 'VS Code', level: '70%' },
  ],
  marqueeRow2: [
    { icon: '🔍', text: 'Tìm kiếm thông tin', level: '75%' },
    { icon: '📝', text: 'Viết Prompt', level: '70%' },
    { icon: '👥', text: 'Làm việc nhóm', level: '65%' },
    { icon: '🎬', text: 'Tạo nội dung số', level: '60%' },
    { icon: '⚖️', text: 'AI có trách nhiệm', level: '70%' },
    { icon: '📁', text: 'Quản lý tệp tin', level: '80%' },
    { icon: '💡', text: 'Tư duy phản biện', level: '60%' },
    { icon: '🚀', text: 'Học hỏi liên tục', level: '90%' },
  ],

  // Quá trình học tập (timeline)
  goals: [
    {
      date: 'Bài tập 1',
      title: 'Thao tác với tệp tin và thư mục',
      desc: 'Làm quen với hệ thống, quản lý tệp tin và tổ chức cấu trúc thư mục khoa học.'
    },
    {
      date: 'Bài tập 2',
      title: 'Tìm kiếm & đánh giá thông tin',
      desc: 'Nâng cao kỹ năng khai thác internet, sử dụng cú pháp tìm kiếm nâng cao và kiểm chứng nguồn tin.'
    },
    {
      date: 'Bài tập 3',
      title: 'Viết Prompt hiệu quả với AI',
      desc: 'Học cách giao tiếp, thiết kế câu lệnh tối ưu để làm việc cùng AI hiệu quả.'
    },
    {
      date: 'Bài tập 4',
      title: 'Công cụ hợp tác trực tuyến',
      desc: 'Ứng dụng các nền tảng số để làm việc nhóm, chia sẻ dữ liệu và cộng tác trực tuyến.'
    },
    {
      date: 'Bài tập 5',
      title: 'Sáng tạo nội dung số với AI',
      desc: 'Sử dụng công nghệ AI để lên ý tưởng, thiết kế hình ảnh và sản xuất nội dung số đa phương tiện.'
    },
    {
      date: 'Bài tập 6',
      title: 'Sử dụng AI có trách nhiệm',
      desc: 'Hiểu về bản quyền, đạo đức AI, tính bảo mật dữ liệu và ứng dụng AI bền vững.'
    }
  ]
};

// ============================================================
// RENDER FUNCTIONS
// ============================================================

/**
 * Render a marquee row with duplicated items for infinite scroll
 */
function renderMarqueeRow(items, reverse = false) {
  const itemsHtml = items.map(item => `
    <div class="marquee-item">
      <span class="marquee-item__icon">${item.icon}</span>
      <span class="marquee-item__text">${item.text}</span>
      <span class="marquee-item__level">${item.level}</span>
    </div>
  `).join('');

  // Duplicate items for seamless loop
  return `
    <div class="marquee-row">
      <div class="marquee-track ${reverse ? 'marquee-track--reverse' : ''}">
        ${itemsHtml}
        ${itemsHtml}
      </div>
    </div>
  `;
}

export function renderIntroPage() {
  return `
    <!-- Hero Section (MS365 style) -->
    <section class="hero" id="hero-section">
      <div class="container">
        <div class="hero__content">
          <p class="hero__greeting reveal">
            <span class="wave">👋</span>
            <span>${PERSONAL_INFO.greeting}</span>
          </p>
          <h1 class="hero__name reveal text-plasma">
            ${PERSONAL_INFO.name}
          </h1>
          <p class="hero__subtitle reveal">
            ${PERSONAL_INFO.subtitle}
          </p>
          <div class="ai-terminal reveal">
            <div class="ai-terminal__top">
              <span></span><span></span><span></span>
              <strong>AI_PORTFOLIO.exe</strong>
            </div>
            <div class="ai-terminal__body">
              <span class="terminal-prefix">&gt;</span>
              <span id="typing-line" data-lines='${JSON.stringify(PERSONAL_INFO.typingLines)}'></span><span class="typing-caret">|</span>
            </div>
          </div>
          <div class="hero__cta reveal">
            <a href="#/projects" class="btn btn--primary btn--lg magnetic" id="cta-projects">
              Xem dự án
            </a>
            <a href="#/summary" class="btn btn--outline btn--lg magnetic" id="cta-summary">
              Tổng kết hành trình
            </a>
          </div>
          <div class="ai-stats reveal">
            ${PERSONAL_INFO.stats.map(stat => `
              <div class="ai-stat-card">
                <span>${stat.icon}</span>
                <strong data-count="${stat.value}">${stat.value}</strong>
                <small>${stat.label}</small>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="ai-hologram reveal reveal--right" aria-hidden="true">
          <div class="holo-core">AI</div>
          <div class="holo-ring holo-ring--1"></div>
          <div class="holo-ring holo-ring--2"></div>
          <div class="holo-node holo-node--1">01</div>
          <div class="holo-node holo-node--2">ML</div>
          <div class="holo-node holo-node--3">JS</div>
        </div>
        <div class="hero__decoration" aria-hidden="true">
          <div class="hero__orb hero__orb--1"></div>
          <div class="hero__orb hero__orb--2"></div>
          <div class="hero__orb hero__orb--3"></div>
        </div>
      </div>
    </section>

    <!-- Infinite Scrolling Marquee -->
    <section class="marquee-section" id="marquee-section">
      <p class="marquee-section__label">Kỹ năng & Công cụ</p>
      ${renderMarqueeRow(PERSONAL_INFO.marqueeRow1)}
      ${renderMarqueeRow(PERSONAL_INFO.marqueeRow2, true)}
    </section>

    <!-- AI Features Section -->
    <section class="section ai-lab-section" id="ai-lab-section">
      <div class="container">
        <div class="section__header reveal">
          <span class="section__label">AI Mode</span>
          <h2 class="section__title">Điểm nhấn đặc biệt</h2>
          <div class="divider"></div>
        </div>
        <div class="ai-feature-grid stagger-children">
          <div class="ai-feature-card reveal">
            <div class="ai-feature-card__icon">🧬</div>
            <h3>Neural Background</h3>
            <p>Nền trắng có mạng neuron, node động và dòng dữ liệu chạy nhẹ để tạo cảm giác AI nhưng không rối mắt.</p>
          </div>
          <div class="ai-feature-card reveal">
            <div class="ai-feature-card__icon">⌨️</div>
            <h3>Typing Terminal</h3>
            <p>Dòng lệnh tự gõ trong hero giúp portfolio có cảm giác đang “sống” thay vì chỉ là trang tĩnh.</p>
          </div>
          <div class="ai-feature-card reveal">
            <div class="ai-feature-card__icon">✨</div>
            <h3>Interactive Cursor</h3>
            <p>Di chuột có vòng sáng và các nút có hiệu ứng magnetic, làm web trông hiện đại hơn.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section" id="about-section">
      <div class="container">
        <div class="section__header reveal">
          <span class="section__label">Về mình</span>
          <h2 class="section__title">Giới thiệu bản thân</h2>
          <div class="divider"></div>
        </div>
        <div class="about-grid">
          <div class="about__avatar-wrapper reveal reveal--left">
            <div class="about__avatar-glow"></div>
            <img class="about__avatar" src="assets/images/profilepic.png" alt="Trần Văn Thuyết">
          </div>
          <div class="about__info">
            <p class="about__bio reveal">${PERSONAL_INFO.bio}</p>
            <div class="info-list reveal">
              <div class="info-item">
                <span class="info-item__icon">🏫</span>
                <span class="info-item__label">Trường</span>
                <span class="info-item__value">${PERSONAL_INFO.school}</span>
              </div>
              <div class="info-item">
                <span class="info-item__icon">📚</span>
                <span class="info-item__label">Ngành</span>
                <span class="info-item__value">${PERSONAL_INFO.major}</span>
              </div>
              <div class="info-item">
                <span class="info-item__icon">🎓</span>
                <span class="info-item__label">Năm</span>
                <span class="info-item__value">${PERSONAL_INFO.year}</span>
              </div>
              <div class="info-item">
                <span class="info-item__icon">📧</span>
                <span class="info-item__label">Email</span>
                <span class="info-item__value">${PERSONAL_INFO.email}</span>
              </div>
              <div class="info-item">
                <span class="info-item__icon">📍</span>
                <span class="info-item__label">Địa điểm</span>
                <span class="info-item__value">${PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quote Section -->
    <section class="section" id="quote-section">
      <div class="container">
        <div class="card card--glass quote-card gradient-border reveal reveal--scale">
          <div class="quote-card__icon">❝</div>
          <p class="quote-card__text">${PERSONAL_INFO.quote}</p>
          <p class="quote-card__author">${PERSONAL_INFO.quoteAuthor}</p>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="section" id="skills-section">
      <div class="container">
        <div class="section__header reveal">
          <span class="section__label">Kỹ năng</span>
          <h2 class="section__title">Công cụ & Kỹ năng</h2>
          <div class="divider"></div>
        </div>
        <div class="skills-grid stagger-children">
          ${PERSONAL_INFO.skills.map(skill => `
            <div class="skill-item reveal">
              <span class="skill-item__icon">${skill.icon}</span>
              <span class="skill-item__name">${skill.name}</span>
              <div class="skill-item__level">
                <div class="progress">
                  <div class="progress__bar" data-width="${skill.level}%"></div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Goals Timeline -->
    <section class="section" id="goals-section">
      <div class="container container--narrow">
        <div class="section__header reveal">
          <span class="section__label">Lộ trình</span>
          <h2 class="section__title">Quá trình học tập</h2>
          <div class="divider"></div>
        </div>
        <div class="timeline stagger-children">
          ${PERSONAL_INFO.goals.map(goal => `
            <div class="timeline__item reveal">
              <div class="timeline__dot"></div>
              <span class="timeline__date">${goal.date}</span>
              <h4 class="timeline__title">${goal.title}</h4>
              <p class="timeline__desc">${goal.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

/**
 * Post-render initialization for intro page
 * Animates progress bars after they become visible
 */
export function initIntroPage(pageElement) {
  // Animate progress bars when visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.width;
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });

  pageElement.querySelectorAll('.progress__bar').forEach(bar => {
    observer.observe(bar);
  });

  initTypingEffect(pageElement);
  initMagneticButtons(pageElement);
}

function initTypingEffect(pageElement) {
  const target = pageElement.querySelector('#typing-line');
  if (!target) return;
  const lines = JSON.parse(target.dataset.lines || '[]');
  let lineIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const line = lines[lineIndex] || '';
    target.textContent = line.slice(0, charIndex);

    if (!deleting && charIndex < line.length) {
      charIndex++;
      setTimeout(tick, 48);
    } else if (!deleting) {
      deleting = true;
      setTimeout(tick, 1150);
    } else if (charIndex > 0) {
      charIndex--;
      setTimeout(tick, 24);
    } else {
      deleting = false;
      lineIndex = (lineIndex + 1) % lines.length;
      setTimeout(tick, 260);
    }
  };
  tick();
}

function initMagneticButtons(pageElement) {
  pageElement.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', (event) => {
      const rect = btn.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px) translateY(-3px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}
