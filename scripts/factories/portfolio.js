function photographerHeader(data) {

    const { name, city, country, tagline, portrait, price, likes } = data;

    const picture = `assets/photographers/${portrait}`;

    function getPhotographerHeaderDOM() {
        const section = document.createElement('section');
        section.classList.add('photographer-banner');
        const userText = document.createElement('div');
        userText.classList.add('user-text');
        const h1 = document.createElement('h1');
        h1.textContent = name;
        const p = document.createElement('p');
        p.textContent = city + ", " + country;
        const p2 = document.createElement('p');
        p2.textContent = tagline;

        userText.appendChild(h1);
        userText.appendChild(p);
        userText.appendChild(p2);

        const button = document.createElement('button');
        button.classList.add('contact_button');
        button.setAttribute('onclick', 'displayModal()');
        button.textContent = "Contactez-moi";

        const img = document.createElement('img');
        img.setAttribute("src", picture)
        img.setAttribute("alt", name)
        img.setAttribute("role", "img")

        section.appendChild(userText);
        section.appendChild(button);
        section.appendChild(img);

        return (section);

    }

    return { name, city, country, tagline, picture, price, likes, getPhotographerHeaderDOM };
}

function mediaFactory(data) {

    const { image, video, title, likes, date, id, photographerId } = data;

    function getMediaDOM() {

        const mediaCard = document.createElement('article');
        mediaCard.classList.add('media-card');

        if (data.image) {

            const img = document.createElement('img');

            img.setAttribute("tabindex", "4");
            img.setAttribute("src", `assets/media/${photographerId}/${image}`);
            img.setAttribute("alt", title);
            img.setAttribute("role", "img");
            img.setAttribute("aria-label", title);

            mediaCard.appendChild(img);
        } else if (data.video) {

            const video = document.createElement('video');
            const mp4 = `assets/media/${photographerId}/${data.video}`;
            const source = document.createElement("source");

            video.setAttribute("tabindex", "4");
            video.setAttribute("controls", " ");
            source.setAttribute("src", mp4);
            source.setAttribute("alt", title);
            source.setAttribute("type", "video/mp4");

            video.appendChild(source);
            mediaCard.appendChild(video);
        }

        const mediaText = document.createElement('div');
        mediaText.classList.add('media-text');
        const buttonLike = document.createElement('div');
        buttonLike.classList.add('button-like');
        const h2 = document.createElement('h2');
        h2.textContent = title;
        const h2_likes = document.createElement('h2');
        h2_likes.textContent = likes;
        const heartImg = document.createElement('img');
        heartImg.setAttribute("src", "assets/icons/heart.svg");
        heartImg.setAttribute("alt", "likes");
        heartImg.setAttribute("role", "img");
        heartImg.setAttribute("aria-label", "likes");

        mediaText.appendChild(h2);
        mediaText.appendChild(h2_likes);
        mediaText.appendChild(heartImg);
        buttonLike.appendChild(h2_likes);
        buttonLike.appendChild(heartImg);
        mediaText.appendChild(buttonLike);


        mediaCard.appendChild(mediaText);

        return (mediaCard);

    }

    return { image, video, title, likes, date, id, photographerId, getMediaDOM };
}

function headband() {

    const band = document.querySelector(".headband");
    const like = document.createElement("h2")
    const heart = document.createElement("img");
    const price = document.createElement("h2");
    const likeClass = document.createElement('div');
    const priceClass = document.createElement('div');
    likeClass.classList.add('likeClass');
    priceClass.classList.add('priceClass');

    like.id = "total_likes";
    heart.setAttribute("src", "assets/icons/black-heart.svg");
    price.id = "price";


    band.appendChild(likeClass);
    band.appendChild(priceClass);
    band.appendChild(like);
    band.appendChild(heart);
    band.appendChild(price);
    likeClass.appendChild(like);
    likeClass.appendChild(heart);
    priceClass.appendChild(price);

    return band;
}

headband();
