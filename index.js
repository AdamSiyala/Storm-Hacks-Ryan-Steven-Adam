
const express = require("express");


const app = express()
const port = process.env.PORT || 8080;
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.get("/", (req, res) => res.render("index", {alot: "a lot"}));
app.listen(port, () => {
	console.log(`Node application listening on port ${port}`);
}); 



