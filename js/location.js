const API_KEY="d2c902d6ac6326cbb6156dacfebcb420"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#location p:first-Child")
        const weather = document.querySelector("#location p:nth-Child(2)")
        const location = document.querySelector("#location p:last-Child")
        city.innerText = `현재 위치: ${data.name}`;
        weather.innerText = `현재 날씨: ${data.weather[0].main} / 현재 온도: ${data.main.temp}`
        location.innerText= `위도: ${lat} / 경도: ${lon}`
        });
}

function onGeoError(){
    alert("Can't find you. No weather for ypu")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)