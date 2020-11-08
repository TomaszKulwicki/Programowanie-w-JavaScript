const btn = document.querySelector('#dodawanie');

btn.addEventListener('click', createNote);

function createNote() {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.classList.add('notatka');
}