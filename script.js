// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let readyCheck=false;
      if (pilotName.value === "" || copilotName.value === ""|| cargoMass.value===""||fuelLevel.value==="") {
         alert("All fields are required!");
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
      }
      if(fuelLevel.value<=10000){
         launchStatus.innerHTML='<font color="red">Shuttle Not Ready For Launch</font>'
         fuelStatus.innerHTML="Not enough fuel"
      }
      if(pilotName.value===""){
         launchStatus.innerHTML='<font color="red">Shuttle Not Ready For Launch</font>'
         pilotStatus.innerHTML="Pilot not Ready"
      }else{
         pilotStatus.innerHTML=`Pilot ${pilotName.value} Ready`
      }
      if(copilotName.value===""){
         launchStatus.innerHTML='<font color="red">Shuttle Not Ready For Launch</font>'
         copilotStatus.innerHTML="Co-pilot not Ready"
      }else{
         copilotStatus.innerHTML=`Co-pilot ${copilotName.value} Ready`
      }

   });
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         const div = document.getElementById("missionTarget");
         // Add HTML that includes the JSON data
         div.innerHTML = `
            <ul>
               <li>Name ${json[0].name}</li>
               <li>Diameter: ${json[0].diameter}</li>
               <li>Star: ${json[0].star}</li>
               <li>Distance from Earth: ${json[0].distance}</li>
               <li>Number of Moons: ${json[0].moons}</li>
               <img src=${json[0].image}>
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
