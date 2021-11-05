const modalPicture = document.getElementById("single-img-id");

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

    /*modalPicture.addEventListener("click", function() {
        modalPicture.classList.remove("hide");
        modalPicture.classList.add("display");
        alert("popup");

    });*/

    //close single picture
    modalCloseDark.addEventListener("click", function() {
        // modalPicture.style.display = "none";
        modalPicture.classList.remove("display");

        //  let closePicture = document.getElementsByClassName("single-img-container");
        modalPicture.classList.add("hide");
        //closePicture.classList.remove("show");
        //closePicture.classList.add("hide");


        //alert("alert");
    });
}, 500);



//single photos
function popupPhoto(id, media, index) {


    modalPicture.classList.remove("hide");
    modalPicture.classList.add("display");
    let popupImg = document.getElementById("popupImg");

    popupImg.src = `/SamplePhotos/${id}/${media}`;
    popupImg.setAttribute("data-index", index);
    popupImg.setAttribute("data-photographerid", id);

    // modalPicture.style.display = "block";


    /*if (media == null) {
        console.log("video");
        popupImg.src = `/SamplePhotos/${id}/${video}`;
        popupImg.setAttribute("data-index", index);
        popupImg.setAttribute("data-photographerid", id);
    } else {
        popupImg.src = `/SamplePhotos/${id}/${media}`;
        popupImg.setAttribute("data-index", index);
        popupImg.setAttribute("data-photographerid", id);
    }
*/



}



//next button
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
        previousButton.style.display = "block";
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

//previous button
function moveBackward() {
    //alert("backward")
    let image = document.getElementById("popupImg");
    let index = parseInt(image.getAttribute("data-index"));
    let photographerId = parseInt(image.getAttribute("data-photographerid"));

    let media = {};
    for (let i = index - 1; i >= 0; i--) {
        //alert(i);
        nextButton.style.display = "block";
        let currentMedia = photos[i];
        //  let previousMedia = currentMedia.index - 1;
        if (currentMedia.photographerId == photographerId) {
            media = currentMedia;
            image.src = `/SamplePhotos/${photographerId}/${media.image}`;
            image.setAttribute("data-index", i);
            break;
        }
        if (i == 0) {
            previousButton.style.display = "none";
        }

    }
}