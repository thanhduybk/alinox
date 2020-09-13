import axios from "axios";
import { baseUrl } from "../constants/Constants";

export function list() {
	return axios({
		url: `${baseUrl}/classes`,
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	});
}