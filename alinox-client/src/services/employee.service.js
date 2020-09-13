import axios from "axios";
import { baseUrl } from "../constants/Constants";

export function register(payload) {
	return axios({
		url: `${baseUrl}/employees`,
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		data: {
			...payload
		}
	});
}

export function addEmployee(payload) {
	return axios({
		url: `${baseUrl}/employees/add`,
		method: "POST",
		headers: {
			"Authorization": `Bearer ${sessionStorage.getItem("alinox_jwt")}`
		},
		data: {
			...payload
		}
	});
}

export function modifyRole(role, empId) {
	console.log("In service: " + role);
	return axios({
		url: `${baseUrl}/employees/${empId}/edit`,
		method: "PUT",
		headers: {
			"Authorization": `Bearer ${sessionStorage.getItem("alinox_jwt")}`
		},
		data: {
			role
		}
	});
}

export function list() {
	return axios({
		url: `${baseUrl}/employees`,
		method: "GET",
		headers: {
			"Authorization": `Bearer ${sessionStorage.getItem("alinox_jwt")}`
		}
	});
}