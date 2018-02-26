/**
*  encodeUrl()
*
*  Write a function to create valid url-encoded URL's from a normal string.
*
*  For example, the string 'you are cool!'
*  would be encoded in a URL as: 'you%20are%20cool%21'
*
*  the string '50% of $100'
*  would be encoded in a URL as: '50%25%20of%20%24100'
*
*  Here is an encoding chart for special characters.
*
*  space - %20
*  ! - %21
*  " - %22
*  $ - %24
*  % - %25
*  ' - %27
*
**/

console.log("===== Ex07 url-encoded URL's from a normal string. =====")

// entra un string
// se descompone en cada uno de sus elementos
	// queda un array
// cada elemento del array se sustituye de acuerdo al encoding chart
// array.join

function encodeURL(string) {
	let urlString = ''
	let primeroArray = []
	primeroArray = string.split('')
	for (i = 0 ; i < primeroArray.length ; i++) {
		let variableTemporal = ''
		if (primeroArray[i] === ' ') {
			variableTemporal = '%20'
		} 
		else if (primeroArray[i] === '!') {
			variableTemporal = '%21'
		} 
		else if (primeroArray[i] === '"') {
			variableTemporal = '%22'
		} 
		else if (primeroArray[i] === '$') {
			variableTemporal = '%24'
		} 
		else if (primeroArray[i] === '%') {
			variableTemporal = '%25'
		} 
		else if (primeroArray[i] === "'") {
			variableTemporal = "%27"
		} 
		else variableTemporal = primeroArray[i]
	urlString += variableTemporal
	}
	return urlString 
}
const printEx07 = encodeURL("20% of $100")
console.log(printEx07)




//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~


var encodedURL1 = encodeURL('this is great')
console.log("[1] Should return 'this%20is%20great'")
console.assert(encodedURL1 === 'this%20is%20great')
console.log("=================================================================================");
console.log();
//
var encodedURL2 = encodeURL('she said "there is no need for violence!"')
console.log("[2] Should return 'she%20said%20%22there%20is%20no%20need%20for%20violence%21%22'")
console.assert(encodedURL2 === 'she%20said%20%22there%20is%20no%20need%20for%20violence%21%22')
console.log("=================================================================================");
console.log();
//
var encodedURL3 = encodeURL("i'm all about the $")
console.log("[3] Should return 'i%27m%20all%20about%20the%20%24'")
console.assert(encodedURL3 === "i%27m%20all%20about%20the%20%24")
console.log("=================================================================================");
console.log();

var encodedURL4 = encodeURL("20% of $100")
console.log("[4] Should return '20%25%20of%20%24100'")
console.assert(encodedURL3 === "20%25%20of%20%24100")
console.log("=================================================================================");
console.log();

