
/**
 * toCamelCase()
 *
 * Write a `toCamelCase` function that takes a multi word string as an argument
 * and returns a string that follows camel case convention
 *
 */

console.log('===== Ex04 toCamelCase =====')

// entra una string multi-word
// sale una string con formato camelCase

function toCamelCase(multiWordString) {
	// hace minusculas todas las palabras del string
	multiWordStringLower = multiWordString.toLowerCase()
	// separa la string en array
	let arrayAnteString = []
	arrayAnteString = multiWordStringLower.split(' ')
	// a cada elemento array[i], a partir del array(antes multiWordString)[1] 
		// separarlo en array de letras 
		// hacer capital letter la primera letra
		// hacer string al array de letras 
	let stringTemporal = ''
	for (i = 1 ; i < arrayAnteString.length ; i++) {
		let wordAConvertirEnCamel = []
		wordAConvertirEnCamel = arrayAnteString[i].split('')
		// variable que conserva la letra inicial mayuscula
		letraInicialACase = wordAConvertirEnCamel[0].toUpperCase()
		// retira el primer elemento del array
		wordAConvertirEnCamel.shift()
		// inserta al inicio la variable con el valor de la letra inicial mayuscula
		wordAConvertirEnCamel.unshift(letraInicialACase)
		// convierte array a string
		let wordYaCamel = ""
		wordYaCamel = wordAConvertirEnCamel.join('')
		// prepararlo para agregarlo al string de salida
		stringTemporal += wordYaCamel 
	}
	let stringCamelCase = ''
	stringCamelCase = arrayAnteString[0] + stringTemporal
	return stringCamelCase
}
const printEx04 = toCamelCase('convert to HTML')
console.log(printEx04)




//~+~+~+~+~+~+~+~Don't Touch~+~+~++~+~+~+~+~+~+~+
console.log("[1] Should return 'fetchRecords'");
console.assert(toCamelCase("fetch records") === 'fetchRecords')
console.log("====================================");
console.log();

console.log("[2] Should return 'createTableRow'");
console.assert(  toCamelCase("create table row") === 'createTableRow'  )
console.log("====================================");
console.log();

console.log("[3] Should return 'convertToHtml'");
console.assert(  toCamelCase("convert to HTML") === 'convertToHtml'  )
console.log("====================================");
console.log();

console.log("[4] Should return 'getUserAccountId'");
console.assert(  toCamelCase("get user account ID") === 'getUserAccountId'  )
console.log("====================================");

