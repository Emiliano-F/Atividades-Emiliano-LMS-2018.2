let URL = "http://localhost:3000/grupos";

function getItems(path) {
    let con = new XMLHttpRequest();
    con.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log("get");
            let resBody = JSON.parse(this.responseText);
            addGroup(resBody);
           // console.log(resBody)
        }
    }
    con.open("GET", URL+path, true);
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
    con.open("POST", URL, true);
    con.setRequestHeader("Content-type", "application/json");
    con.send(JSON.stringify(lista));
}
//sendItems(item);
//getItems("");

//adicionar grupos dinamicamente
function addGroup(listaMsg) {
    //console.log(name);
    //console.log(id);
    for (let i = 0; i < listaMsg.length; i++) {
        //console.log(listaMsg[i].id);

        let column = document.getElementById('coluna');
        let grupo = document.createElement('div');
        let img = document.createElement('img');
        let grupoNome = document.createElement("div");
    
        grupo.id = listaMsg[i].id;
        grupo.classList.add("contact-plane", "panel");
        grupo.addEventListener("click", function () {// 
            letsChat(listaMsg[i].id);
        })
        
        img.src = `./img/02_users/0${listaMsg[i].id}.jpeg`;
        img.classList.add('user-icon');
        grupoNome.classList.add("user-name");
        grupoNome.innerHTML = listaMsg[i].nomeGrupo;
        
        grupo.appendChild(img);
        grupo.appendChild(grupoNome);
        column.appendChild(grupo);
        
    }
}

//mudar o chat
function letsChat(id) {
    let grupo = document.getElementById(id);
    let chatHeader = document.getElementById("chat-user");
    
    chatHeader.children[0].src = grupo.children[0].src;
    chatHeader.children[1].innerHTML = grupo.children[1].innerHTML;
}
window.onload = getItems("")
