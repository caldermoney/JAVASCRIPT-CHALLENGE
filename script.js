// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password) {
    passwordText.value = password;
  }
}

function generatePassword() {
  var passwordLength = parseInt(prompt("How many character do you want in the password? (8 - 128 characters)"))
  if (!(passwordLength >= 8 && passwordLength <= 128)) {
    alert("The numbers must be between 8 - 128 characters")
    return
  }
  var lowerCaseLetters = "abcdefghijklmnopq";
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQ";
  var numericValuesHat = "0123456789";
  var specialCharacterHat = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var allCharacters = "";

  var lowerCase = confirm("Do you want lower case letter?");
  var upperCase = confirm("Do you want uppercase letter?");
  var numericValues = confirm("Do you want numeric values?");
  var specialCharacter = confirm("Do you want special characters?");
  
    if (lowerCase) {
      allCharacters += lowerCaseLetters;
    }
    if (upperCase) {
      allCharacters += upperCaseLetters;
    }
    if (numericValues) {
      allCharacters += numericValuesHat;
    }
    if (specialCharacter) {
      allCharacters += specialCharacterHat;
    }
    var password = "";

    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters[randomIndex];
    }
    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

