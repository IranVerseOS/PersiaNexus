/*
=====================================
 PersiaNexus Character Engine
 Version 1.0
=====================================
*/


const characterDatabase =
"data/characters-database.json";



async function loadCharacters(){


try{


const response =
await fetch(characterDatabase);



const data =
await response.json();



window.PersiaNexusCharacters =
data.characters;



console.log(
"Characters Loaded",
data.characters
);



}


catch(error){


console.log(
"Character Database Error:",
error
);


}


}




function searchCharacter(question){


if(!window.PersiaNexusCharacters){

return null;

}



let q =
question.toLowerCase();



for(
const character of
window.PersiaNexusCharacters
){



if(

q.includes(
character.name.toLowerCase()
)

||
q.includes(
character.persianName
)

){


return `


⚔️ ${character.persianName}


Role:
${character.role}


Type:
${character.type}


Rarity:
${character.rarity}


Power:
${character.powerLevel}


Element:
${character.element}


Story:

${character.story}


`;



}


}



return null;



}




window.onload =
loadCharacters;
