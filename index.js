botao = document.getElementById('botao')

function acao() {
    console.log('ACAO')
}

function acao() {

    let pokemon = document.getElementById('pokemon').value

    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
        .then(function (response) {
            return response.json()
        }).then(function (response) {
            console.log(response)
            console.log(response.sprites.front_default)
            document.getElementById('imagem').src = response.sprites.front_default
        })
}

botao.addEventListener('click', acao)


