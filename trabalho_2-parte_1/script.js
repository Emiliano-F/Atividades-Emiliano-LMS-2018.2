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

    document.querySelector("#coluna").appendChild(card); //seleção por id é mais segura - id unico no documento
}

let cont = 1
for (let i = 0; i < 3; i++){
    
    addUser(`Grupo dinamicamente criado - ${cont}`);
    cont++;
}

function letsChat(id) {
    let chatUser = document.getElementById("chat-user");
    let user = document.getElementById(id);
    let userName = document.createTextNode(user.children[1].innerHTML);
    let userImg = document.createElement("img");

//    userImg.src = user.children[0].src;
    chatUser.children[0].src = user.children[0].src;
    chatUser.children[1].innerHTML = user.children[1].innerHTML;
    
}

letsChat("1");

/* 
let user = document.getElementById("1");
let userImg = document.createElement("img");
userImg.src = user.src;

console.log(userImg); */