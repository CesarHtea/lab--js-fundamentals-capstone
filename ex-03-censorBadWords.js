/**
 * censorBadWords()
 *
 * Write a function called censorBadWords()that returns
 * It should remove bad words in its input sentence and replace them with ****.
 *
 *
**/



console.log('===== Ex03 F*** Bad Words =====')
// entra un string
// censura string[i] if string[i] = alguna palabra de la badwordList, 
// retorna un string censurado
function censorBadWords(arrayBadWords, string) {
	// convierte string en array para tomar cada elemento y compararlo con la lista negra
	let arrayACensurar = string.split(' ')
	// comparar cada elemento del arrayCensurado con cada una de las palabras de la lista negra
	let nuevoArrayCensurado = []
	for (i = 0 ; i < arrayACensurar.length ; i++) {
		let palabrAprobada = ''
		for (index = 0 ; index < arrayBadWords.length ; index++) {
			if ( arrayACensurar[i] === arrayBadWords[index]) {
				palabrAprobada = "****"
			} else if ( (arrayACensurar[i] !== arrayBadWords[index]) 
						&& (palabrAprobada === "****") ) {
				palabrAprobada = "****"
			} else palabrAprobada = arrayACensurar[i]
		} 
		nuevoArrayCensurado.push(palabrAprobada)
	}
	resultadoStringCensurada = nuevoArrayCensurado.join(' ')
	return resultadoStringCensurada
	// regresar array a string
}
let arrayDeEntradaBadWords = ['heck', 'darn', 'dang', 'crappy', 'crud', 'crap', 'freaking']
let stringDeEntradaACensurar = 'here son, your crappy sandwich is on the dang plate'
const printEx03 = censorBadWords(arrayDeEntradaBadWords, stringDeEntradaACensurar) 
console.log(printEx03)


var badWordsList = ['heck', 'darn', 'dang', 'crappy', 'crud', 'crap', 'freaking']
var badWords2 = ['idiot',  'crap', 'freaking']

var censored1 = censorBadWords(badWordsList, "mom get the heck in here and bring me a darn sandwich")
var censored2 = censorBadWords(badWordsList, "here son, your crappy sandwich is on the dang plate")
var censored3 = censorBadWords(badWords2, "your freaking idiot dog left crap on my floor")

console.log("[1] Expected: 'mom get the **** in here and bring me a **** sandwich'");
console.assert( censored1 === "mom get the **** in here and bring me a **** sandwich")
console.log("=====================================================================");
console.log();

console.log("[2] Expected: 'here son, your **** sandwich is on the **** plate'");
console.assert( censored2 === "here son, your **** sandwich is on the **** plate")
console.log("=====================================================================");
console.log();

console.log("[3] Expected: 'your **** **** dog left **** on my floor'");
console.assert( censored3 === "your **** **** dog left **** on my floor")
console.log("=====================================================================");
