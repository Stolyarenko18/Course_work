// BURGER BUTTON

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger-btn").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open")
    })
})


// HEADER REVEAL ON SCROLL TO TOP

let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containOut = () => header.classList.contains('out');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containOut() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('out');
    }
    else if(scrollPosition() < lastScroll && containOut()){
        //scroll up
        header.classList.remove('out');
    }

    lastScroll = scrollPosition();
})


// HORIZONTAL SCROLL

const scrollContainer = document.querySelector("#horizontal-scroll");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchor.getAttribute('href').substr(1)
        
        document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        })
    })
}
