burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

function classlistToggle() {
    if (window.innerWidth <= 1140) {
        rightNav.classList.toggle('v-class-resp');
        navList.classList.toggle('v-class-resp');
        navbar.classList.toggle('h-nav-resp');
    }
}

burger.addEventListener('click', (e) => {
    e.preventDefault();
    classlistToggle();
    if (navList.classList.contains('v-class-resp')) {
        document.getElementById('text').style.display = 'inline-block';
    } else {
        document.getElementById('text').style.display = 'none';
    }

    if (document.getElementsByClassName('loader')[0].style.display == "none" && loaded != true) {
        document.getElementsByClassName('loader')[0].style.display = "inline-block";
    } else {
        document.getElementsByClassName('loader')[0].style.display = "none";
    }
})

function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
function enableScroll() {
    window.onscroll = function() {};
}