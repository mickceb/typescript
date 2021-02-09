// Assertions
var form = document.getElementById("signupForm");
var firstName = document.getElementById("firstname");
var old = document.getElementById("age");
var gender = document.getElementById("gender");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(firstName.value, old.valueAsNumber, gender.value);
});
