let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function Circle(x, y, speedx, speedy, rad) {
    this.x = x;
    this.y = y;
    this.speedx = speedx;
    this.speedy = speedy;
    this.rad = rad;

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
        c.fillStyle = 'white';
        c.stroke();
        c.fill();
    };

    this.update = function(){
        if(this.x + this.rad > innerWidth || this.x - this.rad < 0){
            this.speedx = -this.speedx;
        }
        
        if(this.y + this.rad > innerHeight || this.y - this.rad < 0){
            this.y = 3;
        }
    
        this.x += this.speedx;
        this.y += this.speedy;

        this.draw();
    };
}

const circleArray = [];

for(let i = 0; i < 250; i++){
    let rad = 2;                                                //promien
    let x = Math.random() * (innerWidth - rad * 2) + rad;       //pozycja startowa x,y koła
    let y = 10;                                             
    let speedx = (Math.random() - 0.5) * 2;                     //predkosc po osi X - porusza sie X pixeli na sekunde po osi X
    let speedy = (Math.random())* 2;                            //predkosc po osi Y - porusza sie Y pixeli na sekunde po osi Y
    circleArray.push(new Circle(x, y, speedx, speedy, rad));
}

function animation() {
    requestAnimationFrame(animation);
    c.clearRect(0,0, innerWidth, innerHeight); 

    for(let i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
}

animation();