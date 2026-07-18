const toggle =
document.getElementById(
"ai-toggle"
);


const panel =
document.getElementById(
"ai-panel"
);



if(toggle){

toggle.onclick=function(){

if(panel.style.display==="block"){

panel.style.display="none";

}

else{

panel.style.display="block";

}

}

}



const send =
document.getElementById(
"send-ai-command"
);



if(send){

send.onclick=function(){


const command =
document.getElementById(
"ai-command"
).value;



document.getElementById(
"ai-chat"
).innerHTML +=

"<p>Founder Command Received: "
+
command
+
"</p>"
;



document.getElementById(
"ai-chat"
).innerHTML +=

"<p>AI Nexus: Preparing analysis and preview...</p>";



}

}
