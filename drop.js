'use strict'
const electron = require('electron');

const holder = document.getElementById(TrackerGoogleMap.defaultMapName());

holder.ondragover = () => {
    return false;
};

holder.ondragleave = holder.ondragend = () => {
    return false;
};

holder.ondrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    console.log('File you dragged is ', file.path);
    TrackerJSON.loadJSON(file.path, function(objects){
        TrackerGoogleMap.createPathFromFile(objects);
    });
    return false;
};

