const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
var request = new XMLHttpRequest();

//const photographer = db['photographers'].find(x => x.id === photographerId);

fetch("./FishEyeData.json")
    .then(response => response.json())
    .then(data => {

        console.log(data);

        var photog = data.photographers;
        var photos = data.media;




        // photos list part
        let photolist = document.getElementById('img-listing');
        photos.forEach((media) => {
            if (id == media.photographerId) {

                let tags = '';
                media.tags.forEach((tag) => {
                    tags += `<li class="nav-tag">#${tag}</li>`
                })

                let mediafile = "";
                let _mediafile = "";
                if (media.image == null) {
                    _mediafile = media.video;
                    mediafile = `<video class="list-img" controls>
                       <source src="/SamplePhotos/${media.photographerId}/${media.video}" type="video/mp4">
                     </video>`
                } else {
                    _mediafile = media.image;
                    mediafile = `<img src="/SamplePhotos/${media.photographerId}/${media.image}" class="list-img"></img>`
                }

                let card = `
            <!-- photo card start-->
            <a href="#" onclick="popupPhoto(${media.photographerId}, '${_mediafile}')" class="photo-card-link"><div class="photo-card">
                <figure class="photo-list">
           ${mediafile}
            
                </figure>
                <section class="photo-infos">
                    <div class="img-title">
                       ${media.title}
                    </div>
                    <div class="likes">${media.likes} <img src="/img/hearth.png"></div>
                </section>
            </div></a>
            <!-- photo card end-->.
            </section>

       
        `;







                photolist.innerHTML += card;





            }


        })




        // photgrapher info part 
        let photographer = document.getElementById("photog-info");
        let photogprice = document.getElementById("price");
        let photogcontact = document.getElementById("bground");
        photog.forEach((photographers) => {
            if (id == photographers.id) {

                let tags = '';
                photographers.tags.forEach((tag) => {
                    tags += `<li class="nav-tag">#${tag}</li>`
                })



                let photoginfo = `
        <div id="personal-info">
        <h1>${photographers.name}</h1>
        <section id="about">
            <address>${photographers.city}, ${photographers.country}</address>
            <p id="desc">${photographers.tagline}</p>
            <div class="photog-tags">
                <ul>
                ${tags}
                </ul>
            </div>
        </section>
    </div>
    <div id="contact">
        <button class="modal-btn">Contact me</button>
    </div>
    <figure class="thumbnail infopage">
        <img src="./SamplePhotos/Photographers/${photographers.portrait}" class="thumbnail-img">

    </figure>
        `;


                let contactform = `                
                <div class="content">
        <div class="modal-body">
            <div class="contact-text">
                <h1>
                    Contact me<br> ${photographers.name}</h1>
            </div>
            <span class="close"></span>



            <form name="contact" action="index.html" method="get" onsubmit="return validate();">
                <div class="formData">
                    <label for="first">First Name</label><br>
                    <input class="text-control" type="text" id="first" name="first" minlength="2" required/><br>
                    <div class="error" id="firstError"></div>
                </div>
                <div class="formData">
                    <label for="last">Last Name</label><br>
                    <input class="text-control" type="text" id="last" name="last" minlength="2" required/><br>
                    <div class="error" id="lastError"></div>
                </div>
                <div class="formData">
                    <label for="email">Email</label><br>
                    <input class="text-control" type="email" id="email" name="email" required/><br>
                    <div class="error" id="mailError"></div>
                </div>
                <div class="formData">
                    <label for="message">Your message</label><br>
                    <textarea class="text-control-message" name="message" rows="10" cols="30" id="message" type="text"></textarea>
                </div>


                <button class="btn-submit button" type="submit" value="Send">Send</button>
        </div>

        </form>
    </div>`;




                let pricelike = `
        <div class="likes bottom">  <img src="/img/hearth-black.png"></div>
        <div class="prices bottom">$ ${ photographers.price} /day</div>
        `;

                photographer.innerHTML += photoginfo;
                photogprice.innerHTML += pricelike;
                photogcontact.innerHTML += contactform;
            }



        })
    })