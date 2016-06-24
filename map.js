var remote = require('electron').remote;
var jsonPath = remote.getGlobal('jsonPath');
var map;

function initMap() {
    TrackerGoogleMap.initMap();

    navigator.geolocation.getCurrentPosition(geoSuccess);

    function geoSuccess(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;

        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: lat, lng: lng},
            zoom: 18
        });

        if(jsonPath) {
            TrackerJSON.loadJSON(jsonPath, function(objects) {
                TrackerGoogleMap.createRichPathFromObject(objects);
            });
        }
    }
}
