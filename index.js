botao = document.getElementById('botao')

function acao() {
    console.log('ACAO')
}

function acao() {
    fetch('https://pokeapi.co/api/v2/pokemon/21')
        .then(function (response) {
            return response.json()
        }).then(function (response) {
            console.log(response)
        })
}

botao.addEventListener('click', acao)


