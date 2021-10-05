var request = new XMLHttpRequest();


console.log('Hello')
fetch("./FishEyeData.json")
    .then(response => response.json())
    .then(data => {

        console.log(data);

        var photog = data.photographers;


        let photographerlist = document.getElementById('main');
        photog.forEach((photographers) => {
            let tags = '';
            photographers.tags.forEach((tag) => {
                tags += `<li class="nav-tag">#${tag}</li>`
            })
            let card = `
        <!-- photographer card start-->
       <div class="photog-card">
            <a href="photographer-page.html?id=${photographers.id}" class="photog-page-link">
                <div class="photog-link">
                    <figure class="thumbnail">
                        <img src="./SamplePhotos/Photographers/${photographers.portrait}" class="thumbnail-img">

                    </figure>
                    <h2>${photographers.name}</h2>
                </div>
            </a>
            <div class="photog-text">
                <p class="city">${photographers.city}, ${photographers.country}</p>
               
                <p class="photog-description">${photographers.tagline}</p>
                <p class="price">$ ${ photographers.price}  /day</p>
            </div>
            <div class="photog-tags">
                <ul>
                   ${tags}

                </ul>
            </div>
        </div>
        <!-- photographer card end-->
        `;


            photographerlist.innerHTML += card;
        })

    })