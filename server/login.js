var Client = require('node-rest-client').Client;
var session = require('express-session');
import constants from './constant'

export default {
	jsonHeader: {
		"Authorization": "Basic aWRtVHJhbnNwb3J0VXNlcjppZG1UcmFuc3BvcnRVc2Vy",
		"Content-Type": "application/json",
		"Accept": "application/json"
	},
	login: function() {
		console.log('In Login.login()');
		return new Promise((resolve, reject) => {
			var client = new Client();
			var args = {
				data: {
					'return_uri': 'http://localhost:9000/login/authenticate',
					'support_error_callback': true
				},
				headers: this.jsonHeader
			};
			let url = constants.getRequestTokenUrl();
			console.log('Requesting request token from IdM server');
			client.post(url, args, function(data, response) {
				resolve(data);
			});
		});
	},
	getAndStoreAccessToken: function(req, resp) {
		var requestTokenId = decodeURIComponent(req.query.token);
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
			req.session.userName = data.user.username;
			req.session.tenantName = data.token.tenant.name;
			console.log('new token in session:'+req.session.accessToken);
			resp.redirect('http://localhost:9000/main');
		});
	}
}