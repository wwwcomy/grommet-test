var Client = require('node-rest-client').Client;
var session = require('express-session');
import constants from '../constant';

export default {
	jsonHeader: {
		"Authorization": "Basic aWRtVHJhbnNwb3J0VXNlcjppZG1UcmFuc3BvcnRVc2Vy",
		"Content-Type": "application/json",
		"Accept": "application/json"
	},
	saveAccessToken: function(data) {
		console.log('' + data);
	},
	getOrgList: function(req, resp) {
		var client = new Client();
		//this.jsonHeader['X-Auth-Token'] = req.session.accessToken;
		if (this.jsonHeader['X-Auth-Token'] != null) {
			var args = {
				headers: this.jsonHeader
			};
			client.get("http://localhost:9090/idm-service/api/scim/organizations", args, function(orgData, response) {
				console.log('Got org list from IdM');
				resp.send(orgData);
			});
		} else {
			this.getAccessToken().then((accessToken) => {
				var client = new Client();
				this.jsonHeader['X-Auth-Token'] = accessToken;
				var args = {
					headers: this.jsonHeader
				};
				client.post("http://localhost:9090/idm-service/api/scim/organizations", args, function(orgData, response) {
					resp.send(orgData);
				});
			});
		}
	},
	createOrg: function(req, resp) {
		var client = new Client();
		this.jsonHeader['X-Auth-Token'] = req.session.accessToken;
		if (this.jsonHeader['X-Auth-Token'] != null) {
			var args = {
				data: req.body,
				headers: this.jsonHeader
			};
			client.post("http://localhost:9090/idm-service/api/scim/organizations", args, function(orgData, response) {
				resp.send(orgData);
			});
		} else {
			this.getAccessToken().then((accessToken) => {
				var client = new Client();
				this.jsonHeader['X-Auth-Token'] = accessToken;
				var args = {
					data: req.body,
					headers: this.jsonHeader
				};
				client.post("http://localhost:9090/idm-service/api/scim/organizations", args, function(orgData, response) {
					console.log('Got org list from IdM');
					resp.send(orgData);
				});
			});
		}
	},
	getOrgByNameOrId: function(orgNameOrId, req, resp) {
		var client = new Client();
		// this.jsonHeader['X-Auth-Token'] = req.session.accessToken;
		if (this.jsonHeader['X-Auth-Token'] != null) {
			var args = {
				headers: this.jsonHeader
			};
			client.get("http://localhost:9090/idm-service/api/scim/organizations/" + orgNameOrId, args, function(orgData, response) {
				console.log('Got org detail from IdM');
				resp.send(orgData);
			});
		} else {
			this.getAccessToken().then((accessToken) => {
				var client = new Client();
				this.jsonHeader['X-Auth-Token'] = accessToken;
				var args = {
					headers: this.jsonHeader
				};
				client.get("http://localhost:9090/idm-service/api/scim/organizations/" + orgNameOrId, args, function(orgData, response) {
					console.log('Got org detail from IdM');
					resp.send(orgData);
				});
			});
		}
	},
	getAccessToken: function(cb, that) {
		return new Promise((resolve, reject) => {
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
				resolve(data.token.id);
			});
		});
	}

}