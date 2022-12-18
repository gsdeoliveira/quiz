var container = document.getElementById('container')
var perguntas = document.getElementById('perguntas')
var nome = document.getElementById('name')
var nameFinal = document.getElementById('nome')
var botaoPrincipal = document.getElementById('btn')
var row = document.getElementById('row')
var opcao1 = document.getElementById('botao1')
var opcao2 = document.getElementById('botao2')
var opcao3 = document.getElementById('botao3')
var opcao4 = document.getElementById('botao4')
var telaFinal = document.getElementById('tela-final')
var acertos = document.getElementById('acertos')
var formulario = document.getElementById('formulario')
var progresso = document.getElementById('progresso')
var pergunta = document.getElementById('pergunta')
var titulo = document.getElementById('numero-pergunta')


function botaoIniciar() {
    if (nome.value.trim() != '') {
        container.style.display = 'none'
        perguntas.classList.add('animacao-pergunta')
        perguntas.style.display = 'block'
    }

    else {
        row.classList.add('shakeerror')
        setTimeout ( function() {
        row.classList.remove('shakeerror')
}, 1000)
            }

}


var questoes = [

{
    'pergunta' : 'Qual a minha cor favorita?',
    'alternativa1' : 'Preto',
    'alternativa2' : 'Branco',
    'alternativa3' : 'Ciano',
    'alternativa4' : 'Roxo',
    'resposta' : 'Ciano'
},

{
    'pergunta' : 'Qual a cor favorita?',
    'alternativa1' : 'Preto',
    'alternativa2' : 'Branco',
    'alternativa3' : 'Ciano',
    'alternativa4' : 'Roxo',
    'resposta' : 'Ciano'
},

{
    'pergunta' : 'Qual a cor favorita?',
    'alternativa1' : 'Preto',
    'alternativa2' : 'Branco',
    'alternativa3' : 'Ciano',
    'alternativa4' : 'Roxo',
    'resposta' : 'Ciano'
},

{
    'pergunta' : 'Qual a cor favorita?',
    'alternativa1' : 'Preto',
    'alternativa2' : 'Branco',
    'alternativa3' : 'Ciano',
    'alternativa4' : 'Roxo',
    'resposta' : 'Ciano'
},

{
    'pergunta' : 'Qual a cor favorita?',
    'alternativa1' : 'Preto',
    'alternativa2' : 'Branco',
    'alternativa3' : 'Ciano',
    'alternativa4' : 'Roxo',
    'resposta' : 'Ciano'
},

{
    'pergunta' : 'Qual a cor favorita?',
    'alternativa1' : 'Preto',
    'alternativa2' : 'Branco',
    'alternativa3' : 'Ciano',
    'alternativa4' : 'Roxo',
    'resposta' : 'Ciano'
},

{
    'pergunta' : 'Qual a cor favorita?',
    'alternativa1' : 'Preto',
    'alternativa2' : 'Branco',
    'alternativa3' : 'Ciano',
    'alternativa4' : 'Roxo',
    'resposta' : 'Ciano'
},

{
    'pergunta' : 'Qual a cor favorita?',
    'alternativa1' : 'Preto',
    'alternativa2' : 'Branco',
    'alternativa3' : 'Ciano',
    'alternativa4' : 'Roxo',
    'resposta' : 'Ciano'
},

{
    'pergunta' : 'Qual a cor favorita?',
    'alternativa1' : 'Preto',
    'alternativa2' : 'Branco',
    'alternativa3' : 'Ciano',
    'alternativa4' : 'Roxo',
    'resposta' : 'Ciano'
},

{
    'pergunta' : 'Qual a cor favorita?',
    'alternativa1' : 'Preto',
    'alternativa2' : 'Branco',
    'alternativa3' : 'Ciano',
    'alternativa4' : 'Roxo',
    'resposta' : 'Ciano'
},

{
    'pergunta' : 'Qual a cor favorita?',
    'alternativa1' : 'Preto',
    'alternativa2' : 'Branco',
    'alternativa3' : 'Ciano',
    'alternativa4' : 'Roxo',
    'resposta' : 'Ciano'
},

{
    'pergunta' : 'Qual a cor favorita?',
    'alternativa1' : 'Preto',
    'alternativa2' : 'Branco',
    'alternativa3' : 'Ciano',
    'alternativa4' : 'Roxo',
    'resposta' : 'Ciano'
},

{
    'pergunta' : 'Qual a cor favorita?',
    'alternativa1' : 'Preto',
    'alternativa2' : 'Branco',
    'alternativa3' : 'Ciano',
    'alternativa4' : 'Roxo',
    'resposta' : 'Ciano'
},

{
    'pergunta' : 'Qual a cor favorita?',
    'alternativa1' : 'Preto',
    'alternativa2' : 'Branco',
    'alternativa3' : 'Ciano',
    'alternativa4' : 'Roxo',
    'resposta' : 'Ciano'
},

{
    'pergunta' : 'Qual a cor favorita?',
    'alternativa1' : 'Preto',
    'alternativa2' : 'Branco',
    'alternativa3' : 'Ciano',
    'alternativa4' : 'Roxo',
    'resposta' : 'Ciano'
}

]


let contadorQuestao = 1
let numeroAcertos = 0

function verificaAlternativa(botaoEscolhido) {
}
