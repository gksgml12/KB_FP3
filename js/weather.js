const API_KEY="d2c902d6ac6326cbb6156dacfebcb420"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#location p:first-Child")
        const weather = document.querySelector("#location p:nth-child(2)")
        const loc = document.querySelector("#location p:nth-child(3)")
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
        city.innerText = data.name;
        loc.innerText = `위도: ${lat}, 경도: ${lon}`
        });
}

function onGeoError(){
    alert("Can't find you. No weather for ypu")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)