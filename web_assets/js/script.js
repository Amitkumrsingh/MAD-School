//---------------------------HEADER-------------------------------

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


// for sticky menu

window.addEventListener('scroll',function(){
    var header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY>0);           
});



// Event listener to handle scrolling
//window.addEventListener('scroll', toggleNavbar);


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



//-----------------------------------------------------------------

//fav-button and like 
var heartButton = document.querySelector(".fa-heart");

$(".icon-heart .fav-count").on("click",function() {
    var total = parseInt($(this).html(), 10);
    if ($(this).parent().hasClass("active")) {
        total -= 1;
        heartButton.style.color = "#b1b1b1";

    } else {
        total += 1;
        heartButton.style.color = "#fddb00";
    }
    $(this).html(total);
    $(this).parent().toggleClass("active");
});

$(".icon-heart .fa-heart").on("click",function() {
    var total = parseInt($(this).parent().siblings(".fav-count").first().html(), 10);
    if ($(this).parent().parent().hasClass("active")) {
        heartButton.style.color = "#b1b1b1";
        total -= 1;
    } else {
        heartButton.style.color = "#fddb00";
        total += 1;
    }
    $(this).parent().siblings(".fav-count").first().html(total);
    $(this).parent().parent().toggleClass("active");
});


// function ToggleColorBtn(){
//     if(heartButton.style.color == "#b1b1b1"){
//         heartButton.style.color = "#fddb00";
//     }
//     else{
//         heartButton.style.color = "#b1b1b1";
//     }
// }


//-----------------Related Posts Carousel------------------


$('#relatedPostsCarousel').carousel({
    interval: 10000
})
  
$('#relatedPostsCarousel.carousel .carousel-item').each(function(){
    var i = $(this).next();      
    for (var n = 0; n < 2; n++)(i = i.next()).length ||
    (i = $(this).siblings(":first")),
    i.children(":first-child").clone().appendTo($(this))
});
  
