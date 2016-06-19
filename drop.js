'use strict'
const electron = require('electron');

const holder = document.getElementById(TrackerGoogleMap.defaultMapName());
const hover = document.getElementById(TrackerGoogleMap.defaultMapName() + "-hover");

holder.ondragover = () => {
    hover.className = "";
};

hover.ondragleave = holder.ondragend = () => {
    hover.className = "hidden";
};

hover.ondrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    console.log('File you dragged is ', file.path);
    TrackerJSON.loadJSON(file.path, function(objects){
        TrackerGoogleMap.createPathFromFile(objects);
    });
    return false;
};
