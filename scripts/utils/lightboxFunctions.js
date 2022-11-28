const lightboxMedia = document.getElementsByClassName("lightbox_media");

function displayLightbox() {
    lightbox.style.display = "block";
}

function closeLightbox() {
    lightbox.style.display = "none";
}

let mediaIndex = 1;

function showMedia(n) {
    let i;
    const medias = document.getElementsByClassName("lightbox_media");

    if (n > medias.length) {
        mediaIndex = 1
    }
    if (n < 1) {
        mediaIndex = medias.length
    }
    for (i = 0; i < medias.length; i++) {
        medias[i].style.display = "none";
    }
    medias[mediaIndex - 1].style.display = "flex";
}

function currentMedia(n) {
    showMedia(mediaIndex = n);
}

function plusMedia(n) {
    showMedia(mediaIndex += n);
}

document.addEventListener("keydown", function (event) {
    if (event.key === 'Escape') {
        closeLightbox();
    } else if (event.key === 'ArrowRight') {
        plusMedia(1);
    } else if (event.key === 'ArrowLeft') {
        plusMedia(-1);
    }
});





