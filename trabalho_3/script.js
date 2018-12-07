var URL = "http://localhost:3000";
var result = undefined;

function getThing() {
    $.ajax({
        type: "GET",
        url: URL + '/numero',
        async: false,
        success: function (data) {
            console.table(data);
        }
    })
}

function postItem() {
    $.ajax({
        type: "POST",
        url: URL + "/numero",
        data: { carro: 'volquivagem', id: 2 },
        success: function (data) {
            console.clear()
            console.table(data);
        }
    })
}
getThing();
function deleteItem (id){
    $.ajax({
        type: "DELETE",
        url: URL + "/numero/" + id,
        async: false,
        success: function (data) {
            console.log(data)
        }
    })
}
