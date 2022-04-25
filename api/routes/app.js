const express = require("express")
const app = express()

app.get("/",(req,res)=>{
	res.status(200).send({status : "Scrapper is up and running"})
})

module.exports = app