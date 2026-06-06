  // 1. 抓取我們剛剛在 HTML 裡設定好的 ID
  const toggleBtn = document.getElementById('menu-toggle');
  const closeBtn = document.getElementById('menu-close');
  const collapseMenu = document.getElementById('navbar-collapse');
  const overlay = document.getElementById('menu-overlay');

  // 2. 寫一個打開選單的功能
  function openMenu() {
    collapseMenu.classList.add('is-open'); // 加上這個 class，CSS 就會讓它顯示
    document.body.style.overflow = 'hidden'; // 防止背景網頁滾動
  }

  // 3. 寫一個關閉選單的功能
  function closeMenu() {
    collapseMenu.classList.remove('is-open'); // 移除 class，CSS 就會讓它隱藏
    document.body.style.overflow = ''; // 恢復網頁滾動
  }

  // 4. 監聽點擊動作
  if (toggleBtn) {
    toggleBtn.addEventListener('click', openMenu);
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }
  if (overlay) {
    overlay.addEventListener('click', closeMenu); // 點擊黑色遮罩也能關閉
  }

  const sliders = document.querySelectorAll('.services__list, .blogs__list');

sliders.forEach(slider => {
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.style.cursor = 'grabbing';
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.style.cursor = 'auto';
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.style.cursor = 'auto';
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });
});


// =========================================
// Services Page: Tabs 動態切換內容邏輯
// =========================================
const serviceTabs = document.querySelectorAll('.service-tab');
const serviceContents = document.querySelectorAll('.service-content-block');

if (serviceTabs.length > 0) {
  serviceTabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      
      // 1. 防止 a 標籤預設的跳轉行為 (避免畫面閃爍或跳到頁面頂部)
      e.preventDefault(); 
      
      // 2. 拔除所有 Tab 的 active 狀態，並讓當前點擊的 Tab 亮起 (黑底白字)
      serviceTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      // 3. 抓取這個 Tab 身上綁定的 data-target 值 (例如: 'website')
      const targetName = this.getAttribute('data-target');
      
      // 4. 組合出對應的內容區塊 ID (例如: 'content-website')
      const targetContentId = 'content-' + targetName;

      // 5. 隱藏所有的內容區塊
      serviceContents.forEach(content => {
        content.classList.remove('active');
      });

      // 6. 找出對應的內容區塊，加上 active 讓它顯示並觸發 CSS 動畫！
      const targetContent = document.getElementById(targetContentId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
      
    });
  });
}


// =========================================
// Project Modal (彈出視窗互動邏輯)
// =========================================
const projectModal = document.getElementById('projectModal');
const closeModalBtn = document.getElementById('closeModalBtn');
// 抓取畫面上所有的「前往專案」按鈕
const openModalBtns = document.querySelectorAll('.project-card .btn');

if (projectModal && closeModalBtn) {
  
  // 1. 點擊「前往專案」打開 Modal
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault(); // 防止 a 標籤預設的跳轉行為
      projectModal.classList.add('active');
      document.body.classList.add('modal-open'); // 鎖定背景不讓它跟著滾動
    });
  });

  // 2. 點擊「X」關閉 Modal
  closeModalBtn.addEventListener('click', function() {
    projectModal.classList.remove('active');
    document.body.classList.remove('modal-open');
  });

  // 3. 點擊「黑色遮罩 (視窗外圍)」也能關閉 Modal，體驗更好！
  projectModal.addEventListener('click', function(e) {
    if (e.target === projectModal) {
      projectModal.classList.remove('active');
      document.body.classList.remove('modal-open');
    }
  });
}


// =========================================
// Services Page: FAQ 手風琴展開收合邏輯
// =========================================
const faqHeaders = document.querySelectorAll(".faq-header");

if (faqHeaders.length > 0) {
  faqHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const currentItem = header.parentElement;
      
      // 可選的進階體驗：如果你希望點開一個 FAQ 時，其他已打開的自動關閉，可以加上這段
      // document.querySelectorAll('.faq-item.active').forEach(item => {
      //   if(item !== currentItem) item.classList.remove('active');
      // });

      currentItem.classList.toggle("active");
    });
  });
}