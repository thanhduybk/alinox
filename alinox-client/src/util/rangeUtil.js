function getMinimumValue(range) {
	return range ? range.split(" - ")[0] : 0;
}

function getMaximumValue(range) {
	return range ? range.split(" - ")[1] : Infinity;
}

function getValuesInRange(min, max, step) {
	const len = Math.floor((max - min) / step) + 1;
	return Array(len).map((_, index) => min + index * step);
}

export { getMinimumValue, getMaximumValue, getValuesInRange };