async function loadGenesisGuardians() {

    try {

        const response = await fetch("../universes/eternal-wisdom/genesis-guardians.json");

        const data = await response.json();

        const gallery = document.getElementById("gallery");

        gallery.innerHTML = "";

        data.guardians.forEach(hero => {

            gallery.innerHTML += `

            <div class="hero-card">

                <div class="rarity">GENESIS</div>

                <h2>${hero.name}</h2>

                <h4>${hero.role}</h4>

                <p>Core : ${hero.core}</p>

            </div>

            `;

        });

    } catch(error){

        console.log(error);

    }

}

loadGenesisGuardians();
