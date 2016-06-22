'use strict'
const electron = require('electron');

const holder = document.getElementById(TrackerGoogleMap.defaultMapName());

holder.ondragover = (e) => {
  e.preventDefault();
    holder.className = "trans";
    return false;
};

holder.ondragleave = holder.ondragend = (e) => {
  e.preventDefault();
    holder.className = "visible";
    return false;
};

holder.ondrop = (e) => {
    holder.className = "visible";
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    console.log('File you dragged is ', file.path);
    TrackerJSON.loadJSON(file.path, function(objects){
        TrackerGoogleMap.createRichPathFromObject(objects);
    });
    return false;
};
