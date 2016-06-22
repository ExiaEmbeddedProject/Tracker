var defaultMapName = "map";
var map;
var infowindows = [];
var TrackerGoogleMap = function() {};

TrackerGoogleMap.defaultMapName = function() {
    return defaultMapName;
};

TrackerGoogleMap.initMap = function() {
    map = new google.maps.Map(document.getElementById(defaultMapName), {
        center: {lat: 19, lng: 72},
        zoom: 11
    });
};

TrackerGoogleMap.markCoordinates = function(lat, lng, title, contentString) {
    var marker = new google.maps.Marker({
        position: {lat: lat, lng: lng},
        map: map,
        title: title
    });
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    infowindows.push(infowindow);

    marker.addListener('click', function() {
        console.log(infowindows);
        infowindows.forEach(function name(iw) {
            if(iw) iw.close();
        })
        infowindow.open(map, marker);
    });
};

TrackerGoogleMap.mark = function(point, title, contentString) {
    return markCoordinates(point.lat, point.lng, title, contentString);
};

TrackerGoogleMap.createMarkedPointsFromObject = function(object)
{
    var markedPoints = [];
    for(var i = 0; i < object.length; i++)
    {
        markedPoints.push(TrackerGoogleMap.markCoordinates(object[i].lat, object[i].lng, object[i].title, object[i].info));
    }

    return markedPoints;
};

TrackerGoogleMap.createRichPathFromObject = function(objects)
{
    if(objects.path != undefined)
        this.createPathFromObject(objects.path);
    if(objects.markedPoints != undefined)
        this.createMarkedPointsFromObject(objects.markedPoints);
};

TrackerGoogleMap.createPathFromObject = function(points) {
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
TrackerGoogleMap.extractLatLon = function(jsonArray) {
    var result = [];
    jsonArray.forEach(function(el) {
        if (el.lat && el.lng){
            result.push(el);
        }
    });
    return result;
};


