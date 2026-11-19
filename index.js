const szam = document.getElementsByClassName("szam");
szam[0].addEventListener("click", fv)
const inputElem = document.getElementById("mezo");


function fv(){
    console.log(event.target.id)
    inputElem.value += event.target.id
}