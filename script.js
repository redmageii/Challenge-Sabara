const demoBttn=document.querySelector('.btn.top a');
const demoBttn2=document.querySelector('.btn.intro-2 a');
const introBttn=document.querySelector('.btn.intro-1 a');
const missionBttn=document.querySelector('.btn-mission a');
const visionBttn=document.querySelector('.btn-vision a');
const valuesBttn=document.querySelector('.btn-values a');
btn_array=[demoBttn, demoBttn2, introBttn]
mvv_array=[missionBttn, visionBttn, valuesBttn]

btn_array.forEach(elem => {
    elem.addEventListener('mouseover', function() {
        elem.style.transition='all 0.5s';
        elem.style.color='white';
        elem.style.background='#07A3B2';
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

    if (elem==introBttn) {
        elem.style.transition='all 0.5s';
        elem.style.color='white';
        elem.style.background='#07A3B2';
        elem.style.border='2px solid #07A3B2';
    }

});
});

missionBttn.addEventListener('click', function() {
    missionBttn.style.background='#07A3B2';
    missionBttn.style.color='white';
    visionBttn.style.background='none';
    visionBttn.style.color='black'
    valuesBttn.style.background='none';
    valuesBttn.style.color='black'
});

valuesBttn.addEventListener('click', function() {
    valuesBttn.style.background='#07A3B2';
    valuesBttn.style.color='white';
    visionBttn.style.background='none';
    visionBttn.style.color='black'
    missionBttn.style.color='black'
    missionBttn.style.background='none';
});

visionBttn.addEventListener('click', function() {
    visionBttn.style.background='#07A3B2';
    visionBttn.style.color='white';
    valuesBttn.style.background='none';
    valuesBttn.style.color='black'
    missionBttn.style.color='black'
    missionBttn.style.background='none';
});


function ativarMissao() {
    const active=document.querySelector('.active');
    const valores=document.querySelector('.values');
    const visao=document.querySelector('.vision');
    const missao=document.querySelector('.mission');
    missao.style.display='flex'
    visao.style.display='none'
    valores.style.display='none'
    active.style.opacity='100%'
}

function ativarVisao() {
    const active=document.querySelector('.active');
    const valores=document.querySelector('.values');
    const visao=document.querySelector('.vision');
    const missao=document.querySelector('.mission');
    missao.style.display='none'
    visao.style.display='flex'
    valores.style.display='none'
    active.style.opacity='100%'

}

function ativarValores() {
    const active=document.querySelector('.active');
    const valores=document.querySelector('.values');
    const visao=document.querySelector('.vision');
    const missao=document.querySelector('.mission');
    missao.style.display='none'
    visao.style.display='none'
    valores.style.display='flex'
    active.style.opacity='100%'
}
