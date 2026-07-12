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
const commandButton =
document.getElementById("send-command");


const commandBox =
document.getElementById("ai-command");


const responseBox =
document.getElementById("ai-response");


if(commandButton){

commandButton.onclick=function(){


let command = commandBox.value;


if(command){

responseBox.innerHTML =
`
AI received:

"${command}"

Analysis started...
`;

}


};

}
