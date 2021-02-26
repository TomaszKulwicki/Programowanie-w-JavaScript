const key = '0a4bf37408e0a67a97a26ff783fab464';
const contentbox = document.querySelector('#content');
const szukaj = document.querySelector('.miasto');
const lskey = 'Miasta';
let miasta = [];

miasta.push(...getIteams());

const content = {
    city: null, 
    country: null, 
    temp: null, 
    cloud: null, 
    wind: null, 
    id: null
};

function Lokacja(){
    return document.querySelector('#miasto').value;
}

szukaj.addEventListener('click', TakeData);

function TakeData(){
    let id = new Date().getTime();                              //dla id pobieramy date
    let city = Lokacja();                                       //dla city przypisujemy lokacja
    let data = {id: id, city: city};                           
    miasta.push(data);                                          //Dodanie danych do tablicy
    setIteams();                                                //Przekazanie tablicy do LS
    contentbox.innerHTML ='';
    miasta.forEach(element => GetWeather(element));   
}

miasta.forEach(element => GetWeather(element));

function GetWeather(element){  
    let weather = `https://api.openweathermap.org/data/2.5/weather?q=${element.city}&lang=pl&APPID=${key}`;

    fetch(weather)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            content.city = data.name;
            content.country = data.sys.country;
            content.temp = Math.floor((data.main.temp - 273.15), 2);
            content.cloud = data.clouds.all;
            content.wind = Math.floor(data.wind.speed);
            content.id = data.weather[0].icon;
            CreateDivWithInfo(element);
        });
}

function CreateDivWithInfo(element){
    const weatherbox = document.createElement('div');
    weatherbox.classList.add('weatherbox');
    contentbox.appendChild(weatherbox);

    let deleteButton = document.createElement('div');
    deleteButton.classList.add('deleteButton');
    weatherbox.appendChild(deleteButton);
    deleteButton.innerHTML = '<button>X</button>';

    const location = document.createElement('div');
    location.classList.add('location');
    weatherbox.appendChild(location);
    location.innerHTML = '<h1>' + content.city + ', ' + content.country + '</h1>';

    const temp = document.createElement('div');
    weatherbox.appendChild(temp);
    temp.innerHTML = 'Temperatura: ' + content.temp + ' &deg' + 'C';

    const info = document.createElement('div');
    weatherbox.appendChild(info);

    const cloud = document.createElement('div');
    cloud.classList.add('cloud');
    info.appendChild(cloud);
    cloud.innerHTML = 'Zachmurzenie: ' + content.cloud + '%';

    const wind = document.createElement('div');
    wind.classList.add('wind');
    info.appendChild(wind);
    wind.innerHTML = 'Wiatr: ' + content.wind + ' m/s';   

    const icon = document.createElement('img');
    icon.classList.add('icon');
    icon.src =  `http://openweathermap.org/img/wn/${content.id}@2x.png`;
    weatherbox.appendChild(icon);

    deleteButton.addEventListener('click', function W() {
        weatherbox.remove();
        usunMiasto(element.id);
    });
}

function usunMiasto(id) {
    for (let index = 0; index < miasta.length; index++) {
        if (miasta[index].id == id) {
            miasta.splice(index,1);
        }
    }
    setIteams();
}

function setIteams(){                                       //zapisywanie w local
    localStorage.setItem(lskey, JSON.stringify(miasta));
}

function getIteams(){                                       //odczytywanie z local
    const GetCity = localStorage.getItem(lskey);
    if (GetCity) {
        return JSON.parse(GetCity);
    }
    return[];
}

let i = 0;
while (i <= 100){
    console.log(i);
    i += 2;
}