'use strict';

module.exports = Math.tanh || function (num) {
	if (num === Infinity) {
		return 1;
	} else if (num === -Infinity) {
		return -1;
	} else {
		return (Math.exp(num) - Math.exp(-num)) / (Math.exp(num) + Math.exp(-num));
	}
};
