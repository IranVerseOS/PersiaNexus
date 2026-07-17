async function loadPersiaNexusLegends(){

const response = await fetch(
"nft/legends/PersiaNexus-Eternal-Legends-Genesis.json"
);

const data = await response.json();


const gallery =
document.getElementById("nft-gallery");


gallery.innerHTML="";


data.legends.forEach(hero=>{


gallery.innerHTML += `

<div class="nft-card">

<h2>
${hero.name}
</h2>

<h3>
${hero.title}
</h3>

<p>
⭐ ${hero.rarity}
</p>

<p>
⚡ Power: ${hero.power}
</p>

<p>
🌌 Element:
${hero.element}
</p>

<p>
${hero.story}
</p>

</div>

`;

});


}


loadPersiaNexusLegends();
