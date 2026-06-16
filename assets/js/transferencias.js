let datos = JSON.parse(localStorage.getItem("datos"));
datos.map((e)=>{

    $("#tabla").append(`<tr><td>${e["cbu"]}</td><td>${e["nombre"]}</td><td>${e["alias"]}</td><td>${e["banco"]}</td><td>${e["monto"]}</td></tr>`);

})


