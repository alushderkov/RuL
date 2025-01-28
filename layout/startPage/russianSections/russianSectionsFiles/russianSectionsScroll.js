const circle1 = document.getElementById("circle1");

circle1.onclick = function() {
    window.scrollTo({
        top: window.innerHeight, 
        behavior: 'smooth' 
    });
}

const Dots = document.getElementsByClassName('Dots')[0];

Dots.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}