async function loadHeroes() {

    const response = await fetch("../characters/heroes.json");

    const data = await response.json();

    const gallery = document.getElementById("gallery");

    gallery.innerHTML = "";

    data.heroes.forEach(hero => {

        gallery.innerHTML += `

        <div class="hero-card">

            <h3>${hero.name}</h3>

            <p>${hero.title}</p>

            <span>${hero.origin}</span>

        </div>

        `;

    });

}

loadHeroes();
