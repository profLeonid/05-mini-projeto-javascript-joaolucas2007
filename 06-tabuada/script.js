'use strict'

function GerarTabuada() {
    const numero = document.getElementById('numero')
    const corpoTabela = document.getElementById('corpo-tabela')

    // 👉 limpa a tabela antes de gerar novamente
    corpoTabela.innerHTML = ''

    const valor = Number(numero.value)

    if (numero.value === '') {
        alert('Digite um número')
        return
    }

    for (let i = 1; i <= 10; i++) {
        const linha = document.createElement('tr')

        const colunaExpressao = document.createElement('td')
        const colunaResultado = document.createElement('td')

        colunaExpressao.textContent = `${valor} x ${i}`
        colunaResultado.textContent = valor * i

        linha.appendChild(colunaExpressao)
        linha.appendChild(colunaResultado)

        corpoTabela.appendChild(linha)
    }
}