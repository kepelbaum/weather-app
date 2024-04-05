let temp = document.querySelector('.temp');
let cond = document.querySelector('.condition');
let wind = document.querySelector('.wind');
let hum = document.querySelector('.humidity');
let input = document.querySelector('input');
let img = document.querySelector('img');

async function request(city) {
    try {
    let link = 'http://api.weatherapi.com/v1/current.json?key=46523e6a6f0346c2bd412410240504&q=' + city;
    const response = await fetch(link, {mode: 'cors'});
    const result = await response.json();
    temp.textContent = city + ': ' + result.current.temp_c + 'C';
    hum.textContent = 'Humidity: ' + result.current.humidity + '%';
    wind.textContent = 'Wind: ' + result.current.wind_kph + 'kph';
    cond.textContent = result.current.condition.text;
    img.src = 'https:' + result.current.condition.icon;
    console.log(result);
    } catch (error) {
        console.log(error);
    }
}

request('Boston');

input.addEventListener('search', () => {
    request(input.value);
    input.value = '';
})