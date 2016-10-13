export default {
	idmBaseUrl: 'http://localhost:9090/idm-service/',
	idmRequestTokenSubUrl: '/idm/v0/api/token/request_token',
	idmLoginSubURL: 'idm/v0/login',
	idmAccessTokenSubUrl: '/idm/v0/api/token/access_token',
	getRequestTokenUrl: function() {
		return this.idmBaseUrl + this.idmRequestTokenSubUrl;
	},
	getLoginUrl: function() {
		return this.idmBaseUrl + this.idmLoginSubURL;
	},
	getAccessTokenUrl: function() {
		return this.idmBaseUrl + this.idmAccessTokenSubUrl;
	},
	getIdmBaseUrl: function() {
		return this.idmBaseUrl;
	},
	getRestLoginUrl: function() {
		return this.idmBaseUrl + "v2.0/tokens/";
	}
}