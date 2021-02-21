import {geoArray} from '../geo'


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
    geoMaker() {
        console.log("yes")
        this._googleMaps = new google.maps.Map(document.getElementById("map") as HTMLElement, {
          center: locat,
          zoom: 10,
        });
        
      }
      // markers() {
      //   console.log("fitsrarfgdg")
      //   geoArray.forEach((positionObj) => {
      //     new google.maps.Marker({ map: this._googleMaps, position: positionObj });
      //   })
        
      // }
    

}
const geo = new GeoMap()

  
  geo.geoMaker();
  // geo.markers();



export = null;