"use strict";
exports.__esModule = true;
exports.Geo = void 0;
var node_fetch_1 = require("node-fetch");
var Geo = /** @class */ (function () {
    function Geo(asyncData) {
        this.geometry = [];
        this.geometry = asyncData;
    }
    Geo.build = function () {
        return Geo.fetchGeometry().then(function (json) {
            return new Geo(json);
        });
    };
    Geo.fetchGeometry = function () {
        return node_fetch_1["default"](this.API_URL, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(function (response) { return response.json(); })
            .then(function (json) { return json.features; })["catch"](function (err) { return console.log(err); });
    };
    Geo.API_URL = "https://gis.burnaby.ca/arcgis/rest/services/OpenData/OpenData3/MapServer/2/query?where=1%3D1&outFields=SHAPE&outSR=4326&f=json";
    return Geo;
}());
exports.Geo = Geo;
