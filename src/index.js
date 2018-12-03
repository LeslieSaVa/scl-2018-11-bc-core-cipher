window.onload = ()=>{
document.getElementById("botonNext").addEventListener("click",
(evento) =>{
  evento.preventDefault();
  document.getElementById("myDiv").style.display ="none";
  document.getElementById("myDiv1").style.display ="block";

})

document.getElementById("botonCifrar").addEventListener("click",
(evento) => {
  evento.preventDefault();
  document.getElementById("myDiv2").style.display ="inline-block";
  document.getElementById("volver").style.display ="block";
  let offset = document.getElementById("offset").value;
      offset=parseInt(offset);
  let boxText = document.getElementById("boxText").value;

  document.getElementById("myDiv2").innerHTML = window.cipher.encode(offset,boxText);

})

document.getElementById("botonDescifrar").addEventListener("click",
(evento)=> {
  evento.preventDefault();
  document.getElementById("myDiv2").style.display ="inline-block";
  document.getElementById("volver").style.display ="block";
  let offset = document.getElementById("offset").value;
    offset=parseInt(offset);
  let boxText = document.getElementById("boxText").value;

  document.getElementById("myDiv2").innerHTML = window.cipher.decode(offset,boxText);
})

}

   document.getElementById("botonVolver").addEventListener("click", () => {
       document.location = "index.html";
   })
