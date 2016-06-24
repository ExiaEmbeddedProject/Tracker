var TrackerJSON = function() {};
var fs = require('fs');

TrackerJSON.loadJSON = function(path, callback) {
    console.log('Loading markers & path from ' + path);
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            return console.log(err);
        }
        callback(JSON.parse(data));
    });
}
