function esconder() {
document.getElementById("myDiv").style.display ="none";
document.getElementById("myDiv1").style.display ="block";
  }
function cifrar(){
  document.getElementById("myDiv2").style.display ="inline-block";
  let offset = document.getElementById("offset").value;
      offset=parseInt(offset);
  let cajaTexto = document.getElementById("cajaTexto").value;
  console.log(window.cipher.encode(offset,cajaTexto));
  document.getElementById("myDiv2").innerHTML = window.cipher.encode(offset,cajaTexto);

}

function descifrar(){
  document.getElementById("myDiv2").style.display ="inline-block";
  let offset = document.getElementById("offset").value;
    offset=parseInt(offset);
  let cajaTexto = document.getElementById("cajaTexto").value;
  console.log(window.cipher.decode(offset,cajaTexto));
  document.getElementById("myDiv2").innerHTML = window.cipher.decode(offset,cajaTexto);
}
