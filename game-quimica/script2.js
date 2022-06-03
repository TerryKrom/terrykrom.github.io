const perguntas = [
    `"Um átomo é como uma bola de bilhar." Quem fez essa afirmação?`
]
const respostas1 = [
    "Dalton", "Thomsom", "Rutherford", "Bohr" 
]
let cont = 0;
let content = document.getElementById('quest')
let answers = document.getElementById('answer')

content.innerHTML= `<h3 class="pergunta">`+perguntas[cont]+`</h3>`

