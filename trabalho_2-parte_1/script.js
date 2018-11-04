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
        grupo: "Galera de DD",
        menssagens: [
            {
                usuario: "ismael",
                texto: "Oi bbs S2!"
            },
            {
                usuario: "igo",
                texto:"Oi bunitaum"
            },
            {
                usuario: "ismael",
                texto: "pra quando é o trabalho de lms?"
            },
            {
                usuario: "igo",
                texto: "é pra terça agora"
            },
            {usuario: "ismael", texto: "vish!"}
            
        ]
    }
];


let url = "http://localhost:3000/grupos";

function getItems() {
    let con = new XMLHttpRequest();
    con.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log("get");
            let resBody = JSON.parse(this.responseText);
            console.log(resBody)
            for (let i = 0; i < resBody.length; i++) {
                console.log(resBody[i]);
                
            }
        }
    }
    con.open("GET", url, true);
    con.send();    
}

function sendItems(lista) {
    let con = new XMLHttpRequest();
    con.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log("post");
            //getItems();
        }
    }
    con.open("POST", url, true);
    con.setRequestHeader("Content-type", "application/json");
    con.send(JSON.stringify(lista));
}
//sendItems(grupos);
getItems();


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

//mudar o chat
/* function letsChat(id) {
    let chatUser = document.getElementById("chat-user");
    let user = document.getElementById(id);

    chatUser.children[0].src = user.children[0].src;
    chatUser.children[1].innerHTML = user.children[1].innerHTML;    
} */
