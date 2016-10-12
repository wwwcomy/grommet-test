import Button from 'grommet/components/Button';
import { headers, buildQuery, processStatus } from 'grommet/utils/Rest';

export default class loginBtn extends Component {
	constructor() {
		super();
		this.startLogin = this.startLogin.bind(this);
	}

	startLogin() {
		const options = { method: 'GET', headers: { ...headers, Auth: _token };
		fetch(`/rest/index/resources${query}`, options)
	}

	render() {
		return ( <Button label = "Login" onClick = {this.startLogin} primary = {true} /> );
	}
}