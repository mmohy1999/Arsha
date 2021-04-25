//Define navbar icon
var navMenuIcon = document.getElementById('navMenuIcon');
// Define collapse list
var collapseList = Array.from(document.querySelectorAll('#sec-collapse .collapse-list button'));
//add event click to navbar toggle
navMenuIcon.addEventListener('click', toggleMenu);


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
        duration: 1000,
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