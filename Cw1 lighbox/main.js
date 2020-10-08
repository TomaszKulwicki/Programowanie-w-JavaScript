const images = document.querySelectorAll('.gallery img');

for (let idx = 0; idx < images.length; idx++) {
    const img = images[idx];
    img.addEventListener('click', showLightbox);
}

function showLightbox(ev) {
    console.log(ev.target);
    const lightbox = document.querySelector('.lightbox');
    const img = document.querySelector('.lightbox img');
    const imgUrl = ev.target.src;
    img.src = imgUrl;
    lightbox.classList.add('visible');
    console.log('showlight');
}