import compression from 'compression'
import express from 'express'
import http from 'http'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import path from 'path'
import session from 'express-session'

import login from './login'
import constants from './constant'

const PORT = process.env.PORT || 8000;
const app = express();
app.use(compression());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(session({
	secret: 'recommand 128 bytes random string',
	cookie: {
		maxAge: 1800 * 1000
	}
}));

app.use('/', express.static(path.join(__dirname, '/../dist')));

app.get('/login/doLogin', (req, resp) => {
	login.login(function(data, resp) {
		var requestTokenResp = data;
		resp.redirect(constants.getLoginUrl() + '?tenant=Provider&token=' + encodeURIComponent(requestTokenResp.id));
	}, resp);
});

app.get('/login/authenticate', (req, resp) => {
	login.getAndStoreAccessToken(req, resp);
});

app.get('/*', (req, resp) => {
	console.log('Client visiting with token in session:' + req.session.accessToken);
	resp.sendFile(path.resolve(path.join(__dirname, '/../dist/index.html')));
});


const server = http.createServer(app);
server.listen(PORT);

console.log('Server started at : http://localhost:${PORT}');