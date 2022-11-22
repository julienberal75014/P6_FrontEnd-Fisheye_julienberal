function lightboxFactory(data) {

    const { image, video, title, photographerId, id } = data;

    function getLightboxDOM() {

        let lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        document.body.appendChild(lightbox);
        lightbox.setAttribute("aria-label", "lightbox");
        lightbox.setAttribute("role", "dialog");
        const link = document.createElement('a');

        if (data.image) {

            const img = document.createElement('img');
            img.setAttribute("src", `assets/media/${photographerId}/${image}`);
            img.setAttribute("alt", title);
            img.setAttribute("role", "img");
            img.setAttribute("aria-label", title);
            img.setAttribute("tabindex", "4");
            img.setAttribute("id", "lightbox-img");

            lightbox
            lightbox.appendChild(img);

        }



        return (lightbox);

    }

    return { image, video, title, photographerId, id, getLightboxDOM };

}