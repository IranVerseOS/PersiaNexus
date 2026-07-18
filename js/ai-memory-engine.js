/*
====================================
 PersiaNexus AI Memory Engine
 Version 1.0
====================================
*/


const projectMemory =
"data/project-memory.json";



async function loadProjectMemory(){


try{


const response =
await fetch(projectMemory);



const memory =
await response.json();



window.PersiaNexusMemory =
memory;



console.log(
"AI Memory Loaded",
memory
);



}

catch(error){


console.log(
"Memory Load Error:",
error
);


}


}





function getProjectStatus(){


if(!window.PersiaNexusMemory){

return "Memory not loaded";

}



return {

project:
window.PersiaNexusMemory.project.name,


version:
window.PersiaNexusMemory.project.version,


systems:
window.PersiaNexusMemory.systems,


completed:
window.PersiaNexusMemory.completed_steps.length

};


}





window.onload =
loadProjectMemory;
