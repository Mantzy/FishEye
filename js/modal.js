// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close");
//const modalSuc = document.querySelectorAll(".bgSubmit");

const modalPicture = document.getElementById("single-img");
const modalPictureCard = document.getElementById("photo-card");
const modalCloseDark = document.getElementById("dark-color-close");


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

/*modalSucBtn.addEventListener("click", function() {
    setTimeout(function() { window.location.reload(); }, 2)
})

modalSucClose.addEventListener("click", function() {
    setTimeout(function() { window.location.reload(); }, 2)
})*/


//single picture
modalPictureCard.addEventListener("click", function() {
    modalPicture.style.display = "block";
});

modalPicture.addEventListener("click", function() {
    modalPicture.style.display = "block";
});

//close single picture
modalCloseDark.addEventListener("click", function() {
    modalPicture.style.display = "none";
});