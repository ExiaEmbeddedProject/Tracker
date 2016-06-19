var remote = require('electron').remote;
var args = remote.getGlobal('args');
var map;

navigator.geolocation.getCurrentPosition(geoSuccess);

function geoSuccess(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: lat, lng: lng},
        zoom: 18
    });

    if(args[2]) {
        TrackerJSON.loadJSON(args[2], function(objects) {
            TrackerGoogleMap.createPathFromFile(objects);
        });
    }
}

function initMap() {
    TrackerGoogleMap.initMap();
}
