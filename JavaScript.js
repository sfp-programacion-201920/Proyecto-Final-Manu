function email() {
    var email = document.getElementById("email").value;
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email))) {
        alert("El correo no sigue la estructura");
        return false;
    }
}
function telefono() {
var telefono = document.getElementById("telefono").value;
    if (isNaN(telefono)){
    alert("Solo se puede poner números");
    return false;}
}

var contraseña = document.getElementById("contraseña").value;
if (contraseña === null || contraseña === "") {
    alert("La contraseña está vacía, rellenela");
    return false;
}
