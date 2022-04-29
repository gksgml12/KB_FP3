const API_KEY="d2c902d6ac6326cbb6156dacfebcb420"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#location p:first-Child")
        const weather = document.querySelector("#location p:nth-Child(2)")
        const location = document.querySelector("#location p:nth-Child(3)")
        city.innerText = `현재 위치: ${data.name}`;
        weather.innerText = `현재 날씨: ${data.weather[0].main} / 현재 온도: ${data.main.temp}`;
        location.innerText= `위도: ${lat}  경도: ${lon}`
        });
}

function onGeoError(){
    alert("Can't find you. No weather for ypu")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(lat, lon), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

// var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
var moveLatLon = new kakao.maps.LatLng(lat, lon);
    
// 지도 중심을 이동 시킵니다
map.setCenter(moveLatLon);


var markerPosition  = new kakao.maps.LatLng(lat, lon);

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);