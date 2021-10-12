// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close");
//const modalSuc = document.querySelectorAll(".bgSubmit");

const modalPicture = document.getElementById("single-img");
//const modalPictureCard = document.getElementByClass("photo-card");
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
/*modalPictureCard.addEventListener("click", function() {
    modalPicture.style.display = "block";
});*/

modalPicture.addEventListener("click", function() {
    modalPicture.style.display = "block";
});

//close single picture
modalCloseDark.addEventListener("click", function() {
    modalPicture.style.display = "none";
});


function popupPhoto(id, media) {
    let popupImg = document.getElementById("popupImg");
    popupImg.src = `/SamplePhotos/${id}/${media}`;
    modalPicture.style.display = "block";

    /*  let popup = `
      <!-- single photo page start -->
      <div class="single-img-container" id="single-img">

          <div class="single-img-bg">
              <span class="dark-color-close" id="dark-color-close"></span>
              <div class="previous">
                  <img src="/img/previous.png">
              </div>
              <div class="single-photo">
                  <img src="c" class="single-img">
              </div>
              <div class="next">

                  <img src="/img/next.png">
              </div>
          </div>

      </div>
      <!-- single photo page end -->`;*/


    alert(media);

}