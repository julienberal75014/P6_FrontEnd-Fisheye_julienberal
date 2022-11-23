function lightboxFactory(data) {

    const { image, video, title, photographerId, id } = data;

    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    document.body.appendChild(lightbox);
    lightbox.setAttribute("aria-label", "lightbox");
    lightbox.setAttribute("role", "dialog");

    if (data.image) {

        const img = document.createElement('img');
        img.setAttribute("src", `./assets/media/${photographerId}/${image}`);
        img.setAttribute("alt", title);
        img.setAttribute("role", "img");
        img.setAttribute("aria-label", title);
        img.setAttribute("tabindex", "4");
        img.setAttribute("id", "lightbox-img");

        lightbox.appendChild(img);
    }

    if (data.video) {

        const video = document.createElement('video');
        const mp4 = `assets/media/${photographerId}/${data.video}`;
        const source = document.createElement("source");
        video.setAttribute("tabindex", "4");
        video.setAttribute("controls", " ");
        video.setAttribute("poster", `./assets/media/${photographerId}/${image}`);
        video.setAttribute("preload", "metadata");
        source.setAttribute("src", mp4);
        source.setAttribute("alt", title);
        source.setAttribute("type", "video/mp4");

        video.appendChild(source);
        lightbox.appendChild(video);
    }

    const lightboxText = document.createElement('div');
    lightboxText.classList.add('lightbox-text');
    const h2 = document.createElement('h2');
    h2.textContent = title;
    const closeImg = document.createElement('img');
    closeImg.setAttribute("src", "./assets/icons/close.svg");
    closeImg.setAttribute("alt", "close");
    closeImg.setAttribute("role", "img");
    closeImg.setAttribute("aria-label", "close");
    closeImg.setAttribute("tabindex", "4");
    closeImg.setAttribute("id", "lightbox-close");
    const leftArrow = document.createElement('img');
    leftArrow.setAttribute("src", "./assets/icons/left-arrow.svg");
    leftArrow.setAttribute("alt", "previous");
    leftArrow.setAttribute("role", "img");
    leftArrow.setAttribute("aria-label", "previous");
    leftArrow.setAttribute("tabindex", "4");
    leftArrow.setAttribute("id", "lightbox-left");
    const rightArrow = document.createElement('img');
    rightArrow.setAttribute("src", "./assets/icons/right-arrow.svg");
    rightArrow.setAttribute("alt", "next");
    rightArrow.setAttribute("role", "img");
    rightArrow.setAttribute("aria-label", "next");
    rightArrow.setAttribute("tabindex", "4");
    rightArrow.setAttribute("id", "lightbox-right");


    lightboxText.appendChild(h2);
    lightboxText.appendChild(closeImg);
    lightboxText.appendChild(leftArrow);
    lightboxText.appendChild(rightArrow);
    lightbox.appendChild(lightboxText);

    return (lightbox);
}
