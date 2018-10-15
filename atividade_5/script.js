
// funcao de adicionar classes ao clicar no botao
var on = false; //botão ativado ou não

function onClickChange() {
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

//aumantar a altura de maneira suave
function height(x) {
    var elem = document.querySelector("#t" + x);
    elem.classList.toggle("altura");
}

//função para resolver o problema do titulo desaparecido depois de ativar o botão do menu e aumentar a tela
var x = window.matchMedia("(max-width: 480px)");
changeTitulo(x);
x.addListener(changeTitulo);function changeTitulo(x) {
    if (x.matches && on) { 
        document.querySelector(".titulo-site").style.display = "none";
    } else {
        document.querySelector(".titulo-site").style.display = "block";
    }
}