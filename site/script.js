function adicionar(x) {
    document.getElementById("adicionar").style.display = "flex"
    if (x==1) {
        document.getElementById("valor-titulo").innerHTML = "À Fazer"
    } else if (x==2) {
        document.getElementById("valor-titulo").innerHTML = "Em andamento"
    } else if (x==3) {
        document.getElementById("valor-titulo").innerHTML = "Concluido"
    } else {
        cartao(x);
    }
}

function fechar() {
    document.getElementById("adicionar").style.display = "none"
}

function cartao(y) {
    
}