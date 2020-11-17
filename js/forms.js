var botaoadddd = document.querySelector("#adicionar-paciente");
botaoadd.addEventListener("click",function (event) {
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