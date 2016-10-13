var Client = require('node-rest-client').Client;
var session = require('express-session');
import constants from '../constant'

export default {
	jsonHeader: {
		"Authorization": "Basic aWRtVHJhbnNwb3J0VXNlcjppZG1UcmFuc3BvcnRVc2Vy",
		"Content-Type": "application/json",
		"Accept": "application/json"
	},
	saveAccessToken: function(data) {
		console.log('' + data);
	},
	getAccessToken: function(cb, that) {
		var client = new Client();
		var args = {
			data: {
				"passwordCredentials": {
					"username": "admin",
					"password": "cloud"
				},
				"tenantName": "Provider"
			},
			headers: this.jsonHeader
		};
		let url = constants.getRestLoginUrl();
		client.post(url, args, function(data, response) {
			console.log('cb is ' + cb)
			cb.call(that, data);
		});
	},
	getOrgList: function(req, resp) {
		var client = new Client();
		let jsonHeader = this.jsonHeader;
		//jsonHeader['X-Auth-Token'] = req.session.accessToken;
		if (jsonHeader['X-Auth-Token'] != null) {
			console.log('123');
			get();
		} else {
			console.log('234');
			this.getAccessToken(this.geat, this);
		}
	},
	geat: function(data) {
		var client = new Client();
		console.log(data.token.id);
		this.jsonHeader['X-Auth-Token'] = data.token.id;
		var args = {
			headers: this.jsonHeader
		};
		client.get("http://localhost:9090/idm-service/api/scim/organizations", args, function(data1, response) {
			console.log(JSON.stringify(data1));
		});
	}

}