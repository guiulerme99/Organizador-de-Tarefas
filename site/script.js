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

function fechar(x) {
    if (x == 1) {
        document.getElementById("adicionar").style.display = "none"
    } else if (x == 2){
        document.getElementById("comentario").style.display = "none"
    }
}

function cartao() {
    let tarefa = document.getElementById("tarefa").value;
    let prioridade = document.getElementById("opcoes").value;
    let inicio = document.getElementById("inicio").value;
    let prazo = document.getElementById("prazo").value;
    let descricao = document.getElementById("descricao").value;
    let teste = document.getElementById("valor-titulo").innerHTML;
    let trocar;
    let valor;
    let id = "id-" + cont;
    if (prioridade == 1){
        prioridade = 'style = background-color:green>Baixa'
    } else if (prioridade == 2){
        prioridade = 'style = background-color:orange>Média'
    } else {
        prioridade = 'style = background-color:red>Alta'
    }
    if (teste == "À Fazer"){
        trocar = "item-fazer";
        valor = "item-andamento";
    } else if (teste == "Em andamento") {
        trocar = "item-andamento";
        valor = "item-concluido";
    } else if (teste == "Concluido") {
        trocar = "item-concluido";
        valor = "item-fazer";
    }
    document.getElementById(trocar).innerHTML += "<div class='items' id='" + id + "'>" +
    '<div id="prioridade-item"' + prioridade + '</div>' +
    '<div id="tarefa-item">' + tarefa + '</div>' +
    '<div id="data-inicio-item">' + inicio + '</div>' +
    '<div id="data-prazo-item">' + prazo + '</div>' +
    '<div><div id="descricao-item-' + cont + '" style="display:none">' + descricao + '</div><i class="fa-regular fa-comment" onclick="comentario(' + cont + ')"></i><i class="fa-regular fa-square-caret-right" onclick="mover(' + cont + ')"></i><i class="fa-regular fa-trash-can" onclick="remover(' + cont + ')"></i></div>' +
    '<div id="valor-' + id + '" style="display:none">'+ trocar + '</div>' +
    '</div>';
    cont++;
    fechar();
}
function mover(z){
    let teste = document.getElementById("valor-id-" + z).innerHTML;
    if (teste == "item-fazer") {
        document.getElementById("valor-id-" + z).innerHTML = "item-andamento";
    } else if (teste == "item-andamento") {
        document.getElementById("valor-id-" + z).innerHTML = "item-concluido";
    } else if (teste == "item-concluido") {
        document.getElementById("valor-id-" + z).innerHTML = "item-fazer";
    }
    teste = document.getElementById("valor-id-" + z).innerHTML;
    let informacao = document.getElementById("id-" + z).outerHTML;
    document.getElementById("id-" + z).outerHTML = "";
    document.getElementById(teste).innerHTML += informacao;
}

function remover(a) {
    document.getElementById("id-" + a).outerHTML = "";
}

function comentario(b) {
    document.getElementById("comentario").style.display = "flex";
    let descricao = document.getElementById("descricao-item-" + b).innerHTML;
    let id = "id-" + b;
    document.getElementById("item-comentario").innerHTML = descricao;
}