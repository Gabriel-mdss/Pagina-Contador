//declarando e "vinculando" as variaveis feitas no html e declarando no js
var numero = 0
var btnadd = document.getElementById("btn")
var btnsub = document.getElementById("btns")
var btnreset = document.getElementById("btnr")
var contador = document.getElementById("cont1")
//dando a ação para o botao do html
btnadd.addEventListener("click", function ()
{
numero++
contador.textContent = "NUMERO: " + numero
})
//dando a ação para o outro botão do html
btnsub.addEventListener("click", function () {
    if (numero > 0){
    numero--
    contador.textContent = "NUMERO: " + numero}
})
btnreset.addEventListener("click", function (){
    numero = 0
    contador.textContent = "NUMERO: " + numero
})