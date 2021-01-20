// Assignment Code
var passwordParameters= {"lowercase": false, "uppercase": false, "number": false, "special": false}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function toggleLowercase() {
  var checkBox= document.getElementById("lowercaseCheck")
  if (checkBox.checked == true){
    passwordParameters["lowercase"] = true
  } else if (checkBox.checked == false){
    passwordParameters["lowercase"] = false
  }
}

function toggleUppercase() {
  var checkBox= document.getElementById("uppercaseCheck")
  if (checkBox.checked == true){
    passwordParameters["uppercase"] = true
  } else if (checkBox.checked == false){
    passwordParameters["uppercase"] = false
  }
}

function toggleNumber() {
  var checkBox= document.getElementById("numberCheck")
  if (checkBox.checked == true){
    passwordParameters["number"] = true
  } else if (checkBox.checked == false){
    passwordParameters["number"] = false
  }
}

function toggleSpecial() {
  var checkBox= document.getElementById("specialCheck")
  if (checkBox.checked == true){
    passwordParameters["special"] = true
  } else if (checkBox.checked == false){
    passwordParameters["special"] = false
  }
}

function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
