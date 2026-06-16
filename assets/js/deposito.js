$("#btnRealizarDeposito").on("click", function () {

    if ($("#nuevoSaldo").val() != "") {

        if (localStorage.getItem("saldo")) {
            let dinero = parseInt(localStorage.getItem("saldo")) + parseInt($("#nuevoSaldo").val());
            localStorage.setItem("saldo", dinero);
            window.location.href = "menu.html";
        } else {
            localStorage.setItem("saldo", 0);
        }
    }else{
        alert("debe completar el campo de monto.");
        $("#nuevoSaldo").css("background-color","pink");
        $("#nuevoSaldo").focus();
    }

    if (!localStorage.getItem("datos")) {
        localStorage.setItem("datos", "[]");
    }

});


