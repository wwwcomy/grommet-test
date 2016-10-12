var Client = require('node-rest-client').Client;
var session = require('express-session');
import constants from './constant'

export default {
	jsonHeader: {
		"Authorization": "Basic aWRtVHJhbnNwb3J0VXNlcjppZG1UcmFuc3BvcnRVc2Vy",
		"Content-Type": "application/json",
		"Accept": "application/json"
	},
	login: function(cb, resp) {
		var client = new Client();
		var args = {
			data: {
				'return_uri': 'http://localhost:8000/login/authenticate',
				'support_error_callback': true
			},
			headers: this.jsonHeader
		};
		let url = constants.getRequestTokenUrl();
		client.post(url, args, function(data, response) {
			cb(data, resp);
		});
	},
	getAndStoreAccessToken: function(req, resp) {
		var requestTokenId = decodeURIComponent(req.query.token);
		console.log(requestTokenId);

		var client = new Client();
		var args = {
			data: {
				'request_token': requestTokenId
			},
			headers: this.jsonHeader
		};
		let url = constants.getAccessTokenUrl();
		client.post(url, args, function(data, response) {
			req.session.accessToken = data.token.id;
			resp.redirect('http://localhost:8000/main');
		});
	}
}