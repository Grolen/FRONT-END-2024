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

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
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
