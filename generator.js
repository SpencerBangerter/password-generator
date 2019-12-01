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
    };
    if (uppercase) {
        passwordOptions += poUpper
    };
    if (numbers) {
        passwordOptions += poNum
    };
    if (symbols) {
        passwordOptions += poSym
    };


    // length alert for min/max or no number set
    // circumvents ability to manually enter numbers over the min/max

    if (length < 8 || length > 128 || !length) {
        alert("Password Length Must be between 8 and 128 Characters")
    };

    // Alert for at least one option must be picked

    if (!lowercase && !uppercase && !numbers && !symbols) {
        alert("You must select at least one option for password characters.")
    };

    // call the password generator function with the length and passwordOptions as arguments

    passwordEl.vaue = passGen(length, passwordOptions);
})


passGen = function (length, passwordOptions) {
    //Iniitalize final password as blank string
    let finalPass = '';

    //Append random character from the passwordOptions
    for (let i = 0; i<length; i++) {
        finalPass += passwordOptions.charAt(Math.floor(Math.random() * passwordOptions.length))
    };
    return finalPass;
}
// Legacy code from atCharCode attempt. Saving it for later in case I wanted to use it again.


// // Generator Functions for random characters
// // Lowercase, Uppercase, and Number gen uses unicode character charts.  
// let lowercaseGen = function () {
//     let letter = String.fromCharCode(Math.floor(Math.random()  * 26) + 97)
//     console.log(letter)
// }

// let uppercaseGen = function () {
//     let letter = String.fromCharCode(Math.floor(Math.random()  * 26) + 65)
//     console.log(letter)
// }

// let numberGen = function () {
//     let num = String.fromCharCode(Math.floor(Math.random()  * 10) + 48)
//     console.log(num)
// }

// let symbolGen = function () {
//     let symbolArr = [
//         '~',
//         '`',
//         '!',
//         '@',
//         '#',
//         '$',
//         '%',
//         '°',
//         '^',
//         '&',
//         '*',
//         '(',
//         ')',
//         '-',
//         '_',
//         '+',
//         '=',
//         '{',
//         '}',
//         '[',
//         ']',
//         '|',
//         '/',
//         ':',
//         ';',
//         '"',
//         '<',
//         '>',
//         ',',
//         '.',
//         '?',        
//     ]
//     let symbol = symbolArr[Math.floor(Math.random()  * symbolArr.length)]
//     console.log(symbol)
// }

