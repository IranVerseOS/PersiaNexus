/*
==================================
 PersiaNexus NFT Renderer
 Version 1.0
==================================
*/


async function loadNFTCharacters(){


try{


const response =
await fetch(
"data/nft-characters.json"
);


const data =
await response.json();



const container =
document.getElementById(
"nft-characters"
);



if(!container) return;



data.characters.forEach(character => {



container.innerHTML += `


<div class="nft-character-card">


<img src="../${character.image}">


<h3>
${character.name}
</h3>


<p>
${character.title}
</p>


<p>
Rarity:
${character.rarity}
</p>


<button>

Enter World

</button>


</div>


`;



});



}


catch(error){


console.log(
"NFT Loading Error:",
error
);


}



}



window.onload =
loadNFTCharacters;
