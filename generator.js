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

uppercaseGen()
uppercaseGen()
uppercaseGen()
uppercaseGen()
uppercaseGen()
uppercaseGen()
uppercaseGen()
numberGen()
numberGen()
numberGen()
numberGen()
numberGen()
numberGen()
numberGen()
numberGen()
symbolGen()
symbolGen()
symbolGen()
symbolGen()
symbolGen()
symbolGen()
symbolGen()
symbolGen()
symbolGen()
symbolGen()
symbolGen()
symbolGen()
symbolGen()
