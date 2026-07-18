/*
==================================
 PersiaNexus Founder Approval System
 Version 1.0
==================================
*/


let pendingCommand = null;



function receiveAICommand(command){


pendingCommand = command;



showAIReport(command);


}




function showAIReport(command){


const chat =
document.getElementById(
"ai-chat"
);



chat.innerHTML += `


<div class="ai-report">


<h3>
🧠 AI Nexus Report
</h3>


<p>
Command:
${command}
</p>


<p>
Status:
Waiting Founder Approval
</p>


<button onclick="approveAI()">

APPROVE

</button>


<button onclick="rejectAI()">

REJECT

</button>


</div>


`;



}




function approveAI(){


const chat =
document.getElementById(
"ai-chat"
);



chat.innerHTML +=

`
<p>
✅ Founder Approved.
AI can prepare changes.
</p>
`;



}




function rejectAI(){


const chat =
document.getElementById(
"ai-chat"
);



chat.innerHTML +=

`
<p>
❌ Founder Rejected.
</p>
`;



}
