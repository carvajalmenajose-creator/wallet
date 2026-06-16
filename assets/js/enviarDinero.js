$("#btnRealizarEnviarDinero").on("click", () => {
    let respuesta = confirm("¿Esta seguro de enviar dinero.?");
    if (respuesta) {

        let dinero = parseInt(localStorage.getItem("saldo")) - parseInt(monto.value);
        localStorage.setItem("saldo", dinero);
        let nuevaTransferencia = JSON.parse(localStorage.getItem("datos"));

        const DatosTransferencias = {
            "nombre": $("#nombre").val(),
            "cbu": $("#cbu").val(),
            "alias": $("#alias").val(),
            "banco": $("#banco").val(),
            "monto": $("#monto").val()
        };

        nuevaTransferencia.push(DatosTransferencias);
        localStorage.setItem("datos", JSON.stringify(nuevaTransferencia));
        window.location.href = "menu.html";
    }
});