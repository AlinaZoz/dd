
document.addEventListener('DOMContentLoaded', function() {
const menuToggle = document.getElementById('menu-toggle');
const overlay = document.getElementById('overlay');
const sidebarMenu = document.getElementById('sidebar-menu');
const closeBtn = document.querySelector('.close-btn');

// Открытие меню
menuToggle.addEventListener('click', function() {
document.body.classList.add('menu-open');
});

// Закрытие меню по клику на оверлей
overlay.addEventListener('click', function() {
document.body.classList.remove('menu-open');
});
});

document.addEventListener('DOMContentLoaded', function() {
    const lightBtn = document.getElementById('lightBtn');
    const darkBtn = document.getElementById('darkBtn');
    const body = document.body;

    // Проверяем сохраненную тему в localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      body.classList.add('dark-theme');
      updateButtonStates('dark');
    }

    // Обработчики кликов на кнопки
    lightBtn.addEventListener('click', function() {
      body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
      updateButtonStates('light');
    });

    darkBtn.addEventListener('click', function() {
      body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
      updateButtonStates('dark');
    });

    // Обновление состояния кнопок
    function updateButtonStates(theme) {
      if (theme === 'light') {
        lightBtn.classList.add('active-theme');
        darkBtn.classList.remove('active-theme');
      } else {
        lightBtn.classList.remove('active-theme');
        darkBtn.classList.add('active-theme');
      }
    }
  });