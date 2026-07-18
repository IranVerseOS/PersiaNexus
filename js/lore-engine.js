/*
====================================
 PersiaNexus Lore Engine
 Version 1.0
====================================
*/


const loreDatabase =
"data/lore-memory.json";



async function loadLoreMemory(){


try{


const response =
await fetch(loreDatabase);


const lore =
await response.json();



window.PersiaNexusLore =
lore;



console.log(
"Lore Memory Loaded",
lore
);



}

catch(error){


console.log(
"Lore Loading Error:",
error
);


}


}





function askLore(question){


if(!window.PersiaNexusLore){

return "Lore system is loading...";

}



let text =
question.toLowerCase();



for(
const character of
window.PersiaNexusLore.characters
){


if(
text.includes(
character.name.toLowerCase()
)
){


return `

${character.name}

Role:
${character.role}

Power:
${character.power}

Alignment:
${character.alignment}

`;

}


}



return
window.PersiaNexusLore.main_story.summary;



}





window.onload =
loadLoreMemory;
