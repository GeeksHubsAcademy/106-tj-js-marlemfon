const saltoCanguro = require('./test01.js');

	test('SaltoCanguro with null', function () {
		var expected = -1;
		var result = saltoCanguro(null);
		expect(result).toEqual(expected);
	});

	test('SaltoCanguro with []', function () {
		var expected = -1;
		var result = saltoCanguro([]);
		expect(result).toEqual(expected);
	});

	test('SaltoCanguro with [1]', function () {
		var expected = 1;
		var result = saltoCanguro([1]);
		expect(result).toEqual(expected);
	});

	test('SaltoCanguro with [1, 2]', function () {
		var expected = 1;
		var result = saltoCanguro([1, 2]);
		expect(result).toEqual(expected);
	});

	test('SaltoCanguro with [1, 2, 2]', function () {
		var expected = 2;
		var result = saltoCanguro([1, 2, 2]);
		expect(result).toEqual(expected);
	});

	test('SaltoCanguro with [1, 2, 2, 9]', function () {
		var expected = 2;
		var result = saltoCanguro([1, 2, 2, 9]);
		expect(result).toEqual(expected);
	});

	
	test('SaltoCanguro with [1, 2, 2, 1, 10]', function () {
		var expected = 20;
		var result = saltoCanguro([1, 2, 2, 1, 10]);
		expect(result).toEqual(expected);
	});

	test('SaltoCanguro with [1, 2, 2, 1, 5, 7]', function () {
		var expected = 10;
		var result = saltoCanguro([1, 2, 2, 1, 5, 7]);
		expect(result).toEqual(expected);
	});

	test('SaltoCanguro with [1, 2, 2, 1, 7, 10, 45]', function () {
		var expected = 630;
		var result = saltoCanguro([1, 2, 2, 1, 7, 10, 45]);
		expect(result).toEqual(expected);
	});

	test('SaltoCanguro with [1, 2, 2, 1, 7, 10, 45, 2]', function () {
		var expected = 1260;
		var result = saltoCanguro([1, 2, 2, 1, 7, 10, 45, 0, 2]);
		expect(result).toEqual(expected);
	});

	test('SaltoCanguro with [10, 0, 5, 1, 2]', function () {
		var expected = 100;
		var result = saltoCanguro([10, 0, 5, 1, 2]);
		expect(result).toEqual(expected);
	});

	test('SaltoCanguro with [-5, 0, 5]', function () {
		var expected = -25;
		var result = saltoCanguro([-5, 0, 5]);
		expect(result).toEqual(expected);
	});

	test('SaltoCanguro with [2, 0, -2, 0, -2]', function () {
		var expected = 8;
		var result = saltoCanguro([2, 0, -2, 0, -2]);
		expect(result).toEqual(expected);
	});
