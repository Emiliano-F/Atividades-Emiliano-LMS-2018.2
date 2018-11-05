
let url = "http://localhost:3000/grupos";
function getItems() {
    let con = new XMLHttpRequest();
    con.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log("get");
            let resBody = JSON.parse(this.responseText);
            console.log(resBody)
            for (let i = 0; i < resBody.length; i++) {
                //console.log(resBody[i].nomeGrupo);
                addGroup(resBody[i].nomeGrupo, resBody[i].id);                
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
function addGroup(name, id) {
    console.log(name);
    console.log(id);
    let column = document.getElementById('coluna');
    let grupo = document.createElement('div');
    let img = document.createElement('img');
    let grupoNome = document.createElement("div");

    grupo.classList.add("contact-plane", "panel");
    grupo.id = "grupo-0" + id;
    grupo.addEventListener("click", function () {// remove ou adiciona a classe do selecionado
        letsChat(this.id);
        
        /* if (this.classList.contains("gp-sel")) {
            this.classList.remove("gp-sel");
            console.log("tem");
            //verify("gp-sel", "contact-plane");
            return;
        }
        console.log("nao tem");
        this.classList.add("gp-sel"); */
    })

    img.src = './img/icone.png';
    img.classList.add('user-icon');
    grupoNome.classList.add("user-name");
    grupoNome.innerHTML = name;

    grupo.appendChild(img);
    grupo.appendChild(grupoNome);
    column.appendChild(grupo);
}

/* function verify(className, classId) {
    let gps = document.querySelectorAll("." + classId);
    for (let i = 0; i < gps.length; i++){

    }
} */

//mudar o chat
function letsChat(id) {
    let grupo = document.getElementById(id);
    let chatHeader = document.getElementById("chat-user");
    //let msg = document.getElementById("msg");
    console.log(chatHeader.children)
    chatHeader.children[0].src = grupo.children[0].src;
    chatHeader.children[1].innerHTML = grupo.children[1].innerHTML;
}
