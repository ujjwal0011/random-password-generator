const passwordBox = document.getElementById('password')
const button = document.querySelector('.button')
const button2 = document.querySelector('.button2')
const img = document.querySelector('.img')
const lowerLetter = document.getElementById('letter')
const upperLetter = document.getElementById('capital')
const numberLetter = document.getElementById('number')
const numberLength = document.getElementById('length')
const specialLetter = document.getElementById('sym')

const length = 16
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lower = "abcdefghijklmnopqrstuvwxyz"
const num = "0123456789"
const symbol = "!@#$%^&*()_+=-<>?,./:'[]{}\`~"
const allChar = upper + lower + num + symbol

function createPassword(){
    let password = ""
    password += upper[Math.floor(Math.random() * upper.length)]

    password += lower[Math.floor(Math.random() * lower.length)]

    password += num[Math.floor(Math.random() * num.length)]

    password += symbol[Math.floor(Math.random() * symbol.length)]

    while(length > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)]
    }

    passwordBox.value = password
}

button.addEventListener('click', () => {
    createPassword()
})

function copyPassword() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}

img.addEventListener('click', () => {
    copyPassword()
})

function checkPassword(){
    var lowerCaseLetters = /[a-z]/g;
    if(passwordBox.value.match(lowerCaseLetters)){
        lowerLetter.style.color = '#019f55'
    } else{
        lowerLetter.style.color = '#cb3050'
    }

    var upperCaseLetters = /[A-Z]/g;
    if(passwordBox.value.match(upperCaseLetters)){
        upperLetter.style.color = '#019f55'
    } else{
        upperLetter.style.color = '#cb3050'
    }

    if(passwordBox.value.length >= 16){
        numberLength.style.color = '#019f55'
    } else{
        numberLength.style.color = '#cb3050'
    }

    var numbers = /[0-9]/g;
    if(passwordBox.value.match(numbers)){
        numberLetter.style.color = '#019f55'
    } else{
        numberLetter.style.color = '#cb3050'
    }

    var specialCharacters = /[^a-zA-Z0-9]/g
    if(passwordBox.value.match(specialCharacters)){
        specialLetter.style.color = '#019f55'
    } else{
        specialLetter.style.color = '#cb3050'
    }
}

button2.addEventListener('click', () => {
    if(passwordBox.value === ''){
        alert("Please Enter a password")
    }
    else{
        checkPassword()
    }
})