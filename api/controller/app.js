const lib = require("../lib/app")
const app = ( () => {

	const scrapeThreads = async (req,res) => {
		try{
			let accessHeaders = {
				Authorization : ""
			}
			let tokenParams = {
				'grant_type' : 'client_credentials'

			}
			await lib.getAccessToken(accessHeaders,tokenParams)
			return res.status(200).send()
		}catch(e){
			console.log("Error in scrapeThreads "+e);
		}

		
	}

	return {
		scrapeThreads

	}

})()

module.exports = app