/**
 * Created by Fabio on 28/05/2017.
 */

/**
 * Assets
 * @type {{vowels: [*], consonants: [*]}}
 */
const assets = {
    vowels: ['a', 'e', 'i', 'o', 'u', 'y'],
    consonants: ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']
};

/**
 * Default option
 * @type {{digits: number, couples: number, randomUpper: boolean, numberPosition: string}}
 * @private
 */
let _opt = {
    digits: 4,
    couples: 4,
    randomUpper: false,
    numberPosition: 'end' // start|middle|end|random
};

/**
 * Return a random number
 * @param digits
 * @returns {number}
 */
function randomNumber(digits = 4) {
    if (typeof digits !== 'number')
        throw new Error('digits must be a number');

    let zero = '';
    for (let i = 0; i < digits - 1; i++)
        zero += '0';

    return Math.floor(parseInt(1 + zero) + Math.random() * parseInt(9 + zero));
}

/**
 * Extract a random item from an array
 * @param items
 * @returns {*}
 */
function randomItem(items) {
    if (typeof items !== 'object')
        throw new Error('items must be an array');

    return items[Math.floor(Math.random() * items.length)];
}

/**
 * Return random boolean
 * @returns {boolean}
 */
function randomBoolean() {
    return Math.random() >= 0.5;
}

/**
 * Generate password
 * @param opt
 * @returns {string}
 */
function generate(opt) {

    if (typeof opt === 'object')
        for (let i in opt) {
            if (opt.hasOwnProperty(i)) {
                _opt[i] = opt[i];
            }
        }

    if (typeof _opt.couples !== 'number')
        throw new Error('couples must be a number');

    if (typeof _opt.randomUpper !== 'boolean')
        throw new Error('randomUpper must be a boolean');

    if (typeof _opt.digits !== 'number')
        throw new Error('digits must be a number');

    if (typeof _opt.numberPosition !== 'string')
        throw new Error('numberPosition must be a string ("start" or "end")');

    let str = '', consonant, vowel;

    for (let i = 0; i < _opt.couples; i++) {
        consonant = randomItem(assets.consonants);
        vowel = randomItem(assets.vowels);
        if (_opt.randomUpper) {
            if (randomBoolean())
                consonant = consonant.toUpperCase();

            if (randomBoolean())
                vowel = vowel.toUpperCase();
        }
        str += consonant + vowel;
    }

    if (_opt.digits > 0) {
        if (_opt.numberPosition === 'start')
            str = randomNumber(_opt.digits) + str;
        else if (_opt.numberPosition === 'middle') {
            let startPos = Math.round(str.length / 2);
            let number = randomNumber(_opt.digits).toString();
            str = [str.slice(0, startPos), number, str.slice(startPos)].join('');
        } else if (_opt.numberPosition === 'random') {
            let startPos = Math.floor(Math.random() * (str.length + 1));
            let number = randomNumber(_opt.digits).toString();
            str = [str.slice(0, startPos), number, str.slice(startPos)].join('');
        } else if (_opt.numberPosition === 'end')
            str += randomNumber(_opt.digits);
        else
            throw new Error('numberPosition can be equal to "start" or "end"');
    }

    return str;
}

/**
 * Exports constructor
 * @type {generate}
 */
module.exports = generate;

/**
 * Exports for testing
 * @type {randomNumber}
 * @private
 */
module.exports._randomNumber = randomNumber;

/**
 * Exports for testing
 * @type {randomItem}
 * @private
 */
module.exports._randomItem = randomItem;

/**
 * Exports for testing
 * @type {randomBoolean}
 * @private
 */
module.exports._randomBoolean = randomBoolean;