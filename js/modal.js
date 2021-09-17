// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close");
//const modalSuc = document.querySelectorAll(".bgSubmit");
const modalSucClose = document.getElementById("sucClose");
const modalSucBtn = document.getElementById("submit-success");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// close modal event
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));

//close modal form
function closeModal() {
    modalbg.style.display = "none";

}

//close submit success page
modalSucBtn.addEventListener("click", function() {
    setTimeout(function() { window.location.reload(); }, 2)
})

modalSucClose.addEventListener("click", function() {
    setTimeout(function() { window.location.reload(); }, 2)
})