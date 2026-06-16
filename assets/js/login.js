let email = document.getElementById("email");
let clave = document.getElementById("clave");
let btnIniciar = document.getElementById("btnIniciar");
let error_login = document.getElementById("error_login");
let cerrar_error = document.getElementById("cerrar_error");
let tipo_error = document.getElementById("tipo_error");

btnIniciar.addEventListener("click", () => {
    if (email.value == "admin" && clave.value == "1234") {
            tipo_error.innerHTML = "Exito: Redirigiendo al sistema.";
            error_login.classList.remove("alert-danger");
            error_login.classList.add("alert-success");
            error_login.classList.remove("error_login_hidde");
        setTimeout(() => {
            location.href = "menu.html";
        }, 3000);

    } else {
        if (email.value == "" && clave.value == "") {
            tipo_error.innerHTML = "Error: Campos vacios, complete para continuar.";
            error_login.classList.remove("error_login_hidde");
            error_login.classList.add("error_login_show");
        } else if (email.value == "") {
            tipo_error.innerHTML = "Error: Campo emal esta vacio, complete para continuar.";
            error_login.classList.remove("error_login_hidde");
            error_login.classList.add("error_login_show");
        } else if (clave.value == "") {
            tipo_error.innerHTML = "Error: Campo clave esta vacio, complete para continuar.";
            error_login.classList.remove("error_login_hidde");
            error_login.classList.add("error_login_show");
        } else {
            tipo_error.innerHTML = "Error: Credenciales incorrectas.";
            error_login.classList.remove("error_login_hidde");
            error_login.classList.add("error_login_show");
        }
    }

});

cerrar_error.addEventListener("click", () => {
    if (error_login.classList.contains("error_login_show")) {
        error_login.classList.remove("error_login_show");
        error_login.classList.add("error_login_hidde");
    }
});