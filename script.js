console.log("IranVerse OS Initialized");
console.log(IranVerseHeroes);
const aiButton = document.getElementById("ai-check");

const aiStatus = document.getElementById("ai-status");


if(aiButton){

aiButton.onclick = function(){

if(window.IranVerseAI){

aiStatus.innerHTML = 
`
Online ✅ <br>
Mode: ${IranVerseAI.mode}<br>
Version: ${IranVerseAI.version}
`;

}

else{

aiStatus.innerHTML =
"AI Core Not Connected";

}

};

}
