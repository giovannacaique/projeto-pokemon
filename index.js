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

            let html_lista = ''
            for (const hab of response.abilities) {
                console.log(hab.ability.name)
                html_lista += '<li class="list-group-item>'+hab.ability.name+'</li>'
            }
            console.log(html_lista)
            document.getElementById('habilidades').innerHTML = html_lista
        })
}

botao.addEventListener('click', acao)


