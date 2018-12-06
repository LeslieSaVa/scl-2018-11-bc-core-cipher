window.onload = ()=>{
document.getElementById("botonNext").addEventListener("click",
(evento) =>{
  evento.preventDefault();
  document.getElementById("paragraph0").style.display="none";
  document.getElementById("myDiv").style.display ="none";
  document.getElementById("myDiv1").style.display ="block";

})

document.getElementById("botonCifrar").addEventListener("click",
(evento) => {
  evento.preventDefault();
  document.getElementById("myDiv2").style.display ="inline-block";

  let offset = document.getElementById("offset").value;
      offset=parseInt(offset);
  let boxText = document.getElementById("boxText").value;
  if(boxText.indexOf("Ñ") !== -1 || boxText.indexOf("ñ") !== -1){
      alert("La letra Ñ no sera cifrada");
  }
  document.getElementById("myDiv2").innerHTML = window.cipher.encode(offset,boxText);

})

document.getElementById("botonDescifrar").addEventListener("click",
(evento)=> {
  evento.preventDefault();
  document.getElementById("myDiv2").style.display ="inline-block";

  let offset = document.getElementById("offset").value;
    offset=parseInt(offset);
  let boxText = document.getElementById("boxText").value;

  document.getElementById("myDiv2").innerHTML = window.cipher.decode(offset,boxText);
})

}

   document.getElementById("botonVolver").addEventListener("click", () => {
       document.location = "index.html";
   })
