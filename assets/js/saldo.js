let saldo = document.getElementById("saldo");
if (localStorage.getItem("saldo")) {
    console.log("existe")
    saldo.innerText = localStorage.getItem("saldo")
} else{
    console.log("no existe")
    saldo.innerText = "0";
}
