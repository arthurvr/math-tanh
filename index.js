'use strict';
module.exports = Math.tanh || function (num) {
	if (num === Infinity) {
		return 1;
	}

	if (num === -Infinity) {
		return -1;
	}

	return (Math.exp(num) - Math.exp(-num)) / (Math.exp(num) + Math.exp(-num));
};
