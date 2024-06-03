class Formulario {
    constructor(email) {
        this.email = email
        this.documentacao = Array()
    }
}

function loadQuestions(qtdQuestoes) {
    sessionStorage.setItem("questoes", qtdQuestoes)
}

const metrics = [
    {
        question: "Qual provedor a aplicação utiliza?",
        answers: [
            {
                text: "AWS",
                type: "btn"
            },
            {
                text: "GCP",
                type: "btn"
            },
            {
                text: "Azure",
                type: "btn"
            },
            {
                text: "Outros...",
                type: "inp"
            }
        ]
    },
    {
        question: "Tecnologia utilizada? (Java, GO, Python, php, etc.)",
        answers: [
            {
                text: "Texto de resposta curta",
                type: "inp"
            }
        ]
    },
    {
        question: "Qual infraestrutura a aplicação utiliza? Ex: Kubernetes, Docker, VirtualMachine, Lambda...",
        answers: [
            {
                text: "Texto de resposta curta",
                type: "inp"
            }
        ]
    },
    {
        question: "A aplicação possui alguma dependência de pacotes de ferramentas de observabilidade?",
        answers: [
            {
                text: "Texto de resposta curta",
                type: "inp"
            }
        ]
    },
    {
        question: "Caso a infraestrutura seja conteinerizada qual o máximo e mínimo de escalonamento de pods e nodes?",
        answers: [
            {
                text: "Texto de resposta curta",
                type: "inp"
            }
        ]
    },
    {
        question: "Qual provedor a aplicação utiliza?",
        answers: [
            {
                text: "CPU",
                type: "btn"
            },
            {
                text: "Disco",
                type: "btn"
            },
            {
                text: "Memória",
                type: "btn"
            },
            {
                text: "Network",
                type: "btn"
            },
            {
                text: "Data Base",
                type: "btn"
            },
        ]
    },
    {
        question: "Qual a quantidade de chamadas a aplicação recebe por dia? (valor médio)",
        answers: [
            {
                text: "Texto de resposta curta",
                type: "inp"
            }
        ]
    },
    {
        question: "Caso necessário. Quais métricas de APM serão utilizadas? Ex: Resource",
        answers: [
            {
                text: "Texto de resposta curta",
                type: "inp"
            }
        ]
    },
    {
        question: "A aplicação exige auditoria 100% das métricas para validação? Ex: Métrica transacional Pix, precisa devido a criticidade.",
        answers: [
            {
                text: "Sim",
                type: "btn"
            },
            {
                text: "Sim",
                type: "btn"
            }
        ]
    },
    {
        question: "Qual o impacto da aplicação caso ela fique indisponível?",
        answers: [
            {
                text: "Texto de resposta curta",
                type: "inp"
            }
        ]
    },
    {
        question: "Informar qual o time responsável pela aplicação (conhecimento das regras de negócio) para desenvolvimento dos objetos monitoria (dashboard, alert e report)",
        answers: [
            {
                text: "Texto de resposta curta",
                type: "inp"
            }
        ]
    }
]

const logs = [
    {
        question: "Nome do index (tudo minúsculo, com a separação feita com traços '-' | Ex: pier-logs)",
        answers: [
            {
                text: "Texto de resposta curta",
                type: "inp"

            },
        ]
    },
    {
        question: "Qual será o tempo de retenção?",
        answers: [
            {
                text: "Padrão 90 dias",
                type: "btn"
            },
            {
                text: "6 meses",
                type: "btn"
            },
            {
                text: "1 ano",
                type: "btn"
            },
            {
                text: "Outros...",
                type: "inp"
            }
        ]
    },

    {
        question: "Os logs serão auditados?",
        answers: [
            {
                text: "Sim",
                type: "btn"
            },
            {
                text: "Não",
                type: "btn"

            }
        ]
    },
    {
        question: "Os logs são estruturados em Json?",
        answers: [
            {
                text: "Sim",
                type: "btn"
            },
            {
                text: "Outros...",
                type: "inp"

            }
        ]
    },

    {
        question: "Qual a volumetria esperada para aplicação? (valor aproximado)",
        answers: [
            {
                text: "1GB por mês",
                type: "btn"
            },
            {
                text: "Até 100GB por mês",
                type: "btn"
            },
            {
                text: "Até 1TB por mês",
                type: "btn"
            },
            {
                text: "Superior a 1TB",
                type: "btn"

            }
        ]
    },
    {
        question: "É esperado o crescimento progressivo da volumetria dos logs?",
        answers: [
            {
                text: "Sim",
                type: "btn"
            },
            {
                text: "Não",
                type: "btn"
            }

        ]
    },
    {
        question: "Favor disponibilizar um log para análise dos parâmetros:",
        answers: [
            {
                text: "Outros...",
                type: "inp"

            }
        ]
    },

    {
        question: 'Cite quais os "parâmetros" que serão indexados e que serão utilizados para os objetos de monitoria (Ex: issuer, motivoResposta, statusCode)',
        answers: [
            {
                text: "Outros...",
                type: "inp"
            }
        ]
    },
    {
        question: "Qual o tipo de integração que será utilizada para coleta de log?",
        answers: [
            {

                text: "Aplicação irá encaminhar via HTTP (Utilizando HTTP event collector) - Disponibilizado IP, porta e token",
                type: "btn"
            },
            {
                text: "Instalação do agente na estrutura da aplicação - Disponibilizado documentação de instalação",
                type: "btn"

            }
        ]
    },

    {
        question: "Caso a integração seja via agent, informar o caminho completo do diretório do log.",
        answers: [
            {
                text: "Outros...",
                type: "inp"
            }
        ]
    },
    {
        question: 'Caso o envio seja via HTTP, é possível o "acknowledgement" na solução do envio? Confirmação do recebimento do evento por parte da ferramenta de observabilidade. (obs: aplicações que utilizam o kafka para o envio precisam da opção habilitada)',
        answers: [
            {
                answer: "Sim",
                type: "btn"
            },
            {
                answer: "Não",
                type: "btn"
            }
        ]
    },

    {
        question: "As métricas de infraestrutura da aplicação estão sendo monitoradas? Favor informar qual aplicação está sendo utilizada.",
        answers: [
            {
                answer: "Não",
                type: "btn"
            },
            {
                text: "Outros...",
                type: "inp"
            }
        ]
    },
    {
        question: "Qual o impacto da aplicação caso ela fique indisponível?",
        answers: [
            {
                text: "Outros...",
                type: "inp"
            }
        ]
    },
    {
        question: "Informar qual o time responsável pela aplicação (conhecimento das regras de negócio) para desenvolvimento dos objetos de monitoria (dashboard, alert e report)",
        answers: [
            {
                text: "Outros...",
                type: "inp"
            }
        ]
    }
]

