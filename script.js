var Ps = 0.05
var FP = 100
var CP = 15
var q = 1
var a = 0
var C = document.getElementById("Cursor")
C.addEventListener('mouseenter',InfoCe)
C.addEventListener('mouseout',InfoCs)
var CI = document.getElementById("InfoCursor")
var CB = document.getElementById("BuyCursor")
CB.addEventListener('click',BuyC)
var N = document.getElementById("Num")
var d = document.getElementById("Area")
d.addEventListener('click',Clica)
d.addEventListener('mouseenter',Entra)
d.addEventListener('mouseout',Sai)
var F = document.getElementById("Func")
F.addEventListener('mouseenter',InfoFe)
F.addEventListener('mouseout',InfoFs)
var FI = document.getElementById("InfoFunc") 
var FB = document.getElementById("BuyFunc")
FB.addEventListener('click',BuyF)
const autoCookie = setInterval(() => {
    a += Ps
    N.innerText = "Cookies clicados :"
    N.innerText += a.toFixed(1)
}, 1000)
function InfoCe(){
    CI.innerHTML = "Comprando isso, você obterá 1.5X mais Cookies"
}
function InfoCs(){
    C.style.float = "none";
    CI.innerHTML = ""
}
function BuyC(){
    if(CP <= a){
        a -= CP;
        CP *= 3.5
        q *= 1.5
        CB.innerHTML = "Comprar : "
        CB.innerHTML += CP
    }
}
function InfoFe(){
    FI.innerHTML = "Comprando isso, você obterá mais " + Ps*2 + " Cookies por segundo"
}
function InfoFs(){
    
    FI.innerHTML = ""
}
function BuyF(){
    if(FP <= a){
        a -= FP;
        FP *= 4
        Ps *= 2
        FB.innerHTML = "Comprar : "
        FB.innerHTML += FP
    }
}
function Entra(){
    d.style.cursor = "grab"
    d.style.width = "500px";
}
function Sai(){

    d.style.width = "350px";
}
function Clica(){
    d.style.cursor = "grabbing"
    a += q
    N.innerText = "Cookies clicados :"
    N.innerText += a.toFixed(1)
    d.style.background = "blue"
}