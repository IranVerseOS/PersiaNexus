/*
=====================================
 PersiaNexus Marketplace Engine
 Version 1.0
=====================================
*/


async function loadMarketplace(){


const response = await fetch(
"marketplace/data/nft-market.json"
);


const data = await response.json();


const container =
document.getElementById("market-items");


if(!container) return;



data.items.forEach(item => {



const card = document.createElement("div");


card.className = "nft-card";



card.innerHTML = `


<h2>
${item.character}
</h2>


<p>
Token:
${item.tokenId}
</p>


<p>
💎 ${item.rarity}
</p>


<p>
💰 Price:
${item.price}
${item.currency}
</p>


<p>
Status:
${item.status}
</p>



<button onclick="buyNFT('${item.tokenId}')">

Buy NFT

</button>


`;



container.appendChild(card);



});


}




function buyNFT(tokenId){


alert(

"Purchase system will connect to wallet soon: "

+ tokenId

);


}





window.onload =
loadMarketplace;
