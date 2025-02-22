document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    window.scrollTo(top);
    document.querySelectorAll('.section').forEach((section) => {
      section.classList.remove('active');
    });

    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.classList.add('active');
    }
  });
});

const buttons = document.querySelectorAll('button:not(.hamburger)');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    if (button.classList.value === 'hamburger') {
    }
    document.querySelectorAll('.section').forEach((section) => {
      section.classList.remove('active');
    });
    const targetSection = document.querySelector(
      `#${button.innerHTML.toLowerCase()}`
    );
    if (targetSection) {
      targetSection.classList.add('active');
    }
  });
});

// Находим кнопку и сам navbar
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navbar = document.getElementById('navbar');

// При клике переключаем класс
hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('open');
  navbar.classList.toggle('active');
});

// Если хочешь закрывать меню при клике на ссылку
document.querySelectorAll('#navbar a').forEach((link) => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    hamburgerBtn.classList.remove('open');
  });
});
