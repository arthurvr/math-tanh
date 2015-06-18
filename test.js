'use strict';
var assert = require('assert');
var requireUncached = require('require-uncached');
var floatEqual = require('float-equal');

Math.tanh = undefined;
var mathTanh = require('./');

describe('tanh', function () {
	it('Should use the native method when possible', function () {
		Math.tanh = function () {
			return 'foo';
		};

		assert.equal(requireUncached('./')(), 'foo');
	});

	it('Should handle NaN by returning NaN', function () {
		assert.ok(isNaN(mathTanh(NaN)));
	});

	it('Should return +0 when passing +0', function () {
		assert.deepEqual(mathTanh(+0), 0);
	});

	it('Should return -0 when passing -0', function () {
		assert.deepEqual(mathTanh(-0), 0);
	});

	it('Should return 1 when passing infinity', function () {
		assert.deepEqual(mathTanh(Infinity), 1);
	});

	it('Should return -1 when passing -infinity', function () {
		assert.deepEqual(mathTanh(-Infinity), -1);
	});

	it('Should return the hyperbolic tangent', function () {
		assert(floatEqual(mathTanh(1), 0.7615941559557649));
		assert(floatEqual(mathTanh(-1), -0.7615941559557649));
		assert(floatEqual(mathTanh(.2), 0.19737532022490412));
		assert(floatEqual(mathTanh(-.2), -0.19737532022490412));
		assert.equal(mathTanh(30), 1);
		assert.equal(mathTanh(-50), -1);
	});
});
