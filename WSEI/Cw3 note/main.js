const notebtn = document.querySelector('#dodawanie');
const NoteContainer = document.querySelector('main');
const lskey = 'notes';

const notes = [];

const note = {
    tytul: '',
    tresc: '',
    createDate: new Date(),
};

localStorage.setItem(lskey, JSON.stringify(notes));
const notesFromLocalStorage = JSON.parse(localStorage.getItem(lskey));
console.log(notesFromLocalStorage);

const mappedNotes = notesFromLocalStorage.map( note => {
    note.createDate = new Date(note.createDate);
    return note;
});

notebtn.addEventListener('click', budowanie);

function budowanie(){
    const htmlNote = document.createElement('div');
    const htmlTitle = document.createElement('h1');
    const htmlContent = document.createElement('p');
    const htmlDate = document.createElement('h4');
    const htmlRemBtn = document.createElement('button');
    
    htmlTitle.innerHTML = note.title;
    htmlContent.innerHTML = note.content;
    htmlDate.innerHTML = note.createDate.toDateString();
    htmlRemBtn.innerHTML = 'Skasuj';

    
    htmlNote.classList.add('notatka');
    htmlNote.appendChild(htmlTitle);
    htmlNote.appendChild(htmlContent);
    htmlNote.appendChild(htmlDate);
    htmlNote.appendChild(htmlRemBtn);

    NoteContainer.appendChild(htmlNote);

    htmlRemBtn.addEventListener('click', kasowanie);

    function kasowanie() {
        NoteContainer.removeChild(htmlNote);
    }
}
notebtn.addEventListener('click', onNewNote);

function onNewNote() {
    const title = document.querySelector('#tytul').value;
    const content = document.querySelector('#tresc').value;
    console.log(title,content);
}