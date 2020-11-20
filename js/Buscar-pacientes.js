var botaoAdicionar = document.querySelector("#Buscar-pacientes");

botaoAdicionar.addEventListener("click", function (){
    console.log("Buscando Pacientes...");
    var xhr = new XMLHttpRequest();
    xhr.open("GET","http://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load",function (){
        var reposta = xhr.responseText;
    })
});