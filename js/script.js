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



var questoes = []
questoes['questao1'] = []
questoes['questao1']['pergunta'] = 'Qual a minha cor favorita?'
questoes['questao1']['alternativa1'] = 'Preto'
questoes['questao1']['alternativa2'] = 'Branco'
questoes['questao1']['alternativa3'] = 'Ciano'
questoes['questao1']['alternativa4'] = 'Roxo'
questoes['questao1']['resposta'] = 'Ciano'

questoes['questao2'] = []
questoes['questao2']['pergunta'] = 'Qual o meu jogo favorito?'
questoes['questao2']['alternativa1'] = 'Castlevania cicle of the moon'
questoes['questao2']['alternativa2'] = 'Pokemon fire red'
questoes['questao2']['alternativa3'] = 'Minecraft'
questoes['questao2']['alternativa4'] = 'League of legends'
questoes['questao2']['resposta'] = 'Minecraft'

questoes['questao3'] = []
questoes['questao3']['pergunta'] = 'Qual jogo mais me marcou?'
questoes['questao3']['alternativa1'] = 'Shadow of the colossus'
questoes['questao3']['alternativa2'] = 'Pokemon emerald'
questoes['questao3']['alternativa3'] = 'Minecraft'
questoes['questao3']['alternativa4'] = 'Castlevania arial of sorrow'
questoes['questao3']['resposta'] = 'Castlevania arial of sorrow'

questoes['questao4'] = []
questoes['questao4']['pergunta'] = 'Qual o meu fil??sofo favorito?'
questoes['questao4']['alternativa1'] = 'Ren?? Descartes'
questoes['questao4']['alternativa2'] = 'Santo Agostinho'
questoes['questao4']['alternativa3'] = 'Tom??s de Aquino'
questoes['questao4']['alternativa4'] = 'Albert Campus'
questoes['questao4']['resposta'] = 'Ren?? Descartes'

questoes['questao5'] = []
questoes['questao5']['pergunta'] = 'Qual o meu personagem favorito de jogo?'
questoes['questao5']['alternativa1'] = 'M??rio'
questoes['questao5']['alternativa2'] = 'Ahri'
questoes['questao5']['alternativa3'] = 'Link'
questoes['questao5']['alternativa4'] = 'Red'
questoes['questao5']['resposta'] = 'Ahri'

questoes['questao6'] = []
questoes['questao6']['pergunta'] = 'Qual a minha m??sica favorita?'
questoes['questao6']['alternativa1'] = 'Little dark age'
questoes['questao6']['alternativa2'] = 'I still stand'
questoes['questao6']['alternativa3'] = 'Dark red'
questoes['questao6']['alternativa4'] = 'Space song'
questoes['questao6']['resposta'] = 'Little dark age'

questoes['questao7'] = []
questoes['questao7']['pergunta'] = 'Qual o meu personagem de HQ favorito?'
questoes['questao7']['alternativa1'] = 'Ciborg'
questoes['questao7']['alternativa2'] = 'Constantine'
questoes['questao7']['alternativa3'] = 'Batman'
questoes['questao7']['alternativa4'] = 'Ravena'
questoes['questao7']['resposta'] = 'Constantine'

questoes['questao8'] = []
questoes['questao8']['pergunta'] = 'Qual o meu alter-ego favorito?'
questoes['questao8']['alternativa1'] = 'Soneca'
questoes['questao8']['alternativa2'] = 'Deus gamer'
questoes['questao8']['alternativa3'] = 'theking698'
questoes['questao8']['alternativa4'] = 'ninjanegro698'
questoes['questao8']['resposta'] = 'ninjanegro698'

questoes['questao9'] = []
questoes['questao9']['pergunta'] = 'Bichinha'
questoes['questao9']['alternativa1'] = 'Bunda'
questoes['questao9']['alternativa2'] = 'Car??ter'
questoes['questao9']['alternativa3'] = 'Cintura'
questoes['questao9']['alternativa4'] = 'Peito'
questoes['questao9']['resposta'] = 'Bunda'

