export function obtainJwtToken() {
	return sessionStorage.getItem("alinox_jwt");
}

export function evictJwtToken() {
	return sessionStorage.removeItem("alinox_jwt");
}