"use strict";
exports.__esModule = true;
var express_1 = require("express");
var geo_1 = require("./geo");
var app = express_1["default"]();
var port = process.env.PORT || 8080;
app.use(express_1["default"].urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express_1["default"].static(__dirname + "/public"));
app.get("/", function (req, res) { return res.render("index", { alot: "a lot" }); });
app.listen(port, function () {
    console.log("Node application listening on port " + port);
});
var geoArrayX = [];
geo_1.Geo.build().then(function (geoObj) {
    geoObj.geometry.forEach(function (obj) {
        geoArrayX.push({ x: obj.geometry.x, y: obj.geometry.y });
    });
});
