const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
lightbox.setAttribute("aria-label", "lightbox");
lightbox.setAttribute("role", "dialog");
lightbox.setAttribute("aria-modal", "true");
lightbox.setAttribute("aria-hidden", "true");
document.body.appendChild(lightbox);


// eslint-disable-next-line no-unused-vars
function lightboxFactory(data) {

    const { image, title, photographerId } = data;

    const lightboxMedia = document.createElement("div");
    lightboxMedia.classList.add("lightbox_media");
    lightboxMedia.setAttribute("aria-label", "lightbox_media");

    const mediaContainer = document.createElement("div");
    mediaContainer.classList.add("media-container");

    const closeImg = document.createElement("img");
    closeImg.classList.add("close");
    closeImg.setAttribute("src", "./assets/icons/red_close_arrow.png");
    closeImg.setAttribute("alt", "close");
    closeImg.setAttribute("role", "img");
    closeImg.setAttribute("aria-label", "close");
    closeImg.setAttribute("tabindex", "4");
    closeImg.setAttribute("id", "lightbox-close");
    closeImg.setAttribute("onclick", "closeLightbox()");
    lightboxMedia.appendChild(closeImg);



    if (data.image) {

        const img = document.createElement("img");
        img.classList.add("media-img");
        img.setAttribute("src", `./assets/media/${photographerId}/${image}`);
        img.setAttribute("alt", title);
        img.setAttribute("role", "img");
        img.setAttribute("aria-label", title);
        img.setAttribute("tabindex", "4");
        img.setAttribute("id", "lightbox-img");

        mediaContainer.appendChild(img);
        lightboxMedia.appendChild(mediaContainer);
    }

    if (data.video) {

        const video = document.createElement("video");
        video.classList.add("media-img");
        const mp4 = `assets/media/${photographerId}/${data.video}`;
        const source = document.createElement("source");
        video.setAttribute("tabindex", "4");
        video.setAttribute("controls", " ");
        video.setAttribute("preload", "metadata");
        source.setAttribute("src", mp4);
        source.setAttribute("alt", title);
        source.setAttribute("type", "video/mp4");

        video.appendChild(source);
        mediaContainer.appendChild(video);
        lightboxMedia.appendChild(mediaContainer);
    }

    const lightboxText = document.createElement("div");
    lightboxText.classList.add("lightbox-text");
    const h2 = document.createElement("h2");
    h2.textContent = title;

    const linkLeft = document.createElement("a");
    linkLeft.setAttribute("href", "#");
    linkLeft.setAttribute("onclick", "plusMedia(-1)");
    linkLeft.classList.add("previous");

    const leftArrow = document.createElement("img");
    leftArrow.setAttribute("src", "./assets/icons/left_arrow.png");
    leftArrow.setAttribute("alt", "previous");
    leftArrow.setAttribute("role", "img");
    leftArrow.setAttribute("aria-label", "previous");
    leftArrow.setAttribute("tabindex", "4");
    leftArrow.setAttribute("id", "lightbox-left");

    linkLeft.appendChild(leftArrow);

    const linkRight = document.createElement("a");
    linkRight.setAttribute("href", "#");
    linkRight.setAttribute("onclick", "plusMedia(1)");
    linkRight.classList.add("next");

    const rightArrow = document.createElement("img");
    rightArrow.setAttribute("src", "./assets/icons/right_arrow.png");
    rightArrow.setAttribute("alt", "next");
    rightArrow.setAttribute("role", "img");
    rightArrow.setAttribute("aria-label", "next");
    rightArrow.setAttribute("tabindex", "4");
    rightArrow.setAttribute("id", "lightbox-right");

    linkRight.appendChild(rightArrow);

    lightboxText.appendChild(h2);

    lightbox.appendChild(lightboxMedia);
    lightboxMedia.appendChild(linkLeft);
    lightboxMedia.appendChild(linkRight);
    lightboxMedia.appendChild(lightboxText);


    return lightbox;

}

