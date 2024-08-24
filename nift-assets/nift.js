document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');

  menuToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // Close menu when clicking anywhere outside the menu
  document.addEventListener('click', (event) => {
    if (!navbarMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      navbarMenu.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });
});
