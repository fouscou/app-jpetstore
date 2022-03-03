import  http  from 'k6/http';
import { sleep, check, group } from 'k6'
import { parseHTML } from 'k6/html';

export const options = {
	stages: [
		{ duration: '1m', target: 5 },
		{ duration: '4m', target: 5 },
		{ duration: '1m', target: 0 },
	],
}

const BASE_URL = 'http://192.168.70.115:8080';
const data_set = JSON.parse(open("./data.json"));

export default function () {

     group('Home Page', function() {
	const res_home_page = http.get(BASE_URL);	
	check(res_home_page, { 'status was 200': (r) => r.status == 200 });
     });


     sleep(Math.random()*30);


     group('Login', function() {
	const res_login_page = http.get(BASE_URL+'/login');
	const content = parseHTML(res_login_page.body);
	const _csrf = content.find('body div section div form').html().substring(41,77);
	
	let data = { "_csrf": _csrf, "username": data_set[0].username, "password": data_set[0].password };
	const res_user_page = http.post(BASE_URL+'/login', data);
	check(res_user_page, { 'status was 200' (r) => r.status == 200 });
	     
     });


    sleep(Math.random()*30);


    group('Choosing fish fish category cart', function() {
	const res_category_page = http.get(BASE_URL+'/catalog/categories/FISH');
	check(res_category_page, { 'status was 200': (r) => r.status == 200 });
     });

	
    sleep(Math.random()*30);


    group('Choosing fish product', function() {
	const res_fish_product_page = http.get(BASE_URL+'/catalog/products/FI-FW-01');
	check(res_fish_product_page, { 'status was 200': (r) => r.status == 200 });
    });
 

    sleep(Math.random()*30);

	
    group('Sign out', function() {
	const res_sign_out_page = http.get(BASE_URL+'/logout');
	check(res_sign_out_page, { 'status was 200': (r) => r.status == 200 });
    });
}
