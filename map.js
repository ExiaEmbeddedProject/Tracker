var map;
var marker;

navigator.geolocation.getCurrentPosition(geoSuccess);

function geoSuccess(position){
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: lat, lng: lng},
        zoom: 8
    });

    marker = new google.maps.Marker({
        position: map.getCenter(),
        map: map,
        draggable: true
    });
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 19, lng: 72},
        zoom: 3
    });
}