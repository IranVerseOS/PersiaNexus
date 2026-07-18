// PersiaNexus Hero Universe Loader

async function loadHeroes(){

    try {

        const response = await fetch("./data/heroes.json");
        const data = await response.json();


        const container =
        document.getElementById("heroes-container");


        if(!container){
            console.error(
                "Heroes container not found"
            );
            return;
        }



        data.heroes.forEach(hero => {


            const card = document.createElement("div");

            card.className = "pn-card hero-card";



            card.innerHTML = `

            <div class="hero-image">

                <img 
                src="../${hero.nft.image}"
                alt="${hero.name}"
                onerror="this.style.display='none'"
                >

            </div>



            <div class="card-body">


                <h2>
                ⚔️ ${hero.name}
                </h2>


                <h3>
                ${hero.title}
                </h3>


                <p>
                🌍 World:
                ${hero.world}
                </p>


                <p>
                ⭐ Level:
                ${hero.level}
                </p>


                <p>
                💎 NFT:
                ${hero.nft.token}
                </p>



                <p>
                ⚡ Powers:
                <br>
                ${hero.powers.join("<br>")}
                </p>



                <p>
                📖
                ${hero.story.origin}
                </p>



                <button class="pn-btn">

                View Hero

                </button>


            </div>

            `;



            container.appendChild(card);


        });



        console.log(
            "PersiaNexus Heroes Loaded",
            data.heroes
        );


    }


    catch(error){

        console.error(
            "Hero Loading Error:",
            error
        );

    }

}



loadHeroes();
