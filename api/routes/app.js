const express = require("express")
const app = express()
const controller = require("../controller/app")
app.get("/",(req,res)=>{
	res.status(200).send({status : "Scrapper is up and running"})
})

app.get("/scrapeThreads",controller.scrapeThreads)

module.exports = app