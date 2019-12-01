// Final Password El
const passwordEl = document.getElementById("password")

// Password Gen Element Grabbers
const lengthEl = document.getElementById("passLength")
const lowercaseEl = document.getElementById("lcLetterCheck")
const uppercaseEl = document.getElementById("ucLetterCheck")
const numbersEl = document.getElementById("numCheck")
const symbolsEl = document.getElementById("symbolsCheck")

// Button Elements
const generateEl = document.getElementById("generate")
const clipboardEl = document.getElementById("clipboard")

console.log(clipboardEl)

// Event Listener for Generation Click

generateEl.addEventListener("click", function () {
    //initialize viable characters
    var passwordOptions = '';

    //pull values from elements above
    let length = parseInt(lengthEl.value);
    let lowercase = lowercaseEl.checked;
    let uppercase = uppercaseEl.checked;
    let numbers = numbersEl.checked;
    let symbols = symbolsEl.checked;
    // strings for value options
    let poLower = 'abcdefghijklmnopqrstuvwxyz';
    let poUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let poNum = '0123456789';
    let poSym = '~!@#$%°^&*()-_+={}[]|/:;"<>.?';

    // Sets viable characters based upon checkboxes
    if (lowercase) {
        passwordOptions += poLower
    }
    if (uppercase) {
        passwordOptions += poUpper
    }
    if (numbers) {
        passwordOptions += poNum
    }
    if (symbols) {
        passwordOptions += poSym
    }

    console.log(passwordOptions)


})

// Generator Functions for random characters
// Lowercase, Uppercase, and Number gen uses unicode character charts.  
let lowercaseGen = function () {
    let letter = String.fromCharCode(Math.floor(Math.random()  * 26) + 97)
    console.log(letter)
}

let uppercaseGen = function () {
    let letter = String.fromCharCode(Math.floor(Math.random()  * 26) + 65)
    console.log(letter)
}

let numberGen = function () {
    let num = String.fromCharCode(Math.floor(Math.random()  * 10) + 48)
    console.log(num)
}

let symbolGen = function () {
    let symbolArr = [
        '~',
        '`',
        '!',
        '@',
        '#',
        '$',
        '%',
        '°',
        '^',
        '&',
        '*',
        '(',
        ')',
        '-',
        '_',
        '+',
        '=',
        '{',
        '}',
        '[',
        ']',
        '|',
        '/',
        ':',
        ';',
        '"',
        '<',
        '>',
        ',',
        '.',
        '?',        
    ]
    let symbol = symbolArr[Math.floor(Math.random()  * symbolArr.length)]
    console.log(symbol)
}

