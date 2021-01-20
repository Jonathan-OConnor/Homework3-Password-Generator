// Assignment Code
var passwordParameters = { "lowercase": false, "uppercase": false, "number": false, "special": false }
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialList = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"]
var passwordList = []
var generateBtn = document.querySelector("#saveChanges");

// Write password to the #password input
function toggleLowercase() {
  var checkBox = document.getElementById("lowercaseCheck")
  if (checkBox.checked == true) {
    passwordParameters["lowercase"] = true
  } else if (checkBox.checked == false) {
    passwordParameters["lowercase"] = false
  }
}

function toggleUppercase() {
  var checkBox = document.getElementById("uppercaseCheck")
  if (checkBox.checked == true) {
    passwordParameters["uppercase"] = true
  } else if (checkBox.checked == false) {
    passwordParameters["uppercase"] = false
  }
}

function toggleNumber() {
  var checkBox = document.getElementById("numberCheck")
  if (checkBox.checked == true) {
    passwordParameters["number"] = true
  } else if (checkBox.checked == false) {
    passwordParameters["number"] = false
  }
}

function toggleSpecial() {
  var checkBox = document.getElementById("specialCheck")
  if (checkBox.checked == true) {
    passwordParameters["special"] = true
  } else if (checkBox.checked == false) {
    passwordParameters["special"] = false
  }
}

function checkInputs() {
  var issues = false
  var length = Number(document.getElementById("passwordLength").value)
  if (length < 8 || length > 128) {
    // code for "display error message in modal" goes here
    issues = true
  }
  if (!Object.values(passwordParameters).includes(true)) {
    // code for "display error message in modal" goes here
    issues = true
  }

  if (issues == false) {
    writePassword();
  }
}


function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var password=""
  if (passwordParameters["lowercase"] == true) {
    for (var i = 0; i < lowercaseList.length; i++) {
      passwordList.push(lowercaseList[i])
    }
  }
  if (passwordParameters["uppercase"] == true) {
    for (var i = 0; i < uppercaseList.length; i++) {
      passwordList.push(uppercaseList[i])
    }
  }
  if (passwordParameters["number"] == true){
    for (var i=0; i < numberList.length; i++){
      passwordList.push(numberList[i])
    }
  }
  if (passwordParameters["special"] == true){
    for (var i=0; i < specialList.length; i++){
      passwordList.push(specialList[i])
    }
  }
  for (var i=0; i < Number(document.getElementById("passwordLength").value); i++){
    password= password + passwordList[Math.floor(Math.random() * passwordList.length)]
  }
  passwordList=[]
  return password
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", checkInputs);
