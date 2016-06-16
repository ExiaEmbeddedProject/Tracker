'use strict'

var defaultMapName = "map";
var map;

var TrackerGoogleMap = function() {
};

TrackerGoogleMap.defaultMapName = function(){
    return defaultMapName;
};

TrackerGoogleMap.initMap = function() {
    map = new google.maps.Map(document.getElementById(defaultMapName), {
        center: {lat: 19, lng: 72},
        zoom: 11
    });
};

TrackerGoogleMap.markCoordinates= function(lat, lng, title){
    return new google.maps.Marker({
        position: {lat: lat, lng: lng},
        map: map,
        title: title
    });
};

TrackerGoogleMap.mark= function(point, title){
    return markCoordinates(point.lat, point.lng, title);
};

TrackerGoogleMap.createPathFromFile= function(points){
    var flightPath = new google.maps.Polyline({
        path: points,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 0.6,
        strokeWeight: 8
    });

    flightPath.setMap(map);
};

//use this function if you aren't sure about your json content.
TrackerGoogleMap.extractLatLon= function(jsonArray){
    var result = [];
    jsonArray.forEach(function(el){
        if (el.lat && el.lng){
            result.push(el);
        }
    });
    return result;
};