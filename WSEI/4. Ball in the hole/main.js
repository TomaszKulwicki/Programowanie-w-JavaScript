const hole = document.querySelector('#hole');
const ball = document.querySelector('#ball');
const winner = document.querySelector('#winner');
const timer = document.querySelector('#timer');
const startBtn = document.querySelector('#start');

window.addEventListener('deviceorientation',ballMove);
startBtn.addEventListener('click', randomize);

ball.style.visibility = 'hidden';
hole.style.visibility = 'hidden';
winner.style.visibility = 'hidden';
timer.style.visibility = 'hidden';

let BposX = 0;  //kula pozX
let BposY = 0;  //kukla pozY
let HposX = 0;  //dziura pozX
let HposY = 0;  //dziura pozY
let dX = 0;     //kula predkoscX
let dY = 0;     //kula predkoscY

function randomize(){
    HposX = Math.random() * window.innerWidth ;
    HposY = Math.random() * window.innerHeight;
    BposX = Math.random() * window.innerWidth;
    BposY = Math.random() * window.innerHeight;
    hole.style.left = HposX + 'px';
    hole.style.top = HposY + 'px';
    ball.style.left = BposX + 'px';
    ball.style.top = BposY + 'px';
    ball.style.visibility = 'visible';
    hole.style.visibility = 'visible';
    startBtn.style.visibility = 'hidden';
    winner.style.visibility = 'hidden';
    timer.style.visibility = 'visible';
    licznik();
}

function ballMove(event){
    dX = event.beta / 15;        //-180,180
    dY = event.gamma / 15;       //-90,90

    if(BposX + dX < window.innerWidth && BposX + dX > 0) {
        BposX += dX;
        ball.style.left = BposX + 'px';
    }
    if(BposY + dY < window.innerHeight && BposY + dY > 0) {
        BposY += dY;
        ball.style.top = BposY + 'px';
    }
    if((BposY - HposY) < 10 && (BposX - HposX) < 10)
    {
        win();
    }
}

function win(){
    ball.style.visibility = 'hidden';
    hole.style.visibility = 'hidden';
    winner.style.visibility = 'visible';
}

winner.addEventListener('click', again);

function again() {
    winner.style.visibility = 'hidden';
    startBtn.style.visibility = 'visible';
    timer.style.visibility = 'hidden';
}

//stoper

let startingMinutes = 0;
let time = startingMinutes * 60;

function licznik(){
    setInterval(updateCountdown, 1000); //clear interval do mziennej
}

const countdownEl = document.getElementById('timer');

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time++;
}
