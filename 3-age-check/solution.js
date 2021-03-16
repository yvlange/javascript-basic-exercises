alert("Welcome");
let userName = prompt("What's your name?");

let yearOfBirth = Number(prompt("What's your year of birth?"));
let age;
if (!Number(yearOfBirth)) {
  yearOfBirth = 2021;
}
age = 2021 - yearOfBirth;
alert(age);

if (age < 10) {
  alert(
    "You are too young for this  " +
      userName +
      ". Come back when you are older."
  );
}
if (age >= 10 && age < 18) {
  let isWithAdult = confirm("Do you have an adult with you?");
  if (isWithAdult === true) {
    alert(
      "Welcome to my super website " +
        userName +
        ". Good, that you are not alone here!"
    );
  } else if (isWithAdult === false) {
    alert(
      "You are too young for this " +
        userName +
        ". You need an adult next to you to continue."
    );
  }
}
if (age === 29) {
  alert("Welcome to my super website " + userName + ". We are the same age!");
}
if (age > 18) {
  alert("Welcome to my super website " + userName);
}
