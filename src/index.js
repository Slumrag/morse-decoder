const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};
const toMorseChar = (str) =>
	str
		.replace(/10/g, '.')
		.replace(/11/g, '-')
		.replace(/\*{10}/, ' ')
		.replace(/[^\.\-\s]/g, '');

const toChar = (str) => (MORSE_TABLE[str] ? MORSE_TABLE[str] : str);

function decode(expr) {
	return expr
		.split(/([01\*]{10})/)
		.filter((item) => !!item)
		.map((item) => toMorseChar(item))
		.map((char) => toChar(char))
		.join('');
}

module.exports = {
	decode,
};
