
const express = require("express");


const app = express()
const port = process.env.PORT || 8080;
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.get("/", (req, res) => res.render("index", {}));
app.get("\\?map=Open+the+map#", (req, res) => res.render("Map", {}));
app.listen(port, () => {
	console.log(`Node application listening on port ${port}`);
}); 



