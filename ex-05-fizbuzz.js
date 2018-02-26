/**
 * fizzbuzz()
 *
 * write a function that returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "FizZBuzZ"
**/

console.log('===== Ex05 FizzBuzz =====')

// entra un numero X
// a cada numero a partir del 1 y hasta el numero X se le asignan valores:
	// if ~(n % 3 === 0) && ~(n % 5 === 0), n = '.' 
	// if (n % 3 === 0) && (n % 5 !== 0), n = 'fizz' 
	// if (n % 5 === 0) && (n % 3 !== 0), n = 'buzz'
	// if (n % 5 === 0) && (n % 3 === 0), n = 'FizZBuzZ'
// retorna una string

function fizzbuzz(x) {
	// generar un array
	let array = []
	let n = 0
	for (i = 0 ; i < x ; i++) {
		n = i + 1
		array.push(n)
	}
	let arrayFinal = []
	for ( i = 0 ; i < array.length ; i++) {
		// evaluar las condiciones
		let n = ''
		if ((array[i] % 3 !== 0) && (array[i] % 5 !== 0)) {
			n = '.'
		} else if ((array[i] % 3 === 0) && (array[i] % 5 !== 0)) {
			n = 'fizz'  
		} else if ((array[i] % 5 === 0) && (array[i] % 3 !== 0)) {
			n = 'buzz'
		} else if ((array[i] % 5 === 0) && (array[i] % 3 === 0)) {
			n = 'FizZBuzZ'
		}
		else n = 'error en algun lado'
		arrayFinal.push(n)	
	}
	// generar la string
	let stringFinal =  ''
	stringFinal = arrayFinal.join('')
	return stringFinal
}
const printEx05 = fizzbuzz(30)
console.log(printEx05)

/**
 * Ex. fizzbuzz(3) === "..fizz"
 *
 * For 1 returns .
 * For 2 returns .
 * For 3 returns fizz
 * Result: ..fizz
 */



console.log("[1] Should return '..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ'");
console.assert(fizzbuzz(1) === ".")
console.log("====================================================================================================");
console.log();

console.log("[2] Should return '..")
console.assert(fizzbuzz(2) === "..")
console.log("====================================================================================================");
console.log();

console.log("[3] Should return '..fizz")
console.assert(fizzbuzz(3) === "..fizz")
console.log("====================================================================================================");
console.log();

console.log("[4] Should return '..fizz.buzz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.log("====================================================================================================");
console.log();

console.log("[5] Should return '..fizz.buzzfizz..fizzbuzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")
console.log("====================================================================================================");
console.log();

console.log("[6] Should return '..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.")
console.assert(fizzbuzz(19) === "..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.")
console.log("====================================================================================================");
console.log();

console.log("[7] Should return '..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.buzz")
console.assert(fizzbuzz(20) === "..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.buzz")
console.log("====================================================================================================");
console.log();

console.log("[8] Should return '..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.buzzfizz..fizzbuzz.fizz")
console.assert(fizzbuzz(27) === "..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.buzzfizz..fizzbuzz.fizz")
console.log("====================================================================================================");
console.log();

console.log("[9] Should return '..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ")
console.assert(fizzbuzz(30) === "..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ")
console.log("====================================================================================================");

