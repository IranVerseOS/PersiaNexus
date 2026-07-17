async function loadLegendsNFT(){


try{


const response = await fetch(
"nft/legends.json"
);


const data =
await response.json();



const gallery =
document.getElementById(
"nft-gallery"
);



if(!gallery) return;



gallery.innerHTML = "";



data.legends.forEach(legend=>{


gallery.innerHTML += `


<div class="nft-card">


<h2>
⚔️ ${legend.name}
</h2>


<h3>
${legend.title}
</h3>



<p>
⭐ ${legend.rarity}
</p>



<p>
🔥 Power:
${legend.power_level}
</p>



<p>
🌌 Element:
${legend.element}
</p>



<p>
💎 Artifact:
${legend.artifact}
</p>



<p>
🌑 Enemy:
${legend.enemy}
</p>



<p>
${legend.story}
</p>



<button>
View Full Legend
</button>



</div>


`;


});


}



catch(error){


console.error(
"NFT Loading Error:",
error
);


}


}



loadLegendsNFT();
