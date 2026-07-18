/*
====================================
 PersiaNexus NFT Loader Engine
 Version 1.0
====================================
*/


const nftDatabase = 
"nft/characters/eternal-legends-characters.json";



async function loadNFTs(){


try{


const response = await fetch(nftDatabase);


const data = await response.json();



const container =
document.getElementById("nft-container");



if(!container) return;



data.characters.forEach(nft => {



const card = document.createElement("div");


card.className = "nft-card";



card.innerHTML = `



<img src="${nft.image}" 
alt="${nft.name}">



<h2>
${nft.persianName}
</h2>


<h3>
${nft.title}
</h3>



<p>
💎 ${nft.rarity}
</p>



<p>
⚡ Power:
${nft.powerLevel}
</p>



<p>
${nft.type}
</p>



<button onclick="
openNFT('${nft.id}')
">

View NFT

</button>


`;



container.appendChild(card);



});



}

catch(error){

console.log(
"NFT Loading Error:",
error
);

}



}




function openNFT(id){


window.location.href =
"nft/pages/"+id+".html";


}



window.onload =
loadNFTs;
