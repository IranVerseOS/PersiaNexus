/*
====================================
 PersiaNexus NFT AI Engine
 Version 1.0
====================================
*/


async function loadNFTKnowledge(){


try{


const response =
await fetch(
"data/nft-metadata.json"
);



const data =
await response.json();



window.PersiaNexusNFTs =
data.nfts;



console.log(
"NFT Knowledge Loaded",
data.nfts
);



}


catch(error){


console.log(
"NFT AI Database Error",
error
);


}


}




function analyzeNFT(name){



if(!window.PersiaNexusNFTs){

return "NFT database loading...";

}



const nft =
window.PersiaNexusNFTs.find(

item =>

item.character
.toLowerCase()
.includes(
name.toLowerCase()
)

);



if(!nft){

return "NFT not found.";

}



return `


💎 ${nft.character}


Collection:
${nft.collection}


Rarity:
${nft.rarity}


Edition:
${nft.edition}


Power:
${nft.attributes.powerLevel}


Element:
${nft.attributes.element}


Role:
${nft.attributes.role}


Economic Reason:

Limited edition + Story importance + Character power


`;



}



window.onload =
loadNFTKnowledge;
