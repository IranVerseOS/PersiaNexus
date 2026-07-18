/*
=================================
 PersiaNexus Founder Security
 Version 1.0
=================================
*/


const founderKey =
"PersiaNexus-Founder";



function loginFounder(){


const input =
document.getElementById(
"founder-password"
).value;



if(input === founderKey){


localStorage.setItem(
"FounderAccess",
"Granted"
);



window.location.href =
"dashboard.html";


}


else{


document.getElementById(
"login-result"
).innerHTML =

"❌ Access Denied";


}


}
