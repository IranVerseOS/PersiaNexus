// =====================================
// IranVerseOs Hero Engine v1.0
// =====================================

console.log("Hero Engine Loaded");
async function loadHeroes(){


try{


const response = await fetch(
"heroes/heroes.json"
);



const data = await response.json();



window.IranVerseHeroes = data;



console.log(
"Heroes Database Online:",
data
);



renderHeroes();



}


catch(error){


console.error(
"Heroes Database Error:",
error
);


}


}






function renderHeroes(){



const container =
document.getElementById(
"hero-container"
);



if(
!container ||
!window.IranVerseHeroes ||
!window.IranVerseHeroes.heroes
){

return;

}



container.innerHTML = "";





IranVerseHeroes.heroes.forEach(hero => {



const card =
document.createElement("div");



card.className =
"hero-card";





card.innerHTML = `



<div class="hero-avatar">


${
hero.image

?

`<img src="${hero.image}">`

:

"⚔️"

}


</div>





<h3>
${hero.name}
</h3>





<h4>
${hero.title}
</h
