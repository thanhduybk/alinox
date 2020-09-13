export function makeReadable(datetime) {
	return datetime.toLocaleString("en-us", {
		year: "numeric", month: "short",
		day: "numeric", hour: "2-digit", minute: "2-digit"
	});
}

export function makeReadableShort(datetime) {
	return datetime.toLocaleString("en-us", {
		year: "numeric", month: "short",
		day: "numeric"
	});
}