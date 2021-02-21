
import express from "express";
import { Geo } from "./geo"
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.get("/", (req, res) => res.render("index", {alot: "a lot"}));
app.listen(8080, () => {
	console.log("Node application listening on port 8080");
}); 


Geo.build().then((geoObj: Geo) => {
    geoObj.geometry.forEach((obj: any) => {
        console.log(obj.geometry.x, obj.geometry.y)
    })
});