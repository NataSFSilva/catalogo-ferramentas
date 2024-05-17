class Ferramenta {
    constructor(nome, documentacao) {
        this.nome = nome
        this.documentacao = documentacao
    }
}

const logs = [
    {
        question: "Nome do index (tudo minúsculo, com a separação feita com traços"-" | Ex: pier-logs)",
        answers: [
            {
                type: ""
            }
        ],
    },
    {
        question: "Qual será o tempo de retenção?",
        answers: [
            {
                type: ""
            }
        ],
    },
    
    {
        question: "Os logs serão auditados?",
        answers: [
            {
                type: ""
            }
        ],
    },
    {
        question: "Os logs são estruturados em Json?",
        answers: [
            {
                type: ""
            }
        ],
    },
    
    {
        question: "Qual a volumetria esperada para aplicação? (valor aproximado)",
        answers: [
            {
                type: ""
            }
        ],
    },
    {
        question: "É esperado o crescimento progressivo da volumetria dos logs?",
        answers: [
            {
                type: ""
            }
        ],
    },
    {
        question: "Favor disponibilizar um log para análise dos parâmetros:",
        answers: [
            {
                type: ""
            }
        ],
    },
    
    {
        question: 'Cite quais os "parâmetros" que serão indexados e que serão utilizados para os objetos de monitoria (Ex: issuer, motivoResposta, statusCode)',
        answers: [
            {
                type: ""
            }
        ],
    },
    {
        question: "Qual o tipo de integração que será utilizada para coleta de log?",
        answers: [
            "Aplicação irá encaminhar via HTTP (Utilizando HTTP event collector) - Disponibilizado IP, porta e token",
            "Instalação do agente na estrutura da aplicação - Disponibilizado documentação de instalação"
        ]
    },
    
    {
        question: "Caso a integração seja via agent, informar o caminho completo do diretório do log.",
        answers: [
            {
                type: ""
            }
        ],
    },
    {
        question: 'Caso o envio seja via HTTP, é possível o "acknowledgement" na solução do envio? Confirmação do recebimento do evento por parte da ferramenta de observabilidade. (obs: aplicações que utilizam o kafka para o envio precisam da opção habilitada)',
        answers: [
            {
                answer: "Sim"
            },
            {
                a: "Não"
            }
        ]
    },
    
    {
        question: "As métricas de infraestrutura da aplicação estão sendo monitoradas? Favor informar qual aplicação está sendo utilizada.",
        answers: [
            {
                type: ""
            }
        ],
    },
    {
        question: "Qual o impacto da aplicação caso ela fique indisponível?",
        answers: [
            {
                type: ""
            }
        ],
    },
    {
        question: "Informar qual o time responsável pela aplicação (conhecimento das regras de negócio) para desenvolvimento dos objetos de monitoria (dashboard, alert e report)",
        answers: [
            {
                type: ""
            }
        ],
    }    
]

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

function remover() {
    document.getElementById('pilarObs').remove()
}

function caminhoPilar(pilar) {
    if (pilar == "metrics") {
        var metricas = document.getElementsByClassName('metrics')

        for (let i = 0; i < metricas.length; i++) {
            metricas[i].style.display = "flex"
        }
    } else if (pilar == "logs") {
        var logs = document.getElementsByClassName('logs')
        console.log("Qtd: " + logs.length)
        
        for (let i = 0; i < logs.length; i++) {
            logs[i].style.display = "flex"
        }
    } else if (pilar == "traces") {
        document.getElementById('tracesDoc').style.display = "flex"
    }
}