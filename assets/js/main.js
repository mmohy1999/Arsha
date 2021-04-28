//Hide Loading when page is loaded
$(window).on('load', () => {
    if ($('.page-load').length) {
        $('.page-load').delay(100).fadeOut('slow', () => {
            $(this).remove();
        });
    }
});

//open or close navbar when icon clicked
$('#navMenuIcon').on('click', () => {
    $('.toggle').toggleClass('active');
    $('.navbar').toggleClass('active');
});



//show or hide scroll to top btn & change header background color
$(window).on('scroll' , () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('.scroll-to-top').css('display', 'flex');
        $('header').css('background', 'rgba(40, 58, 90, 0.9)');
    } else {
        $('.scroll-to-top').css('display', 'none');
        $('header').css('background', '#37517e');

    }
});


//active navbar Anchors when scroll

const listOfSections = $('section');

$(window).on('scroll',()=> {

    let currentPosition = $(this).scrollTop() + 220;

    listOfSections.each(function () {
        let sectionTop = $(this).offset().top,
            sectionBottom = sectionTop + $(this).outerHeight();

        if (currentPosition >= sectionTop && currentPosition <= sectionBottom) {
            if (currentPosition <= sectionBottom) {
                $('.navbar ul li a').removeClass('active');
            }
            $('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
        
    })
}
) 


//scroll To Section when nav anchor clicked
$('.navbar ul li a').on('click', function(event){
    event.preventDefault(); 
    
    let sectionID = $(this).attr('href');

    let sectionPosition = $(sectionID).offset().top - 75;


    //hide navbar in mobile and change navbar icon
    $('.navbar').removeClass('active');
    $('.toggle').removeClass('active');

    //scroll to section smoothly
    $('html , body').animate({
        scrollTop: sectionPosition
    },1100);
    
   
})



//scroll to top smoothly
$(".scroll-to-top").click(() => {
    $('html, body').animate({
        scrollTop: 0
    }, 1100);
});


// Init AOS Animation
$(window).on('load', () => {
    AOS.init({
        duration: 1500,
        once: true
    });
});



// Define collapse list
var collapseList = Array.from(document.querySelectorAll('#sec-collapse .collapse-list button'));

// onclick on collapse btn
for (let i = 0; i < collapseList.length; i++) {
    collapseList[i].addEventListener('click', () => {
        let collapseIcon = collapseList[i].querySelector('i');
        if (collapseList[i].classList.contains('collapsed'))
            collapseIcon.classList.replace('fa-sort-down', 'fa-sort-up')
        else
            collapseIcon.classList.replace('fa-sort-up', 'fa-sort-down')
    })
}