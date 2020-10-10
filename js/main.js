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
    }
    if (altura < 0.5 || altura > 2.50) {
        console.log("altura inválida");
        tdIMC.textContent = "altura inválida!";
        alturaValida = false;
    }
    if (alturaValida && pesoValido) {
        var imc = peso / (altura ** 2);
        tdIMC.textContent = imc.toFixed(2);

    }
}

