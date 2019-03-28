
document.addEventListener("DOMContentLoaded", Prompter);
function Prompter(){
  var person:string= prompt("insert name","name");
  if (person != null){
  document.getElementById("Prompt").innerHTML = 
  "Hello " + person + "hopefully, you'll have a nice day!";
}
console.info ("Hallo" + person + "hopefully, you'll have a nice day!")
}
