
const express = require("express");
const router = 'routes/router';

const app = express()
const port = process.env.PORT || 8080;
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use('/',router);
app.listen(port, () => {
	console.log(`Node application listening on port ${port}`);
}); 



