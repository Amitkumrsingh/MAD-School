const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {

   menu.classList.toggle('active');

  menuToggle.classList.toggle('active');
});
// Close menu when clicking anywhere outside the menu
document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    menuToggle.classList.remove('active');
    menu.classList.remove('active');
  }
});

// // Get the navbar element
// const navbar = document.getElementById('navbar');

// // Function to toggle the visibility of the navbar
// function toggleNavbar() {
//   if (window.scrollY > 100) {
//     navbar.classList.add('visible');
//   } else {
//     navbar.classList.remove('visible');
//   }
// }


// for sticky menu

window.addEventListener('scroll', function() {
    var header = document.querySelector("header");
    var beBoldImg = document.querySelector(".be-bold-img");
    var freeCounselling = document.querySelector(".free-counselling");
    var socialMediaLinks = document.querySelector(".social-media-links");
    
    header.classList.toggle('sticky', window.scrollY > 0);
    beBoldImg.classList.toggle('sticky-beBold', window.scrollY > 0); // Replace 'sticky' with the class you want to toggle
    freeCounselling.classList.toggle('sticky-free', window.scrollY > 0); // Replace 'sticky' with the class you want to toggle
    socialMediaLinks.classList.toggle('sticky-social', window.scrollY > 0); // Replace 'your-class-name' with the class you want to toggle
});





// Event listener to handle scrolling
window.addEventListener('scroll', toggleNavbar);


// Get all elements with the class "menu-item"
const menuItems = document.querySelectorAll('.menu-item');

// Loop through each "menu-item" element
menuItems.forEach(menuItem => {
    // Find the submenu inside the current "menu-item"
    const submenu = menuItem.querySelector('.submenu');

    // Show submenu on hover
    menuItem.addEventListener('mouseenter', () => {
        submenu.style.display = 'block';
    });

    // Hide submenu when not hovering
    menuItem.addEventListener('mouseleave', () => {
        submenu.style.display = 'none';
    });
});
