const perguntas = [
    {
        pergunta: "O que é um teste funcional?",
        respostas: [
            "Avalia a interface do usuário com base em padrões estéticos",
            "Verifica funcionalidades do sistema com base nos requisitos",
            "Testa a estrutura interna do código",
            "Mede o desempenho do sistema em situações de estresse"
        ],
        certa: 1
    },
    {
        pergunta: "O que caracteriza o teste de caixa-preta?",
        respostas: [
            "É realizado apenas por desenvolvedores",
            "Foca na lógica interna do código",
            "Testa o sistema sem conhecimento da implementação interna",
            "Testa diretamente as classes e métodos do código"
        ],
        certa: 2
    },
    {
        pergunta: "Qual a finalidade do teste de usabilidade?",
        respostas: [
            "Avaliar a segurança de dados no sistema",
            "Verificar o comportamento sob carga",
            "Testar funcionalidades críticas do sistema",
            "Avaliar a experiência do usuário e facilidade de uso"
        ],
        certa: 3
    },
    {
        pergunta: "O que é um caso de teste?",
        respostas: [
            "Um erro no código que precisa ser corrigido",
            "Um documento com condições, entradas e saídas esperadas para testar uma funcionalidade",
            "Uma técnica de caixa-branca",
            "Um tipo de teste de integração"
        ],
        certa: 1
    },
    {
        pergunta: "Qual a diferença entre erro, bug e falha?",
        respostas: [
            "São sinônimos e significam o mesmo",
            "Erro é a execução incorreta, falha é o defeito no código e bug é a causa",
            "Erro é humano, bug é o defeito no código, e falha é o comportamento incorreto no sistema",
            "Bug e falha são sinônimos; erro é só na documentação"
        ],
        certa: 2
    },
    {
        pergunta: "O que é teste de segurança?",
        respostas: [
            "Verifica se o sistema é responsivo",
            "Avalia a proteção contra ameaças",
            "Testa a experiência do usuário",
            "Mede a performance do sistema"
        ],
        certa: 1
    },
    {
        pergunta: "Teste de caixa-cinza combina:",
        respostas: [
            "Testes de unidade e sistema",
            "Funcionalidade e desempenho",
            "Caixa-preta e caixa-branca",
            "Manual e automatizado"
        ],
        certa: 2
    },
    {
        pergunta: "Teste de cobertura de decisão verifica:",
        respostas: [
            "A aparência da interface",
            "Todas as instruções do código",
            "Cada decisão lógica do programa",
            "A resposta do usuário"
        ],
        certa: 2
    },
    {
        pergunta: "Teste unitário verifica:",
        respostas: [
            "O sistema como um todo",
            "A interação entre módulos",
            "Uma função ou método isolado",
            "O ambiente de produção"
        ],
        certa: 2
    },
    {
        pergunta: "Cenário de teste é:",
        respostas: [
            "Um conjunto de scripts automáticos",
            "Uma descrição geral do que será testado",
            "Uma lista de bugs",
            "Uma métrica de desempenho"
        ],
        certa: 1
    }
];

let atual = 0;
let pontos = 0;

const elemPergunta = document.getElementById("pergunta");
const elemRespostas = document.getElementById("respostas");
const btnProx = document.getElementById("btn-prox");
const resultado = document.getElementById("resultado");
const quiz = document.getElementById("quiz");
const elemPontos = document.getElementById("pontos");
const elemTotal = document.getElementById("total");

function mostrarPergunta() {
    const q = perguntas[atual];
    elemPergunta.textContent = q.pergunta;
    elemRespostas.innerHTML = "";

    q.respostas.forEach((resp, i) => {
        const btn = document.createElement("button");
        btn.textContent = resp;
        btn.onclick = () => escolher(i);
        elemRespostas.appendChild(btn);
    });

    btnProx.classList.add("oculto");
}

function escolher(i) {
    const q = perguntas[atual];
    const botoes = elemRespostas.querySelectorAll("button");

    botoes.forEach((btn, j) => {
        if (j === q.certa) {
            btn.classList.add("certa");
        } else if (j === i) {
            btn.classList.add("errada");
        }
        btn.disabled = true;
    });

    if (i === q.certa) pontos++;

    btnProx.classList.remove("oculto");
}

btnProx.onclick = () => {
    atual++;
    if (atual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
};

function mostrarResultado() {
    quiz.classList.add("oculto");
    resultado.classList.remove("oculto");
    elemPontos.textContent = pontos;
    elemTotal.textContent = perguntas.length;
}

function reiniciar() {
    atual = 0;
    pontos = 0;
    quiz.classList.remove("oculto");
    resultado.classList.add("oculto");
    mostrarPergunta();
}

mostrarPergunta();
