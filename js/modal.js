const modalPicture = document.getElementById("single-img");
//const modalPictureCard = document.getElementByClass("photo-card");
const modalCloseDark = document.getElementById("dark-color-close");
setTimeout(function() {




    // DOM Elements
    const modalbg = document.querySelector(".bground");
    const modalBtn = document.querySelectorAll(".modal-btn");
    const formData = document.querySelectorAll(".formData");
    const modalClose = document.querySelectorAll(".close");




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
        alert("alert");
    });
}, 500);




function popupPhoto(id, media, index) {
    let popupImg = document.getElementById("popupImg");
    popupImg.src = `/SamplePhotos/${id}/${media}`;
    popupImg.setAttribute("data-index", index);
    popupImg.setAttribute("data-photographerid", id);
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




}

modalCloseDark.onclick = function() {
    modalPicture.style.display = "none";
}

function closeDark() {
    modalPicture.style.display = "none";
}

//next previous button
let nextButton = document.getElementById("next");
let previousButton = document.getElementById("previous");

nextButton.addEventListener("click", function() {
    moveForward()
});

previousButton.addEventListener("click", function() {
    moveBackward()
});


function moveForward() {

    let image = document.getElementById("popupImg");
    let index = parseInt(image.getAttribute("data-index"));
    let photographerId = parseInt(image.getAttribute("data-photographerid"));

    let media = {};
    for (let i = index + 1; i < photos.length; i++) {
        console.log(index, photos.length);
        let currentMedia = photos[i];
        if (currentMedia.photographerId == photographerId) {
            media = currentMedia;
            image.src = `/SamplePhotos/${photographerId}/${media.image}`;
            image.setAttribute("data-index", i);
            break;
        }
        if (i == photos.length - 1) {
            nextButton.style.display = "none";
            console.log(index + 1, photos.length);
        }
    }


}

function moveBackward() {
    // alert("backward")
    let image = document.getElementById("popupImg");
    let index = parseInt(image.getAttribute("data-index"));
    let photographerId = parseInt(image.getAttribute("data-photographerid"));

    let media = {};
    for (let i = index + 1; i < photos.length; i++) {

        let currentMedia = photos[i];
        let previousMedia = photos[i - 1];
        if (currentMedia.photographerId == photographerId) {
            media = previousMedia;
            image.src = `/SamplePhotos/${photographerId}/${media.image}`;
            image.setAttribute("data-index", i);
            break;
        }

    }
}