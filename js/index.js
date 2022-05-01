const API_KEY="d2c902d6ac6326cbb6156dacfebcb420"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;

    var markers = [
        {
            position: new kakao.maps.LatLng(lat, lon)
        },
        {
            position: new kakao.maps.LatLng(lat, lon), 
            text: '텍스트를 표시할 수 있어요!' // text 옵션을 설정하면 마커 위에 텍스트를 함께 표시할 수 있습니다     
        }
    ];
    
    var staticMapContainer  = document.getElementById('staticMap'), // 이미지 지도를 표시할 div  
        staticMapOption = { 
            center: new kakao.maps.LatLng(lat, lon), // 이미지 지도의 중심좌표
            level: 3, // 이미지 지도의 확대 레벨
            marker: markers // 이미지 지도에 표시할 마커 
        };    
    
    // 이미지 지도를 생성합니다
    var staticMap = new kakao.maps.StaticMap(staticMapContainer, staticMapOption);
    var geocoder = new kakao.maps.services.Geocoder();

    searchAddrFromCoords(map.getCenter(), displayCenterInfo);

    // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록합니다
    kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
        searchDetailAddrFromCoords(mouseEvent.latLng, function(result, status) {
            if (status === kakao.maps.services.Status.OK) {
                var detailAddr = !!result[0].road_address ? '<div>도로명주소 : ' + result[0].road_address.address_name + '</div>' : '';
                detailAddr += '<div>지번 주소 : ' + result[0].address.address_name + '</div>';
                
                var content = '<div class="bAddr">' +
                                '<span class="title">법정동 주소정보</span>' + 
                                detailAddr + 
                            '</div>';
    
                // 마커를 클릭한 위치에 표시합니다 
                marker.setPosition(mouseEvent.latLng);
                marker.setMap(map);
    
                // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
                infowindow.setContent(content);
                infowindow.open(map, marker);
            }   
        });
    });
    
    // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시하도록 이벤트를 등록합니다
    kakao.maps.event.addListener(map, 'idle', function() {
        searchAddrFromCoords(map.getCenter(), displayCenterInfo);
    });
    
    function searchAddrFromCoords(coords, callback) {
        // 좌표로 행정동 주소 정보를 요청합니다
        geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);         
    }
    
    function searchDetailAddrFromCoords(coords, callback) {
        // 좌표로 법정동 상세 주소 정보를 요청합니다
        geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
    }
    
    // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
    function displayCenterInfo(result, status) {
        if (status === kakao.maps.services.Status.OK) {
            var infoDiv = document.getElementById('centerAddr');
    
            for(var i = 0; i < result.length; i++) {
                // 행정동의 region_type 값은 'H' 이므로
                if (result[i].region_type === 'H') {
                    infoDiv.innerHTML = result[i].address_name;
                    break;
                }
            }
        }    
    }


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


// 마커가 지도 위에 표시되도록 설정합니다