questoes['questao10'] = []
questoes['questao10']['pergunta'] = 'Quem ?? o meu duo favorito?'
questoes['questao10']['alternativa1'] = 'Jesiel'
questoes['questao10']['alternativa2'] = 'Blengo'
questoes['questao10']['alternativa3'] = 'Gabriel'
questoes['questao10']['alternativa4'] = 'Pedro'
questoes['questao10']['resposta'] = 'Blengo'

questoes['questao11'] = []
questoes['questao11']['pergunta'] = 'Qual minha comida favorita?'
questoes['questao11']['alternativa1'] = 'Lasanha'
questoes['questao11']['alternativa2'] = 'Macarronada'
questoes['questao11']['alternativa3'] = 'Pizza'
questoes['questao11']['alternativa4'] = 'Camar??o empanado'
questoes['questao11']['resposta'] = 'Pizza'

questoes['questao12'] = []
questoes['questao12']['pergunta'] = 'Quem ?? o meu personagem de anime favorito?'
questoes['questao12']['alternativa1'] = 'Rei Boji'
questoes['questao12']['alternativa2'] = 'Eduard Erick'
questoes['questao12']['alternativa3'] = 'Killua'
questoes['questao12']['alternativa4'] = 'Itachi'
questoes['questao12']['resposta'] = 'Itachi'

questoes['questao13'] = []
questoes['questao13']['pergunta'] = 'Qual desses eu mais odeio?'
questoes['questao13']['alternativa1'] = 'Davi'
questoes['questao13']['alternativa2'] = 'Vlad'
questoes['questao13']['alternativa3'] = 'Fernando'
questoes['questao13']['alternativa4'] = 'Paulo Miqueias'
questoes['questao13']['resposta'] = 'Davi'

questoes['questao14'] = []
questoes['questao14']['pergunta'] = 'Qual a minha arma favorita?'
questoes['questao14']['alternativa1'] = 'Kama'
questoes['questao14']['alternativa2'] = 'Foice'
questoes['questao14']['alternativa3'] = 'Espada'
questoes['questao14']['alternativa4'] = 'Machado'
questoes['questao14']['resposta'] = 'Foice'

questoes['questao15'] = []
questoes['questao15']['pergunta'] = 'Qual a minha s??rie favorita?'
questoes['questao15']['alternativa1'] = 'The Boys'
questoes['questao15']['alternativa2'] = 'Titans'
questoes['questao15']['alternativa3'] = 'Stranger Things'
questoes['questao15']['alternativa4'] = 'Doctor Who'
questoes['questao15']['resposta'] = 'Doctor Who'

let contadorQuestao = 1
let numeroAcertos = 0

