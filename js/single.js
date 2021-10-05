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


        let photolist = document.getElementById('img-listing');
        photos.forEach((media) => {
            if (id == media.photographerId) {

                let tags = '';
                media.tags.forEach((tag) => {
                    tags += `<li class="nav-tag">#${tag}</li>`
                })

                let mediafile = "";

                if (media.image == null) {
                    mediafile = `<video class="list-img" controls>
                       <source src="/SamplePhotos/${media.photographerId}/${media.video}" type="video/mp4">
                     </video>`
                } else {
                    mediafile = `<img src="/SamplePhotos/${media.photographerId}/${media.image}" class="list-img"></img>`
                }

                let card = `
            <!-- photo card start-->
            <div class="photo-card">
                <figure class="photo-list">
           ${mediafile}
            
                </figure>
                <section class="photo-infos">
                    <div class="img-title">
                       ${media.title}
                    </div>
                    <div class="likes">${media.likes} <img src="/img/hearth.png"></div>
                </section>
            </div>
            <!-- photo card end-->
        </section>
        <!-- photos end-->
        <!-- price and likes start-->
        <div id="price">
            <div class="likes bottom">297 081 <img src="/img/hearth-black.png"></div>
            <div class="prices bottom">300$/day</div>
        </div>
        <!-- price and likes end-->
        `;


                photolist.innerHTML += card;


                /*    let dailyprice = document.getElementById('price');
            let bottomprice = `<div class="likes bottom">297 081 <img src="/img/hearth-black.png"></div>
<div class="prices bottom" id="bottom-price">$ ${ photog.price}  /day</div>`;
            dailyprice.innerHTML += bottomprice;*/
            }
        })

    })