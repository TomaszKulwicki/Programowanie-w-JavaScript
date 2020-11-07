const images = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const zamknij = document.querySelector('#zamknij');
let prevImg;    //adresy sasiednich zdjec
let nextImg;    

for (let idx = 0; idx < images.length; idx++) {
    const img = images[idx];
    img.addEventListener('click', showLightbox);
}

function showLightbox(ev) {
    console.log('elo');
    const img = document.querySelector('#obrazeklight');
    const imgUrl = ev.target.src;
    img.src = imgUrl;
    lightbox.classList.add('visible');
    prevImg = ev.target.previousElementSibling; //przypisywanie adresow sasiednich zdjec
    nextImg = ev.target.nextElementSibling;     //
}

zamknij.addEventListener('click',hideLightbox);
function hideLightbox() {
    lightbox.classList.remove('visible');
}

next.addEventListener('click', function () 
{ 
    hideLightbox();
    if(nextImg){            
        nextImg.click();    //click powoduje pojawienie sie lightboxa
    }
    else
    { 
        images[0].click();  // sprawdzenie czy obecne zdjecie jest ostatnim  w kolejnosci, jesli tak to nastepuje zawiniecie
    }
}
);

prev.addEventListener('click', function () 
{
    hideLightbox();
    if(prevImg){
        prevImg.click();
    }
    else
    { 
        images[images.length - 1].click();  // sprawdzenie czy obecne zdjecie jest pierwszym  w kolejnosci, jesli tak to nastepuje zawiniecie do ostatniego
    }
}
);