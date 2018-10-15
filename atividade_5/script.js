
// funcao de adicionar classes ao clicar no botao

var on = false;

function change() {
    var menu = document.querySelector(".menu-lateral");
    var botao = document.querySelector(".botao-menu");
    var titulo = document.querySelector(".titulo-site");
    var fundo = document.querySelector(".fundo");
    menu.classList.toggle("margem-zero");
    botao.style.marginLeft = "250px";
    titulo.style.display = "none";
    fundo.style.display = "block";


    //gambiarrazinha pra fazer o botao deslocar
    if(on){
        botao.style.marginLeft = "0px";
        titulo.style.display = "block";
        fundo.style.display = "none";
        on = false;
        return;
    }
    on = true;
}
function height(x) {
    var elem = document.querySelector("#t" + x);
    elem.classList.toggle("altura");
}
var tela = window.matchMedia("max-width")