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


card.onclick = function(){

showHeroDetails(hero);

};
container.appendChild(card);

card.onclick = function(){

showHeroDetails(hero);

};

});



}





// Start Engine


loadHeroes();
function showHeroDetails(hero){


const detail =
document.createElement("div");


detail.className =
"hero-detail";


detail.innerHTML = `

<h2>
⚔ ${hero.name}
</h2>

<h3>
${hero.title}
</h3>


<p>
<strong>NFT ID:</strong>
${hero.nft_id}
</p>


<p>
<strong>Story:</strong>
${hero.story}
</p>


<p>
<strong>Weapon:</strong>
${hero.weapon}
</p>


<p>
<strong>Armor:</strong>
${hero.armor}
</p>


<p>
<strong>Weakness:</strong>
${hero.weakness.join(", ")}
</p>


<h3>
Powers
</h3>

<ul>

${hero.powers.map(power =>

`<li>${power}</li>`

).join("")}

</ul>


<button onclick="this.parentElement.remove()">

Close

</button>


`;


document.body.appendChild(detail);


}
