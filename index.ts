
import express from "express";
import { Geo } from "./geo"
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.get("/", (req, res) => res.render("index", {alot: "a lot"}));


let geoArrayX: any[] = [];

Geo.build().then((geoObj: Geo) => {
    geoObj.geometry.forEach((obj: any) => {
        geoArrayX.push({x: obj.geometry.x, y: obj.geometry.y});
    })
});