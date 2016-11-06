import test from 'ava';
import floatEqual from 'float-equal';
import mathTanh from './';

test('Should handle NaN by returning NaN', t => {
	t.true(isNaN(mathTanh(NaN)));
});

test('Should return +0 when passing +0', t => {
	t.is(mathTanh(+0), 0);
});

test('Should return -0 when passing -0', t => {
	t.is(mathTanh(-0), 0);
});

test('Should return 1 when passing infinity', t => {
	t.is(mathTanh(Infinity), 1);
});

test('Should return -1 when passing -infinity', t => {
	t.is(mathTanh(-Infinity), -1);
});

test('Should return the hyperbolic tangent', t => {
	t.true(floatEqual(mathTanh(1), 0.7615941559557649));
	t.true(floatEqual(mathTanh(-1), -0.7615941559557649));
	t.true(floatEqual(mathTanh(0.2), 0.19737532022490412));
	t.true(floatEqual(mathTanh(-0.2), -0.19737532022490412));
	t.is(mathTanh(30), 1);
	t.is(mathTanh(-50), -1);
});
