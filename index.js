let elsoSzamjegySzovege = "" // a változót létrehoztuk, beállítottuk az értékét üres szövegre
let masodikSzamjegySzovege = ""
let muvelet = ""
//szám gombok
const szamok = document.getElementsByClassName("szam") // eredménye egy lista - megfogjuk a Classnévvel ellátott HTML elemet
//műveleti jelek
const fosok = document.getElementsByClassName("fos")// eredménye lista ugyanúgy
const kiiro = document.getElementById("kiirato")//input tag
//egyenlőség jel
const egyenlo = document.getElementById("egyenlo")
//a C törlés jel
const torles = document.getElementById("torles")

console.log(szamok[0].textContent)

for (let index = 0; index < szamok.length; index++) {
    szamok[index].addEventListener("click", beir) 
}
    



function beir(event){
    //az input mezőbe írja a számokat, amikre kattintottunk
    //Mi jelenti a számot?
    console.log(event.target)
    console.log(event.target.textContent)

    kiiro.value += event.target.textContent // az input elembe beleírja annak az elemnek az értékét amire rákattintottunk
    // a kiiro input elem, value-ja van

}

/* ha rákattintunk egy műveleti jelre, akkor:
1. mentsük el az input elem tartalmát, az elsoSzamjegySzovege változóba
2. A műveleti jelet mentsük el muvelet változóba
3. Töröljük ki az input elem tartalmát*/

for (let index = 0; index < fosok.length; index++) {
    fosok[index].addEventListener("click", muveletElvegzese)
    
}

function muveletElvegzese(){
    elsoSzamjegySzovege = kiiro.value
    console.log(elsoSzamjegySzovege)
    console.log(event.target.textContent)//ez visszaadja a műveleti jelet
    muvelet = event.target.textContent
    kiiro.value = ""
}

/* Az egyenlőség jel működése:
1. Ha rákattintunk az egyenlőség jelre
2. Akkor a masodikSzamjegySzovege mentsük el az input mező tartalmát
3. Végezzük el a műveletet az elsoSzamjegySzovege és a masodikSzamjegySzovege számok között
4. Az eredményt írjuk ki az input elembe*/


egyenlo.addEventListener("click", szamolas)

//SZÁMOLÁS//
function szamolas(){
    masodikSzamjegySzovege = kiiro.value
    //ide kell egy elágazás a műveleti jel szerint
    let eredmeny = 0
    if(muvelet == "+"){
        eredmeny = Number(elsoSzamjegySzovege) + Number(masodikSzamjegySzovege)
    }
    if(muvelet == "-"){
        eredmeny = Number(elsoSzamjegySzovege) -  Number(masodikSzamjegySzovege)
    }
    if(muvelet == "*"){
        eredmeny = Number(elsoSzamjegySzovege) * Number(masodikSzamjegySzovege)
    }
    if(muvelet == "/" && masodikSzamjegySzovege!="0"){
        eredmeny = Number(elsoSzamjegySzovege) / Number(masodikSzamjegySzovege)
    }



    
    kiiro.value = eredmeny
}





torles.addEventListener("click", kitorles)
function kitorles(event){
    kiiro = kiiro.value = ""
    elsoSzamjegySzovege = ""
    masodikSzamjegySzovege = ""
}