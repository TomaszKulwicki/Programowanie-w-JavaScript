// <!-- 
// 1. stworzyć plik index.html i strukturę dokumentu
// 2. stworzyć przycisk w html
// 3. ostylować przycisk i kwadraty, które będę tworzone
// JAVASCRIPT
// 1. pobrać przycisk i podpiąć do niego nasłuchiwanie na click            
// 2. zadeklarować funkcję
// 3. w funkcji stworzyć element html (div)
// 4. dodać div do strony
// 5. stworzyć licznik i uzupełnić zawartość elementu div o wartość licznika
// 6. za pomocą instrukcji warunkowej stwierdzić czy dany element jest 5, jeśli tak nadać mu inną klasę 
// -->

const button = document.querySelector('button');        //1
button.addEventListener('click', klik);                 //1
let licznik = 1;                                        //5

function klik() {                                       //2
    const div = document.createElement('div');          //3

    document.body.appendChild(div);                     //4

    div.textContent = licznik;

    if(licznik % 5 == 0){                               //6
        div.classList.add('kolko');
    }
    licznik++;
    
}