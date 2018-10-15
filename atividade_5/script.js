
// funcao de adicionar classes ao clicar no botao

var on = false;


function change() {
    var menu = document.querySelector(".menu-lateral");
    var botao = document.querySelector(".botao-menu");
    var titulo = document.querySelector(".titulo-site");
    //menu.classList.toggle("margem-zero");
    //menu.style.marginLeft = "0px"
    //botao.style.marginLeft = "250px";
    titulo.style.display = "none"


    //gambiarrazinha pra fazer o botao deslocar
    if(on){
        //botao.style.marginLeft = "0px";
        titulo.style.display = "block";
        on = false;
        return;
    }
    on = true;
}
