// =======================================
// PersiaNexus Hero Engine v1.0
// =======================================


console.log("⚔ PersiaNexus Hero Engine Activated");



// Load Heroes Database

async function loadHeroes(){


try{


const response = await fetch("heroes/heroes.json");


const data = await response.json();



window.PersiaNexusHeroes = data;



console.log(
"Heroes Database Loaded:",
data
);



displayHeroes();



}



catch(error){


console.error(
"Heroes Loading Failed:",
error
);


}



}





// Display Heroes


function displayHeroes(){



const container =
document.getElementById("hero-container");



if(
!container ||
!window.PersiaNexusHeroes
){

return;

}



container.innerHTML = "";



const heroes =
window.PersiaNexusHeroes.heroes;



heroes.forEach(hero => {



const card =
document.createElement("div");



card.className =
"hero-card";



card.innerHTML = `



<h3>

⚔ ${hero.name}

</h3>



<h4>

${hero.title}

</h4>



<p>

<strong>Origin:</strong>

${hero.origin}

</p>



<p>

<strong>Realm:</strong>

${hero.world}

</p>



<p>

<strong>Class:</strong>

${hero.class}

</p>



<p>

<strong>Rarity:</strong>

${hero.rarity}

</p>



<p>

<strong>Element:</strong>

${hero.element}

</p>



<h4>

Powers

</h4>



<ul>

${
hero.powers
.map(power =>

`<li>${power}</li>`

)
.join("")
}

</ul>



<p>

<strong>Weapon:</strong>

${hero.weapon}

</p>



<p>

<strong>Armor:</strong>

${hero.armor}

</p>



<p>

${hero.story}

</p>




<div class="hero-tags">



${
hero.nft_ready
?
"<span>💎 NFT Ready</span>"
:
""
}



${
hero.game_ready
?
"<span>🎮 Game Ready</span>"
:
""
}



${
hero.animation_ready
?
"<span>🎬 Animation Ready</span>"
:
""
}



</div>



`;



container.appendChild(card);

card.onclick = function(){

showHeroDetails(hero);

};

});



}





// Start Engine


loadHeroes();
