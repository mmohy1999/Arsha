//Define navbar icon
var navMenuIcon = document.getElementById('navMenuIcon');
//add event click to navbar toggle
navMenuIcon.addEventListener('click' , toggleMenu);


//function to open or close navbar 
function toggleMenu(){
    let toggle = document.querySelector('.toggle');
    let navList = document.querySelector('.navbar');

    toggle.classList.toggle('active');
    navList.classList.toggle('active');
}

