const home = document.querySelector("#num1-el");
const guest = document.querySelector("#num2-el");

// -----Define a variable for the current value
// ----- use let because the value changes anytime +1 is clicked
let homeValue = Number(home.textContent);
let guestValue = Number(guest.textContent);
// ----- Create an event listener: That is, the action that is
// ----- performed when the +1 is cliked. This action is adding 1
// ----- to evertime the button is clicked.
document.querySelector(".plusonebtn1").addEventListener("click", function () {
  home.textContent = homeValue += 1;
});

// ----- Do the exact same for +2 and +3
document.querySelector(".plustwobtn1").addEventListener("click", function () {
  home.textContent = homeValue += 2;
});
document.querySelector(".plusthreebtn1").addEventListener("click", function () {
  home.textContent = homeValue += 3;
});

// -----Repeat the same procefdure for the guest part
document.querySelector(".plusonebtn2").addEventListener("click", function () {
  guest.textContent = guestValue += 1;
});

// ----- Do the exact same for +2 and +3
document.querySelector(".plustwobtn2").addEventListener("click", function () {
  guest.textContent = guestValue += 2;
});
document.querySelector(".plusthreebtn2").addEventListener("click", function () {
  guest.textContent = guestValue += 3;
});