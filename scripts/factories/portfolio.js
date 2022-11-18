function photographerHeader(data) {

    const { name, city, country, tagline, portrait } = data;

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

    return { name, city, country, tagline, picture, getPhotographerHeaderDOM };
}