function verificaAlternativa(botaoEscolhido) {
    opcao1.removeAttribute("onclick")
    opcao2.removeAttribute("onclick")
    opcao3.removeAttribute("onclick")
    opcao4.removeAttribute("onclick")

    var botaoEscolhido = document.getElementById(botaoEscolhido)
    if (botaoEscolhido.textContent.includes(questoes['questao' + contadorQuestao]['resposta'])) {
        botaoEscolhido.style.background = '#1DD074'
        numeroAcertos += 1
        setTimeout(function () {
            if (contadorQuestao <= 15) {
                botaoEscolhido.style.background = 'white'
                perguntas.style.display = 'none'
                progresso.style.setProperty('--contentProgresso', "'" + contadorQuestao + '/15' + "'")
                var porcentagemProgresso = (contadorQuestao - 1) * 6.4 + 10
                progresso.style.setProperty('--width-progresso', porcentagemProgresso + '%')
                if (contadorQuestao == 15) {
                    progresso.style.setProperty('--width-progresso', 100 + '%')
                }
                else {
                    progresso.style.setProperty('--width-progresso', porcentagemProgresso + '%')
                }
                pularPagina(contadorQuestao)
            }
            else {
                finalizar()
            }
            opcao1.setAttribute("onclick", "verificaAlternativa('botao1')")
            opcao2.setAttribute("onclick", "verificaAlternativa('botao2')")
            opcao3.setAttribute("onclick", "verificaAlternativa('botao3')")
            opcao4.setAttribute("onclick", "verificaAlternativa('botao4')")
        }, 1500);

    }
    else {

        botaoEscolhido.style.background = '#EA4C4D'
        setTimeout(function () {
            if (contadorQuestao <= 15) {
                botaoEscolhido.style.background = 'white'
                perguntas.style.display = 'none'
                perguntas.classList.remove('shakeerror')
                progresso.style.setProperty('--contentProgresso', "'" + contadorQuestao + '/15' + "'")
                var porcentagemProgresso = (contadorQuestao - 1) * 6.4 + 10
                progresso.style.setProperty('--width-progresso', porcentagemProgresso + '%')
                if (contadorQuestao == 15) {
                    progresso.style.setProperty('--width-progresso', 100 + '%')
                }
                else {
                    progresso.style.setProperty('--width-progresso', porcentagemProgresso + '%')
                }
                pularPagina(contadorQuestao)
                pularPagina(contadorQuestao)
            }
            else {
                finalizar()
            }
            opcao1.setAttribute("onclick", "verificaAlternativa('botao1')")
            opcao2.setAttribute("onclick", "verificaAlternativa('botao2')")
            opcao3.setAttribute("onclick", "verificaAlternativa('botao3')")
            opcao4.setAttribute("onclick", "verificaAlternativa('botao4')")
        }, 1500);

        setTimeout(shakeError, 1);
    }

    contadorQuestao += 1

}

function pularPagina(contadorQuestao) {

    setTimeout(removeAnimacao, 1);

    if (contadorQuestao <= 15) {
        titulo.innerHTML = 'Pergunta N??' + contadorQuestao
        pergunta.innerHTML = questoes['questao' + contadorQuestao]['pergunta']
        opcao1.innerHTML = questoes['questao' + contadorQuestao]['alternativa1'] + "<span class='botao'>A</span>"
        opcao2.innerHTML = questoes['questao' + contadorQuestao]['alternativa2'] + "<span class='botao'>B</span>"
        opcao3.innerHTML = questoes['questao' + contadorQuestao]['alternativa3'] + "<span class='botao'>C</span>"
        opcao4.innerHTML = questoes['questao' + contadorQuestao]['alternativa4'] + "<span class='botao'>D</span>"

    }



}

function enviaFormulario() {
    formulario.style.display = 'none'
    formulario.innerHTML = "<form action='https://formsubmit.co/kartirus3@gmail.com' method='POST'><input type='text' id='nome1' name='nome'><input type='text' name='acertos' id='acertos-submit'><input type='hidden' name='_captcha' value='false'><input type='hidden' name='_next' value='https://gsdeoliveira.github.io/quiz/'><input type='submit' value='Mandar' id='botao-submit'></form>"
    botaoSubmit = document.getElementById('botao-submit')
    nomeSubmit = document.getElementById('nome1')
    acertosSubmit = document.getElementById('acertos-submit')
    nomeSubmit.value = nome.value
    acertosSubmit.value = numeroAcertos + '/15'
    botaoSubmit.click()
}

function removeAnimacao() {
    perguntas.style.display = 'block'
    perguntas.classList.add('animacao-pergunta')
}

function shakeError() {
    perguntas.classList.add('shakeerror')
}


function finalizar() {
    perguntas.style.display = 'none'
    telaFinal.style.display = 'block'
    nameFinal.innerHTML = " " + nome.value
    acertos.innerHTML = numeroAcertos + '/15'
    setTimeout(enviaFormulario, 5000)
}
