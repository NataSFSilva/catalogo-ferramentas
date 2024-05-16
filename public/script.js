class Ferramenta {
    constructor(nome, documentacao) {
        this.nome = nome
        this.documentacao = documentacao
    }
}

// adicionar validação para emails dock.tech

function devAmbient() {
    document.getElementById('sos').style.display = "flex"
}

function documentacao(acesso) {
    if (acesso) {
        document.getElementById('pilarObs').style.display = "flex"
    } else {
        document.getElementById('acesso').style.display = "flex"
        document.getElementById('pilarObs').style.display = "flex"
    }
}

function caminhoPilar(pilar) {
    if (pilar == "metrics") {
        var metricas = document.getElementsByClassName('metrics')

        for (let i = 0; i < metricas.length; i++) {
            metricas[i].style.display = "flex"
        }
    } else if (pilar == "logs") {
        var logs = document.getElementsByClassName('logs')

        for (let i = 0; i < logs.length; i++) {
            logs[i].style.display = "flex"
        }
    }
}