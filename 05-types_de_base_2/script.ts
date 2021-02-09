// Assertions

const form = document.getElementById("signupForm") as HTMLFormElement;
const firstName = document.getElementById("firstname") as HTMLInputElement;
const old = document.getElementById("age") as HTMLInputElement;
const gender = document.getElementById("gender") as HTMLSelectElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(firstName.value, old.valueAsNumber, gender.value);
});