function showMetricsQuestions() {
    var qtdQuestoes = sessionStorage.getItem("questoes")

    metrics.forEach(question => {
        qtdQuestoes++

        var container = document.createElement("div")
        container.classList.add("container", "metrics")

        var box = document.createElement("div")
        box.classList.add("box")
        container.appendChild(box)

        var title = document.createElement("h2")
        title.textContent = `${qtdQuestoes}. ${question.question}`
        box.appendChild(title)

        question.answers.forEach(answer => {
            var option
            if (answer.type == "inp") {
                option = document.createElement("input")
                option.type = "text"
                option.className = answer.type
                option.placeholder = answer.text
            } else {
                option = document.createElement("button")
                option.textContent = `${answer.text}`
                option.setAttribute("class", answer.type)
            }
            box.appendChild(option)
        });

        document.body.appendChild(container)
    });
}

function showLogsQuestions() {
    var qtdQuestoes = sessionStorage.getItem("questoes")
    logs.forEach(question => {
        qtdQuestoes++
        // console.log("qtd de questoes logs: " + qtdQuestoes)

        var container = document.createElement("div")
        container.classList.add("container", "logs")

        var box = document.createElement("div")
        box.classList.add("box")
        container.appendChild(box)

        var title = document.createElement("h2")
        title.textContent = `${qtdQuestoes}. ${question.question}`
        box.appendChild(title)

        question.answers.forEach(answer => {
            var option
            if (answer.type == "inp") {
                option = document.createElement("input")
                option.type = "text"
                option.className = answer.type
                option.placeholder = answer.text
            } else {
                option = document.createElement("button")
                option.textContent = `${answer.text}`
                option.setAttribute("class", answer.type)
            }
            box.appendChild(option)
        });

        document.body.appendChild(container)
    });
    // sessionStorage.setItem("questoes", qtdQuestoes)
}

// validação para emails dock.tech
var validation = /^([a-z\d\.]+)@(dock\.tech)$/

function addSelectionListener(buttons) {
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => btn.classList.remove('btn-selected'));
            button.classList.add('btn-selected');
        });
    });
}


function devAmbient() {
    document.getElementById('sos').style.display = "flex"
}

function documentacao(acesso) {
    addSelectionListener(document.getElementById('sos').children[0].children)
    if (acesso) {
        document.getElementById('pilarObs').style.display = "flex"
    } else {
        document.getElementById('acesso').style.display = "flex"
        document.getElementById('pilarObs').style.display = "flex"
    }
}

function removerLogs() {
    var logsArray = Array.from(document.getElementsByClassName('logs'))
    logsArray.forEach(function (log) {
        log.remove()
    })
}

function removerMetrics() {
    var metricsArray = Array.from(document.getElementsByClassName('metrics'))
    metricsArray.forEach(function (metric) {
        metric.remove()
    })
}

function caminhoPilar(pilar) {
    loadQuestions(5)
    if (pilar == "metrics") {
        removerLogs()
        showMetricsQuestions()
    } else if (pilar == "logs") {
        removerMetrics()
        showLogsQuestions()
    } else if (pilar == "traces") {
        document.getElementById('tracesDoc').style.display = "flex"
    }
}