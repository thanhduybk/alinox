import axios from "axios";
import { baseUrl } from "../constants/Constants";

export function list() {
	return axios({
		url: `${baseUrl}/printers`,
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	});
}

export function create(payload) {
	return axios({
		url: `${baseUrl}/printers`,
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${sessionStorage.getItem("alinox_jwt")}`
		},
		data: {
			...payload
		}
	});
}

export function update(printerId, payload) {
	return axios({
		url: `${baseUrl}/printers/${printerId}`,
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${sessionStorage.getItem("alinox_jwt")}`
		},
		data: {
			...payload
		}
	});
}

export function destroy(printerId) {
	return axios({
		url: `${baseUrl}/printers/${printerId}`,
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${sessionStorage.getItem("alinox_jwt")}`
		}
	});
}