const szam = document.getElementsByClassName("szam");

const inputElem = document.getElementById("mezo");
szam[0].addEventListener("click", fv)
szam[1].addEventListener("click", fv)
szam[2].addEventListener("click", fv)
szam[3].addEventListener("click", fv)
szam[4].addEventListener("click", fv)
szam[5].addEventListener("click", fv)
szam[6].addEventListener("click", fv)
szam[7].addEventListener("click", fv)
szam[8].addEventListener("click", fv)
szam[9].addEventListener("click", fv)
szam[10].addEventListener("click", fv)
szam[11].addEventListener("click", fv)
szam[12].addEventListener("click", fv)
szam[13].addEventListener("click", fv)
szam[14].addEventListener("click", fv)
szam[15].addEventListener("click", fv)

const jelek = document.getElementsByClassName("jelek");

jelek[0].addEventListener("click", fv)
jelek[1].addEventListener("click", fv)
jelek[2].addEventListener("click", fv)
jelek[3].addEventListener("click", fv)
jelek[4].addEventListener("click", fv)

function fv(){
    console.log(event.target.id)
    inputElem.value += event.target.id
}