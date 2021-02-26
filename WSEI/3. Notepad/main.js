const lskey = 'notes';
let notes = [];

document.querySelector('#dodawanie').addEventListener('click', onNewNote);

function onNewNote() {
    window.title = document.querySelector('#tytul').value;
    window.content = document.querySelector('#tresc').value;

    const note = {
        title: window.title,
        content: window.content,
        createDate: new Date()
    };
    notes.push(note);
    setItems();
}

function setItems(){
    localStorage.setItem(lskey, JSON.stringify(notes));
    window.location.reload();
}

const notesFromStorage = JSON.parse(localStorage.getItem(lskey));
notes = notesFromStorage.map( note => {
    note.createDate = new Date(note.createDate);
    return note;
});

for (let note of notes) {
    
    const htmlSection = document.createElement('section');
    const htmlTitle = document.createElement('h1');
    const htmlContent = document.createElement('p');
    const htmlDate = document.createElement('h4');

    htmlSection.classList.add('notatka');
    htmlTitle.innerHTML = note.title;
    htmlContent.innerHTML = note.content;
    htmlDate.innerHTML = note.createDate.toLocaleString();

    htmlSection.appendChild(htmlTitle);
    htmlSection.appendChild(htmlContent);
    htmlSection.appendChild(htmlDate);
    
    const main = document.querySelector('main');
    main.appendChild(htmlSection);

    const htmlRemove = document.createElement('button');
    htmlRemove.classList.add('remove');
    htmlRemove.innerHTML='Usuń';
    htmlSection.appendChild(htmlRemove);
}

let buttonsDelete = document.querySelectorAll('.remove');

for (let index = 0; index < buttonsDelete.length; index++) {
    buttonsDelete[index].addEventListener('click',removeChild);   
}

function removeChild(ev){   
    const target = ev.currentTarget;
    const parent = target.parentElement;
    const parentParent = parent.parentElement;
    const main = document.querySelector('main');
    let index = Array.prototype.indexOf.call(parentParent.children,parent);
    removeLocalStorage(index);
    main.removeChild(parent);
    window.location.reload();
}

function removeLocalStorage(index){
    notesFromStorage.splice(index,1);
    localStorage.setItem(lskey, JSON.stringify(notesFromStorage));
}