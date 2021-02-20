import fetch from "node-fetch";
import express from "express";
const app = express();

app.set('view engine', 'ejs');


interface GeoFeatures {
    attributes: Object;
    geometry: {
      x: number;
      y: number;
    };
  }
  
class Geo {
     geometry: GeoFeatures[] = [];
     private static readonly API_URL= 
            "https://gis.burnaby.ca/arcgis/rest/services/OpenData/OpenData3/MapServer/2/query?where=1%3D1&outFields=SHAPE&outSR=4326&f=json";
    private constructor(asyncData: any) {
        this.geometry = asyncData;
    }
    static build(): any {
        return Geo.fetchGeometry().then((json) => {
            return new Geo(json)
        })
    }

    static fetchGeometry(): Promise<GeoFeatures>{
        return fetch(this.API_URL, {
            method: "POST",
            headers: {
                "Content-type" : "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((json) => json.features)
            .catch((err) => console.log(err))
    }
} 

Geo.build().then((geoObj: Geo) => {
    geoObj.geometry.forEach((obj) => {
        console.log(obj.geometry.x, obj.geometry.y)
    })
});