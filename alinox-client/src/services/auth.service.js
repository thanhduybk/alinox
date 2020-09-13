import axios from "axios";
import { baseUrl } from "../constants/Constants";

export function login(username, password, orgCode) {
	return axios({
		url: `${baseUrl}/auth/login`,
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		data: {
			username, password, orgCode
		}
	});
}

export function myDetails() {
	return axios({
		url: `${baseUrl}/auth/me`,
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${sessionStorage.getItem("alinox_jwt")}`
		}
	});
}

export function logout() {
	sessionStorage.removeItem("alinox_jwt");
}