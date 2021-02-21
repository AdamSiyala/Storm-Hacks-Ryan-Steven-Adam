console.log("hello")
var locat = { lat: 49.24890826962529, lng: -122.98049837083043 };
// const geoLoc = navigator.geolocation
// geoLoc.getCurrentPosition((position) => {
//     if (position) location = { lat: position.coords.latitude, lng: position.coords.longitude }
// });
var GeoMap = /** @class */ (function () {
    function GeoMap() {
    }
    GeoMap.prototype.geoMaker = function () {
        console.log("yes");
        this._googleMaps = new google.maps.Map(document.getElementById("map"), {
            center: locat,
            zoom: 10
        });
    };
    return GeoMap;
}());
var geo = new GeoMap();
geo.geoMaker();
    
