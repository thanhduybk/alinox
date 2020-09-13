import axios from "axios";
import { baseUrl } from "../constants/Constants";

export function list() {
	return axios({
		url: `${baseUrl}/materials`,
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	});
}

export function create(payload) {
	return axios({
		url: `${baseUrl}/materials`,
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

export function update(materialId, payload) {
	return axios({
		url: `${baseUrl}/materials/${materialId}`,
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

export function destroy(materialId) {
	return axios({
		url: `${baseUrl}/materials/${materialId}`,
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${sessionStorage.getItem("alinox_jwt")}`
		}
	});
}