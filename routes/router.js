const router = require('express').Router();



app.get("/", (req, res) => res.render("index", {alot: "a lot"}));