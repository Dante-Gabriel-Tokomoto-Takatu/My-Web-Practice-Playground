let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountainsBehind = document.getElementById('mountainsBehind');
let mountainsFront = document.getElementById('mountainsFront');
let text = document.getElementById('text');
let btn = document.getElementById('btn');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountainsBehind.style.top = value * 0.5 + 'px';
    mountainsFront.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
})


















