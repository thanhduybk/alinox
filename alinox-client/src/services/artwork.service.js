import axios from "axios";
import { baseUrl } from "../constants/Constants";

export function list() {
	return axios({
		url: `${baseUrl}/artworks`,
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	});
}

export function update(artworkId, payload) {
	return axios({
		url: `${baseUrl}/artworks/${artworkId}`,
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