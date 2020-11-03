const inptKey = document.querySelector('#inptKey');
const inptValue = document.querySelector('#inptValue');
const btnInsert = document.querySelector('#btnInsert');
const btnDelete = document.querySelector('#btnDelete');
const IsOutput = document.querySelector('#IsOutput');

btnDelete.onclick = function() {
    localStorage.clear();
};

btnInsert.onclick = function() {
    const key = inptKey.value;
    const value = inptValue.value;

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
    }
};

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    IsOutput.innerHTML += `${key}: ${value}<br><br>`; 
}