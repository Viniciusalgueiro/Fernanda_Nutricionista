var titulo = document.querySelector(".titulo");

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("peso inválido");
        pesoEhValido = false;
        tdIMC.textContent = "peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    if (!alturaEhValida) {
        console.log("altura inválida");
        alturaEhValida = false;
        tdIMC.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");


    }
    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura ** 2);
        tdIMC.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso) {

    if(peso >= 0 && peso <= 500) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if (altura >=0 && altura <= 3.00) {
        return true;
    }else {
        return false;
    }
}