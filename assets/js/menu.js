let mensaje = document.getElementById("mensaje");
let link = document.querySelectorAll(".nav-link");


link.forEach((enlace) => {
    enlace.addEventListener("click", () => {
        if (enlace.innerText.trim() == "Depositar") {
            mensaje.innerText = "Redirigiendo a la seccion de Depositar...";
            mensaje.classList.remove("d-none");
            mensaje.classList.add("d-block");
            setTimeout(() => {
                location.href = "deposit.html";
            }, 3000);
        } else if (enlace.innerText.trim() == "Enviar Dinero") {
            mensaje.innerText = "Redirigiendo a la seccion de Enviar Dinero...";
            mensaje.classList.remove("d-none");
            mensaje.classList.add("d-block");
            setTimeout(() => {
                location.href = "sendmoney.html";
            }, 3000);
        } else if (enlace.innerText.trim() == "Últimos Movimientos") {
            mensaje.innerText = "Redirigiendo a la seccion de Últimos Movimientos...";
            mensaje.classList.remove("d-none");
            mensaje.classList.add("d-block");
            setTimeout(() => {
                location.href = "transactions.html";
            }, 3000);
        }
    })

});
