//adicionar grupos dinamicamente
var userId = 0;
function addUser(nameUser) {
    let card, img, nome;
    card = document.createElement("div");
    img = document.createElement("img");
    nome = document.createElement("div");

    card.id = userId;
    userId++;
    
    card.classList.add("contact-plane", "panel");
    img.classList.add("user-icon");
    nome.classList.add("user-name");
    let txt = document.createTextNode(nameUser);
    nome.appendChild(txt);
    
    img.src = "./img/icone.png";

    card.appendChild(img);
    card.appendChild(nome);
    //lance de adicionar
    card.addEventListener("click", function () {
        letsChat(card.id);
    })

    document.querySelector("#coluna").appendChild(card); //seleção por id é mais segura - id unico no documento
}

//chamar a função que adiciona 3 vezes
let cont = 1
for (let i = 0; i < 3; i++){
    
    addUser(`Grupo dinamicamente criado - ${cont}`);
    cont++;
}

//mudar o chat
function letsChat(id) {
    let chatUser = document.getElementById("chat-user");
    let user = document.getElementById(id);

    chatUser.children[0].src = user.children[0].src;
    chatUser.children[1].innerHTML = user.children[1].innerHTML;    
}
