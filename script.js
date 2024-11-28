const demoBttn=document.querySelector('.btn.top a')
const demoBttn2=document.querySelector('.btn.intro-2 a')
const introBttn=document.querySelector('.btn.intro-1 a')
btn_array=[demoBttn, demoBttn2, introBttn]

btn_array.forEach(elem => {
    elem.addEventListener('mouseover', function() {
        elem.style.transition='all 0.5s';
        elem.style.color='white';
        elem.style.background='#07A3B2';
        elem.classList.add('bounce'); // Add bounce animation class
        if (elem==introBttn) {
            elem.style.transition='all 0.5s';
            elem.style.color='white';
            elem.style.background='#045E66';
            elem.style.border='2px solid #045E66';
        }
});

elem.addEventListener('mouseout', function() {
    elem.style.transition='all 0.5s';
    elem.style.color='black';
    elem.style.background='none';
    elem.classList.remove('bounce'); // Remove bounce animation class

    if (elem==introBttn) {
        elem.style.transition='all 0.5s';
        elem.style.color='white';
        elem.style.background='#07A3B2';
        elem.style.border='2px solid #07A3B2';
    }

});
});

window.addEventListener('resize', function() {
    console.log('Window resized to ' + window.innerWidth + 'x' + window.innerHeight);
});
