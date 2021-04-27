//Define navbar icon
var navMenuIcon = document.getElementById('navMenuIcon');
//Define Scroll To Top Btn
var scrollBtn = document.querySelector('.scroll-to-top');

// Define collapse list
var collapseList = Array.from(document.querySelectorAll('#sec-collapse .collapse-list button'));


//Hide Loading when page is loaded
$(window).on('load', () => {
    if ($('.page-load').length) {
      $('.page-load').delay(100).fadeOut('slow', ()=> {
        $(this).remove();
      });
    }
  });

//add event click to navbar toggle
navMenuIcon.addEventListener('click', toggleMenu);

//add event on scroll to scroll to top btn
window.onscroll = function () { showScrollToTop() };

//Function to show or hide scroll to top btn
function showScrollToTop() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }
}


//Jquery onclick action to scroll to top smoothly

$(".scroll-to-top").click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1500);
});


//function to open or close navbar 
function toggleMenu() {
    let toggle = document.querySelector('.toggle');
    let navList = document.querySelector('.navbar');

    toggle.classList.toggle('active');
    navList.classList.toggle('active');
}


// Init AOS Animation
function aos_init() {
    AOS.init({
        duration: 1500,
        once: true
    });
};


//Call Aos Init when page load
$(window).on('load', function () {
    aos_init();
});



// onclick on collapse btn
for (let i = 0; i < collapseList.length; i++) {
    collapseList[i].addEventListener('click', () => {
        let collapseIcon = collapseList[i].querySelector('i');
        if ( collapseList[i].classList.contains('collapsed'))
            collapseIcon.classList.replace('fa-sort-down', 'fa-sort-up')
        else
            collapseIcon.classList.replace('fa-sort-up', 'fa-sort-down')
    })
}