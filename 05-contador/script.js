'use strict'

function gerarContagem () {
    const inicio = document.getElementById ('inicio')
    const fim = document.getElementById ('fim')
    const salto = document.getElementById ('salto')
    const lista = document.getElementById('lista')

    for (let i = Number(inicio.value); i <= Number(fim.value); i = i+ Number(salto.value) ){
        const itemlista = document.createElement ('li')

        itemlista.textContent = i


        lista.appendChild(itemlista)
    }
}