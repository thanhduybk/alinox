import axios from "axios";
import { baseUrl } from "../constants/Constants";

export function download(reportId) {
	return axios({
		url: `${baseUrl}/reports/${reportId}/download`,
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${sessionStorage.getItem("alinox_jwt")}`
		},
		responseType: "blob"
	});
}

export function destroy(reportId) {
	return axios({
		url: `${baseUrl}/reports/${reportId}`,
		method: "DELETE",
		headers: {
			"Authorization": `Bearer ${sessionStorage.getItem("alinox_jwt")}`
		}
	});
}

export function create(payload) {
	const formData = new FormData();

	let coloredArtworks = payload.coloredArtworks.map(item => JSON.stringify(item)).join("|");

	formData.append("materialId", payload.materialId);
	formData.append("printerId", payload.printerId);
	formData.append("colors", JSON.stringify(payload.colors));
	formData.append("customerName", payload.customerName);
	formData.append("customerCode", payload.customerCode);
	formData.append("customerProvince", payload.customerProvince);
	formData.append("customerCountry", payload.customerCountry);
	formData.append("productName", payload.productName);
	formData.append("productCode", payload.productCode);
	formData.append("productImage", payload.productImage);
	formData.append("ink", payload.ink);

	formData.append("coloredArtworks", `[${coloredArtworks}]`);

	formData.append("artworkResolution", payload.artworkResolution);
	formData.append("tram", payload.tram);
	formData.append("tramRotation", payload.tramRotation);
	formData.append("createdAt", payload.createdAt);

	return axios({
		url: `${baseUrl}/reports`,
		method: "POST",
		headers: {
			"Content-Type": "multipart/form-data",
			"Authorization": `Bearer ${sessionStorage.getItem("alinox_jwt")}`
		},
		data: formData
	});
}

export function list() {
	return axios({
		url: `${baseUrl}/reports`,
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${sessionStorage.getItem("alinox_jwt")}`
		}
	});
}