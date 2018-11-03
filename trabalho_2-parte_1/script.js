let url = "http://rest.learncode.academy/api/emiliano/grupos";

function getItems() {
    let getServer = new XMLHttpRequest();
    getServer.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log("get");
            let resBody = JSON.parse(this.responseText);
            console.log(resBody);
        }
    }
    getServer.open("GET", url, true);
    getServer.send();    
}


//adicionar grupos dinamicamente
function addGroup(name) {
    let column = document.getElementById('coluna');
    let grupo = document.createElement('div');
    let img = document.createElement('img');
    let grupoNome = document.createElement("div");

    grupo.classList.add("contact-plane", "panel");
    img.src = './img/icone.png';
    img.classList.add('user-icon');
    grupoNome.classList.add("user-name");
    grupoNome.innerHTML = name;

    grupo.appendChild(img);
    grupo.appendChild(grupoNome);
    column.appendChild(grupo);
}
let grupos = [
    {
        grupo: 'grupo da familia',
        menssagens: [
            {
                usuario: "joao",
                texto: "Oi td bem?"
            },
            {
                usuario: "victor",
                texto: "To de buenass"
            },
            {
                usuario: "joao",
                texto: "que bom"
            }
        ]
    },
    {
        grupo: "Paquera de DD",
        menssagens: [
            {
                usuario: "ismael",
                texto: "Oi bbs S2!"
            },
            {
                usuario: "igo",
                texto:"Oi gatinho"
            }
        ]
    }
];

//mudar o chat
/* function letsChat(id) {
    let chatUser = document.getElementById("chat-user");
    let user = document.getElementById(id);

    chatUser.children[0].src = user.children[0].src;
    chatUser.children[1].innerHTML = user.children[1].innerHTML;    
} */
