const rp = require("request-promise")
const app = (() => {
	const getAccessToken= async(accessHeaders,tokenParams) => {
		return rp.post({
			method : 'POST',
			uri: process.env.REDDIT_TOKEN_URL,
			body: 'grant_type=client_credentials',
			headers:{
				'Content-Type': 'application/x-www-form-urlencoded',
				'Authorization' : `Basic ` + Buffer.from(`${process.env.REDDIT_CLIENT_ID}:${process.env.REDDIT_CLIENT_SECRET}`).toString('base64')
			},
			json:true
		}).then(response => {
			console.log(response);
			return response;
		}).catch(err => {
			console.log(err);
			console.error(err.message);
		})
		 
	}

	return {
		getAccessToken
	}

})()

module.exports = app

