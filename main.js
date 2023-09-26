// Select DOM's elements
const container = document.querySelector(".main__content-buttons");
const form = document.querySelector("#form");
const input = document.querySelector(".main__content-input");

// REGULAR EXPRESSION
// regular expression for email's valdiation
const regex = /^[a-z0-9_#-]+@[a-z]+\.[a-z]{2,3}$/;

// ^ - It is the start of the string.
// [a-z0-9_#-]+ - Any character between a to z and 0 to 9 at the start of the string, included special characters like _#-.
// @ - The string should contains ‘@’ character after some alphanumeric characters.
// [a-z]+ - At least one character between a to z after the ‘@’ character in the string.
// \. – Email should contain the dot followed by some characters followed by the ‘@’ character
// [a-z]{2,3}$ - It should contain two or three alphabetical characters at the end of the string. The ‘$’ represents the end of the string.

// validate function to match emails manually
// Funcion Declarations
function validateEmail(email) {
  return regex.test(email);
}

// Create the scripting to render HTML element
function displayMessage() {
  // Validate if message alert was rendered before
  const avoidRenderedElements = document.querySelector(".error");

  if (!avoidRenderedElements) {
    const span = document.createElement("span");
    span.classList.add("error");

    if (input.value < 1) {
      span.textContent = "Oops! Please add your email";
    } else {
      span.textContent = "Oops! Please check your email";
    }

    container.appendChild(span);

    // After 3 seconds, remove the rendered element

    setTimeout(() => {
      container.removeChild(span);
    }, 3000);
  }

  return;
}

// Event listener when submitting the form
form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const email = validateEmail(input.value);

  if (!email) {
    displayMessage();
  }
});
