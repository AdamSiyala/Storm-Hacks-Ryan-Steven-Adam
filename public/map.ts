


interface LatLng {
    lat: number,
    lng: number
}
var locat: LatLng = { lat: 49.24890826962529, lng: -122.98049837083043 }
// const geoLoc = navigator.geolocation

// geoLoc.getCurrentPosition((position) => {
//     if (position) location = { lat: position.coords.latitude, lng: position.coords.longitude }
// });

class GeoMap {
    private _googleMaps: google.maps.Map;
    constructor() {
        console.log("yes")
        this._googleMaps = new google.maps.Map(document.getElementById("map") as HTMLElement, {
          center: locat,
          zoom: 10,
        });
      }


}
const geo = new GeoMap()