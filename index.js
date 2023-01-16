const buttonEl = document.getElementById("button-el")
const inputEl = document.getElementById("input-el")

const lengthEl = document.getElementById("length") 
const volumeEl = document.getElementById("volume") 
const massEl = document.getElementById("mass") 

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/




buttonEl.addEventListener("click", function() {

    let number = inputEl.value

    let numberFeet = metersToFeet(inputEl.value)
    let numberMeters = feetToMeters(inputEl.value)
    lengthEl.innerText = `${number} meters = ${numberFeet} feet | ${number} feet = ${numberMeters} meters`

    let numberLiters = litersToGallons(inputEl.value)
    let numberGallons = gallonsToLiters(inputEl.value)
    volumeEl.innerText = `${number} liters = ${numberGallons} gallons | ${number} gallons = ${numberLiters} liters`
    
    let numberKilograms = poundsToKilograms(inputEl.value)
    let numberPounds = kilogramsToPounds(inputEl.value)
    massEl.innerText = `${number} kilograms = ${numberPounds} pounds | ${number} pounds = ${numberKilograms} kilograms`



})

function metersToFeet(number) {
    numberFeet = number * 3.281
    return numberFeet.toFixed(2)
}

function feetToMeters(number) {
    numberMeters = number / 3.281
    return numberMeters.toFixed(2)
}

function gallonsToLiters(number) {
    numberGallons = number * 0.264
    return numberGallons.toFixed(2)
}

function litersToGallons(number) {
    numberLiters = number / 0.264
    return numberLiters.toFixed(2)
}

function kilogramsToPounds(number) {
    numberPounds = number * 2.204
    return numberPounds.toFixed(2)
}

function poundsToKilograms(number) {
    numberKilograms = number / 2.204
    return numberKilograms.toFixed(2)
}
