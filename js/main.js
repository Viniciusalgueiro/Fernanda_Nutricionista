var titulo = document.querySelector(".titulo");

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdpeso = paciente.querySelector(".info-peso");

    var peso = tdpeso.textContent;
    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso >= 300) {
        console.log("peso inválido");
        pesoValido = false;
        tdIMC.textContent = "peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    if (altura < 0.5 || altura > 2.50) {
        console.log("altura inválida");
        alturaValida = false;
        tdIMC.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");


    }
    if (alturaValida && pesoValido) {
        var imc = peso / (altura ** 2);
        tdIMC.textContent = imc.toFixed(2);

    }
}

var botaodd = document.querySelector("#adicionar-paciente");
botaodd.addEventListener("click",function (event) {
    event.preventDefault();
    var form = document.querySelector("#formadd");
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");


    nomeTd.textContent = form.nome.value;
    pesoTd.textContent = form.peso.value;
    alturaTd.textContent = form.altura.value;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    alert("Um novo cliente foi adicionado ")
    console.log("clicado");
});
