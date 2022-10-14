const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = []
let passTwo = []
let passwordOne = document.getElementById("passwordOne");
let passwordTwo = document.getElementById("passwordTwo");
let input = document.getElementById("input");

passwordOne.addEventListener("click", function () {
    navigator.clipboard.writeText(passOne.join(""));
    alert("Copied the text: " + passOne.join(""));
})

passwordTwo.addEventListener("click", function () {
    navigator.clipboard.writeText(passTwo.join(""));
    alert("Copied the text: " + passTwo.join(""));
})

// Generate random characters from the array
function randomLetter () {
    let randomNo = Math.floor(Math.random()*characters.length)
    return characters[randomNo]
}

function createPasswordOne(number) {
    for(let i = 0; i < number; i++) {
        passOne.push(randomLetter())
    }
    return passOne.join('')
}

function createPasswordTwo(number) {
    for(let i = 0; i < number; i++) {
        passTwo.push(randomLetter())
    }
    return passTwo.join('')
}

function generatePassword() {
    passOne = []
    passTwo = []
    let length;
    if (Number(input.value) > 1) {
        length = Number(input.value)
    } else {
        length = 1;
    }
    passwordOne.textContent = createPasswordOne(length)
    passwordTwo.textContent = createPasswordTwo(length)
    
}
