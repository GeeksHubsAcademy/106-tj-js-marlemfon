<p align="center">
    <img src="https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/logo.png" >	
</p>

    Considere el siguiente problema:

    Escriba un programa corto que permita calcular el producto de los elementos en posición par del array.
    
     N = 4 
    
         [2, 5, 8, 4, 10]
	i =   0  1  2  3  4

     Resultado
	 
         2 * 8 * 10 = 160


    En caso de que el array tenga un 'size' par, debe de contarse la última posición.
	En caso de que el array sea nulo o vacío, el resultado debe de dar -1. 
	El array no contiene valores nulos ni carácteres.   
    
    Se atiente al siguiente ejemplo:
   
    N = 1          N = 2          N = 3          N = 4               N = 5
      
        [6]        [6, 6]         [6, 6, 9]      [6, 6, 9, 0]      [6, 6, 9, 2, 4]        
                 
    Resultado:
 
	    6	       36	      54             0        	        216      
                                  
    

    En la carpeta 'test/test01.js' se encuentra el fichero con la definición de nuestro método vacío.
    
    El modus operandi de trabajo es el siguiente:
    
    Debes 'forkear' el proyecto a tu cuenta.
    Puedes hacer PR's ilimitadas e ir validando poco a poco la solución contra nuestro respositorio con CI.
    Puedes trabajar en local y subir la solución haciendo un PR a nuestro repositorio.
    Cuando se envíe la PR final, debes indicar el tiempo de dedicación y los intentos que has hecho.
    También puedes añadir un comentario para dar cualquier tipo de feedback.
    
    En caso de duda, revisa en el apartado de 'Referencias'.       
    


    [Suite Tests]
    
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
		var expected = 2;
		var result = saltoCanguro([1, 2]);
		expect(result).toEqual(expected);
	});

	test('SaltoCanguro with [1, 2, 2]', function () {
		var expected = 2;
		var result = saltoCanguro([1, 2, 2]);
		expect(result).toEqual(expected);
	});

	test('SaltoCanguro with [1, 2, 2, 9]', function () {
		var expected = 18;
		var result = saltoCanguro([1, 2, 2, 9]);
		expect(result).toEqual(expected);
	});

	
	test('SaltoCanguro with [1, 2, 2, 1, 10]', function () {
		var expected = 20;
		var result = saltoCanguro([1, 2, 2, 1, 10]);
		expect(result).toEqual(expected);
	});

	test('SaltoCanguro with [1, 2, 2, 1, 5, 7]', function () {
		var expected = 70;
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
		var result = saltoCanguro([1, 2, 2, 1, 7, 10, 45, 2]);
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


	PASS  test/suite.test.js
	√ SaltoCanguro with null (4ms)
	√ SaltoCanguro with []
	√ SaltoCanguro with [1] (1ms)
	√ SaltoCanguro with [1, 2] (1ms)
	√ SaltoCanguro with [1, 2, 2]
	√ SaltoCanguro with [1, 2, 2, 9]
	√ SaltoCanguro with [1, 2, 2, 1, 10] (1ms)
	√ SaltoCanguro with [1, 2, 2, 1, 5, 7]
	√ SaltoCanguro with [1, 2, 2, 1, 7, 10, 45]
	√ SaltoCanguro with [1, 2, 2, 1, 7, 10, 45, 2]
	√ SaltoCanguro with [10, 0, 5, 1, 2] (1ms)
	√ SaltoCanguro with [-5, 0, 5]
	√ SaltoCanguro with [2, 0, -2, 0, -2]


    Test Suites: 1 passed, 1 total
    Tests:       13 passed, 13 total
    Snapshots:   0 total
    Time:        3.722s
	Ran all test suites.


## Referencias

* [Tutorial - Testing Automatizado](https://github.com/GeeksHubsAcademy/2020-js-vanilla-testing-FFFF/blob/master/README.md)
