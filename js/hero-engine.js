async function loadHeroes() {
    const container = document.getElementById("heroes-container");
    if (!container) return;

    container.innerHTML = "<h2>Loading Heroes...</h2>";

    try {

        const index = await fetch("data/heroes/index.json");
        const heroIndex = await index.json();

        container.innerHTML = "";

        for (const heroFile of heroIndex.heroes) {

            const heroData = await fetch("data/heroes/" + heroFile);
            const hero = await heroData.json();

            container.innerHTML += `
            <div class="hero-card">

                <img src="${hero.image}" alt="${hero.name}">

                <h2>${hero.name}</h2>

                <h4>${hero.title}</h4>

                <p>${hero.description}</p>

                <ul>

                    <li>Class : ${hero.class}</li>

                    <li>Element : ${hero.element}</li>

                    <li>Power : ${hero.power}</li>

                    <li>World : ${hero.world}</li>

                    <li>NFT : ${hero.nft}</li>

                </ul>

            </div>
            `;

        }

    } catch(err){

        container.innerHTML =
        "<h2>Hero System Error</h2>";

        console.error(err);

    }

}

window.onload = loadHeroes;
