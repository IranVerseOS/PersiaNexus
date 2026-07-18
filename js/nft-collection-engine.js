/*
==================================
 PersiaNexus NFT Collection Engine
 Version 1.0
==================================
*/


const characters = [

{

name:
"Rostam",

title:
"Eternal Guardian",

image:
"assets/nft/images/rostam.jpg"

},


{

name:
"Arash Kamangir",

title:
"Guardian of Light",

image:
"assets/nft/images/arash.jpg"

},


{

name:
"Bahram",

title:
"Ancient Warrior",

image:
"assets/nft/images/bahram.jpg"

}

];




const grid =
document.getElementById(
"character-grid"
);



characters.forEach(character => {


grid.innerHTML += `


<div class="nft-card">


<img src="../${character.image}">


<h3>

${character.name}

</h3>


<p>

${character.title}

</p>



<button>

View Story

</button>



</div>


`;



});
