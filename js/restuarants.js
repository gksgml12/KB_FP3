// 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
var infowindow = new kakao.maps.InfoWindow({zIndex:1});
const btn = document.querySelector('.btn btn-primary')

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };  

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 장소 검색 객체를 생성합니다
var ps = new kakao.maps.services.Places(map); 

// 카테고리로 은행을 검색합니다
ps.categorySearch(cate, placesSearchCB, {useMapBounds:true}); 

// 키워드 검색 완료 시 호출되는 콜백함수 입니다
function placesSearchCB (data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {
        for (var i=0; i<data.length; i++) {
            displayMarker(data[i]);    
        }       
    }
}

// 지도에 마커를 표시하는 함수입니다
function displayMarker(place) {
    // 마커를 생성하고 지도에 표시합니다
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x) 
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
    });
}

function restuarnatsListBtnClick(e) {
    e.preventDefault();
    var search = placeName.value
}

btn.addEventListener("submit",restuarnatsListBtnClick)

// MT1 대형마트
// CS2 편의점
// PS3 어린이집, 유치원
// SC4 학교
// AC5 학원
// PK6 주차장
// OL7 주유소, 충전소
// SW8 지하철역
// BK9 은행
// CT1 문화시설
// AG2 중개업소
// PO3 공공기관
// AT4 관광명소
// AD5 숙박
// FD6 음식점
// CE7 카페
// HP8 병원
// PM9 약국