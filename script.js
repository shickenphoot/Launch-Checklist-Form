// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let readyCheck=true;
      if (pilotName.value === "" || copilotName.value === ""|| cargoMass.value===""||fuelLevel.value==="") {
         alert("All fields are required!");
         readyCheck=false;
         event.preventDefault();
         // stop the form submission
      }
      document.getElementById('faultyItems').style.visibility="visible";
      let pilotStatus=document.getElementById("pilotStatus");
      let copilotStatus=document.getElementById("copilotStatus");
      let fuelStatus=document.getElementById("fuelStatus");
      let cargoStatus=document.getElementById("cargoStatus");
      let launchStatus=document.getElementById('launchStatus');
      if(cargoMass.value>=10000){
         launchStatus.innerHTML='<font color="red">Shuttle Not Ready For Launch</font>'
         cargoStatus.innerHTML="Too Heavy"
         readyCheck=false;
         event.preventDefault();
      }else{
         cargoStatus.innerHTML="Cargo mass low enough for launch"

      }
      if(fuelLevel.value<10000){
         launchStatus.innerHTML='<font color="red">Shuttle Not Ready For Launch</font>'
         fuelStatus.innerHTML="Not enough fuel"
         readyCheck=false;
         event.preventDefault();
      }else{
         fuelStatus.innerHTML="Fuel level high enough for launch"

      }
      if(pilotName.value===""){
         launchStatus.innerHTML='<font color="red">Shuttle Not Ready For Launch</font>'
         pilotStatus.innerHTML="Pilot not Ready"
         readyCheck=false;
         event.preventDefault();
      }else{
         pilotStatus.innerHTML=`Pilot ${pilotName.value} Ready`
      }
      if(copilotName.value===""){
         launchStatus.innerHTML='<font color="red">Shuttle Not Ready For Launch</font>'
         copilotStatus.innerHTML="Co-pilot not Ready"
         readyCheck=false;
         event.preventDefault();
      }else{
         copilotStatus.innerHTML=`Co-pilot ${copilotName.value} Ready`
      }
      if(readyCheck){
         launchStatus.innerHTML="Ship ready for launch"
         event.preventDefault();
      }
   
   });
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         const div = document.getElementById("missionTarget");
         // Add HTML that includes the JSON data
         let random=Math.ceil(Math.random()*6)
         div.innerHTML = `
            <ul>
               <li>Name ${json[random].name}</li>
               <li>Diameter: ${json[random].diameter}</li>
               <li>Star: ${json[random].star}</li>
               <li>Distance from Earth: ${json[random].distance}</li>
               <li>Number of Moons: ${json[random].moons}</li>
               <img src=${json[random].image}>
            </ul>
         `;
      });
   });

});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
