class Resposta {
    constructor(question, index) {
        this.question = question
        this.answer = ""
        this.index = index
    }

    addAnswer(answer) {
        this.answer = answer
    }
}

class Formulario {
    constructor() {
        this.email = ""
        this.documentacao = []
    }

    addEmail(email) {
        this.email = email
    }

    addQuestion(respostaObj) {
        this.documentacao.push(respostaObj)
    }

    addResposta(index, answerText) {
        this.documentacao[index].addAnswer(answerText)
    }
}

const form = new Formulario()

var ferramenta = []

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
        question: "Possui acesso ao Splunk?",
        answers: [
            {
                text: "Sim",
                type: "btn",
                showDoc: true
            },
            {
                text: "Não",
                type: "btn",
                showDoc: true
            }
        ]
    },
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
        question: "As métricas de infraestrutura da aplicação estão sendo monitoradas? Favor informar qual aplicação está sendo utilizada.",
        answers: [
            {
                text: "Não",
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
    }
]

const conditionalElements = {
    splunkDoc: {
        text: "Documentação de acesso ao Splunk",
        url: "https://docktech.atlassian.net/wiki/spaces/CLOUD/pages/3167453528/Splunk+OPS"
    },
    agent: {
        question: "Caso a integração seja via agent, informar o caminho completo do diretório do log.",
        answers: [
            {
                text: "Outros...",
                type: "inp"
            }
        ]
    },
    http: {
        question: 'Caso o envio seja via HTTP, é possível o "acknowledgement" na solução do envio? Confirmação do recebimento do evento por parte da ferramenta de observabilidade. (obs: aplicações que utilizam o kafka para o envio precisam da opção habilitada)',
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
    }
}

function handleButtonClick(event, index) {
    console.log("Button clicked:", event.target.textContent);

    form.addResposta(index, event.target.textContent)
}

function handleInputChange(event, index) {
    var evento = event.target.textContent
    console.log("Input changed:", evento);
    console.log("Vetor index:", index);

    form.addResposta(index, evento)
}

function addSelectionListener(buttons, index) {
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            console.log(event.target.textContent)
            handleButtonClick(event, index)

            // desmarca os outros botões
            buttons.forEach(btn => btn.classList.remove('btn-selected'));

            // Faz com que o botão selecionado fique em destaque
            button.classList.add('btn-selected');
        });
    });
}

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

        var buttons = [];

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
                buttons.push(option)
            }
            box.appendChild(option)
        });

        addSelectionListener(buttons);

        document.body.appendChild(container)
    });
}

function showLogsQuestions() {
    var qtdQuestoes = sessionStorage.getItem("questoes")
    var lastindex = form.documentacao.length - 1
    logs.forEach(question => {
        qtdQuestoes++
        // console.log("qtd de questoes logs: " + qtdQuestoes)
        console.log("Posição da ultima questão: " + lastindex)

        var container = document.createElement("div")
        container.classList.add("container", "logs")

        var box = document.createElement("div")
        box.classList.add("box")
        container.appendChild(box)

        var title = document.createElement("h2")
        title.textContent = `${qtdQuestoes}. ${question.question}`
        box.appendChild(title)

        var buttons = [];

        question.answers.forEach(answer => {
            var option
            if (answer.type == "inp") {
                option = document.createElement("input")
                option.type = "text"
                option.className = answer.type
                option.placeholder = answer.text
                option.addEventListener('input', (event) => handleInputChange(event, lastindex));
            } else {
                option = document.createElement("button")
                option.textContent = `${answer.text}`
                option.setAttribute("class", answer.type)
                option.addEventListener("click", (event) => handleButtonClick(event, lastindex))
                buttons.push(option)
            }
            box.appendChild(option)
        });

        addSelectionListener(buttons);

        document.body.appendChild(container)
    });
}

// validação para emails dock.tech
var validation = /^([a-z\d\.]+)@(dock\.tech)$/

document.addEventListener('DOMContentLoaded', () => {
    var email = document.getElementById('email');
    var inpEmail = email.querySelector('input');
    inpEmail.addEventListener('input', (event) => handleInputChange(event, 0));
    form.addQuestion(new Resposta(email.querySelector('h2').innerText, 0));

    var name = document.getElementById('apiName');
    var inpName = name.querySelector('input');
    inpName.addEventListener('input', (event) => handleInputChange(event, 1));
    form.addQuestion(new Resposta(name.querySelector('h2').innerText, 1));

    var ambient = document.getElementById('ambient');
    var btnAmbient = ambient.querySelectorAll('button');
    addSelectionListener(btnAmbient, 2);
    form.addQuestion(new Resposta(ambient.querySelector('h2').innerText, 2));

    var sos = document.getElementById('sos');
    var btnSos = sos.querySelectorAll('button');
    addSelectionListener(btnSos, 3);
    form.addQuestion(new Resposta(sos.querySelector('h2').innerText, 3));

    var pilar = document.getElementById('pilarObs');
    var btnPilar = pilar.querySelectorAll('button');
    addSelectionListener(btnPilar, 4);
    form.addQuestion(new Resposta(pilar.querySelector('h2').innerText, 4));
});

// "SOS",
// "Splunk",
// "Grafana",
// "Datadog"

function selectAmbient(ambient) {
    if (ambient == "dev") {
        ferramenta = ["SOS"]
    } else {
        ferramenta = ["Grafana", "Splunk", "DataDog"]
    }
}

function selectComplexidade(grau) {
    if (ferramenta[0] != "SOS") {
        // complexidade baixa
        if (grau == 1) {
            for (let i = 0; i < ferramenta.length; i++) {
                if (ferramenta[i] == "DataDog") {
                    ferramenta.splice(i, 1);
                    break;
                }
            }
        } else if (grau == 2) {
            // complexidade média
            ferramenta = ["Grafana", "Splunk", "DataDog"]
        } else {
            // complexidade alta
            for (let i = 0; i < ferramenta.length; i++) {
                if (ferramenta[i] == "Grafana") {
                    ferramenta.splice(i, 1);
                    break;
                }
            }
        }
    }
}

function documentacao(acesso) {
    if (acesso) {
        document.getElementById('pilarObs').style.display = "flex";
        document.getElementById('acesso').style.display = "none";
    } else {
        document.getElementById('acesso').style.display = "flex";
        document.getElementById('pilarObs').style.display = "flex";
    }
}

function removerLogs() {
    var logsArray = Array.from(document.getElementsByClassName('logs'));
    logsArray.forEach(function (log) {
        log.remove();
    })
}

function removerMetrics() {
    var metricsArray = Array.from(document.getElementsByClassName('metrics'));
    metricsArray.forEach(function (metric) {
        metric.remove();
    })
}

function caminhoPilar(pilar) {
    loadQuestions(5)
    if (pilar == "metrics") {
        removerLogs();
        document.getElementById('tracesDoc').style.display = "none";
        showMetricsQuestions();
    } else if (pilar == "logs") {
        removerMetrics();
        document.getElementById('tracesDoc').style.display = "none";
        showLogsQuestions();
    } else if (pilar == "traces") {
        removerLogs();
        removerMetrics();
        document.getElementById('tracesDoc').style.display = "flex";
    }
}