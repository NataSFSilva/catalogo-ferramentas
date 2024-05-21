class Formulario {
    constructor(email) {
        this.email = email
        this.documentacao = Array()
    }
}

function loadQuestions() {
    sessionStorage.setItem("questoes", 5)
}

const matrics = [
    {
        question: "",
        answers: [
            {
                answer: "",
                type: ""
            }
        ],
    },
]

const logs = [
    {
        question: "Nome do index (tudo minúsculo, com a separação feita com traços '-' | Ex: pier-logs)",
        answers: [
            {
                text: "Texto de resposta curta",
                type: "inp"

            },
        ],
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
        ],
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
        ],
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
        ],
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
        ],
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

        ],
    },
    {
        question: "Favor disponibilizar um log para análise dos parâmetros:",
        answers: [
            {
                text: "Outros...",
                type: "inp"

            }
        ],
    },

    {
        question: 'Cite quais os "parâmetros" que serão indexados e que serão utilizados para os objetos de monitoria (Ex: issuer, motivoResposta, statusCode)',
        answers: [
            {
                text: "Outros...",
                type: "inp"
            }
        ],
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
        ],
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
        ],
    },
    {
        question: "Qual o impacto da aplicação caso ela fique indisponível?",
        answers: [
            {
                text: "Outros...",
                type: "inp"
            }
        ],
    },
    {
        question: "Informar qual o time responsável pela aplicação (conhecimento das regras de negócio) para desenvolvimento dos objetos de monitoria (dashboard, alert e report)",
        answers: [
            {
                text: "Outros...",
                type: "inp"
            }
        ],
    }
]

/*
<div class="container logs" style="display: none;">
</div>
    <div class="box">
      <h2>17. As métricas de infraestrutura da aplicação estão sendo monitoradas? Favor informar qual aplicação está
        sendo utilizada.</h2>
      <button class="btn">Não</button>  
      <input type="text" class="inp" placeholder="Outros...">
    </div>
*/

function showLogsQuestions() {
    var qtdQuestoes = sessionStorage.getItem("questoes")
    console.log("qtd de questoes" + qtdQuestoes)
    logs.forEach(question => {
        qtdQuestoes++
        console.log("qtd de questoes" + qtdQuestoes)

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
}

// validação para emails dock.tech
var validation = /^([a-z\d\.]+)@(dock\.tech)$/

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

function removerLogs() {
    var logs = document.getElementsByClassName('logs')
    for (let index = 0; index < logs.length; index++) {
        logs[index].remove()
    }
}

function caminhoPilar(pilar) {
    if (pilar == "metrics") {
        removerLogs()

        var metricas = document.getElementsByClassName('metrics')

        for (let i = 0; i < metricas.length; i++) {
            metricas[i].style.display = "flex"
        }
    } else if (pilar == "logs") {
        var logs = document.getElementsByClassName('logs')
        console.log("Qtd: " + logs.length)

        showLogsQuestions()
        // for (let i = 0; i < logs.length; i++) {
        //     logs[i].style.display = "flex"
        // }
    } else if (pilar == "traces") {
        document.getElementById('tracesDoc').style.display = "flex"
    }
}