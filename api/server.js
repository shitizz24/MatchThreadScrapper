const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const App = require("./routes/app")

app.use(cors())
app.use(bodyParser.json())
app.use(App)

app.listen(port = 8080,()=>{
	console.log("Server is running on port "+ port);

})