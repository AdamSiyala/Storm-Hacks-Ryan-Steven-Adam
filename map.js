"use strict";
exports.__esModule = true;
var location = { lat: 49.24890826962529, lng: -122.98049837083043 };
var geoLoc = navigator.geolocation;
geoLoc.getCurrentPosition(function (position) {
    if (position)
        location = { lat: position.coords.latitude, lng: position.coords.longitude };
});
var GeoMap = /** @class */ (function () {
    function GeoMap() {
        console.log("yes");
        this._googleMaps = new google.maps.Map(document.getElementById("map"), {
            center: location,
            zoom: 10
        });
    }
    return GeoMap;
}());
var geo = new GeoMap();
