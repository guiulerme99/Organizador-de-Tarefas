let cont = 0;

function adicionar(x) {
    document.getElementById("adicionar").style.display = "flex"
    if (x==1) {
        document.getElementById("valor-titulo").innerHTML = "À Fazer"
    } else if (x==2) {
        document.getElementById("valor-titulo").innerHTML = "Em andamento"
    } else if (x==3) {
        document.getElementById("valor-titulo").innerHTML = "Concluido"
    }
}

function fechar() {
    document.getElementById("adicionar").style.display = "none"
}

function cartao() {
    let tarefa = document.getElementById("tarefa").value;
    let prioridade = document.getElementById("opcoes").value;
    let inicio = document.getElementById("inicio").value;
    let prazo = document.getElementById("prazo").value;
    let descricao = document.getElementById("descricao").value;
    let teste = document.getElementById("valor-titulo").innerHTML;
    let trocar;
    if (prioridade == 1){
        prioridade = 'style = background-color:green>Baixa'
    } else if (prioridade == 2){
        prioridade = 'style = background-color:orange>Média'
    } else {
        prioridade = 'style = background-color:red>Alta'
    }
    if (teste == "À Fazer"){
        trocar = "item-fazer";
    } else if (teste == "Em andamento") {
        trocar = "item-andamento";
    } else if (teste == "Concluido") {
        trocar = "item-concluido";
    }
    document.getElementById(trocar).innerHTML += "<div class='items' id=" + cont + ">" +
    '<div id="prioridade-item"' + prioridade + '</div>' +
    '<div id="tarefa-item">' + tarefa + '</div>' +
    '<div id="data-inicio-item">' + inicio + '</div>' +
    '<div id="data-prazo-item">' + prazo + '</div>' +
    '<div id="descricao-item"><i class="fa-regular fa-comment"></i><i class="fa-regular fa-square-caret-right"></i></div>' +
    '</div>';
    cont++;
    // fechar();
}
function mover(){

}