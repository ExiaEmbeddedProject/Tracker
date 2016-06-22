'use strict'
const electron = require('electron');

const holder = document.getElementById(TrackerGoogleMap.defaultMapName());
const hover = document.getElementById(TrackerGoogleMap.defaultMapName() + "-hover");
const img = document.getElementById("upload-icon");

holder.ondragover = (e) => {
  e.preventDefault();
    hover.className = "";
    return false;
};

hover.ondragleave = holder.ondragend = () => {
  e.preventDefault();
    hover.className = "hidden";
    return false;
};

img.ondrop = hover.ondrop = holder.ondrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    console.log('File you dragged is ', file.path);
    TrackerJSON.loadJSON(file.path, function(objects){
        TrackerGoogleMap.createRichPathFromObject(objects);
    });
    return false;
};
