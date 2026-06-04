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
