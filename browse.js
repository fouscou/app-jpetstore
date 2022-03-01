import http from 'k6/http';
import { sleep, check } from 'k6';
import { parseHTML } from 'k6/html';

export const options = {
	stages: [
		{ duration: '3s', target: 2 },
		{ duration: '4s', target: 2},
		{ duration: '1s', target: 0 },
	],
}

const BASE_URL = 'http://192.168.70.115:8080';

let data = { 
	username: 'j2ee',
        password: 'j2ee'
}

export default function () {
	const res_home_page = http.get(BASE_URL);
	check(res_home_page, { 'status was 200': (r) => r.status == 200 });
	
	sleep(1);

	const res_login_page = http.get(BASE_URL+'/login');
	const content = parseHTML(res_login_page.body);
	const _csrf = content.find('body div section div form').html().substring(41,77);
	console.debug(_csrf);

	sleep(1);

	const res_user_page = http.post(BASE_URL+'/login', data);
}
