const demoBttn=document.querySelector('.btn.top a')
btn_array=[demoBttn]

btn_array.forEach(elem => {
    elem.style.borderRadius='10px'
    elem.addEventListener('mouseover', function() {
        elem.style.transition='all 0.5s';
        elem.style.color='white';
        elem.style.background='#07A3B2';
});

elem.addEventListener('mouseout', function() {
    elem.style.transition='all 0.5s';
    elem.style.color='black';
    elem.style.background='none';
});

    
});

