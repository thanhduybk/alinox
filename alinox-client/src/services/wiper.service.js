import axios from "axios";
import { baseUrl } from "../constants/Constants";

export function list() {
	return axios({
		url: `${baseUrl}/wipers`,
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	});
}

export function create(payload) {
	return axios({
		url: `${baseUrl}/wipers`,
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

export function update(wiperId, payload) {
	return axios({
		url: `${baseUrl}/wipers/${wiperId}`,
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

export function destroy(wiperId) {
	return axios({
		url: `${baseUrl}/wipers/${wiperId}`,
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${sessionStorage.getItem("alinox_jwt")}`
		}
	});
}