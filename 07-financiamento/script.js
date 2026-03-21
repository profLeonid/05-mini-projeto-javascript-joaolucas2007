'use strict'


function CriarLinha(linha) {
  const tabela = document.getElementById('tabela')
  const tr = document.createElement('tr')

  const tdMes = document.createElement('td')
  tdMes.textContent = linha.mes

  const tdJurosMes = document.createElement('td')
  tdJurosMes.textContent = linha.Juros
  tdJurosMes.className = 'col-juros'

  const tdParcela = document.createElement('td')
  tdParcela.textContent = linha.Parcela

  const tdTotalMes = document.createElement('td')
  tdTotalMes.textContent = linha.TotalMes
  tdTotalMes.className = 'col-total'

  const tdSaldoDevedor = document.createElement('td')
  tdSaldoDevedor.textContent = linha.SaldoDevedor
  tdSaldoDevedor.className = 'col-saldo'

  tr.appendChild(tdMes)
  tr.appendChild(tdJurosMes)
  tr.appendChild(tdParcela)
  tr.appendChild(tdTotalMes)
  tr.appendChild(tdSaldoDevedor)

  tabela.appendChild(tr)



}


function SimularFinanciamento() {
  const ValorTotal = Number(document.getElementById('valor-total').value)
  const TaxaJuros = Number(document.getElementById('taxa-juros').value)
  const NumeroParcelas = Number(document.getElementById('numero-parcelas').value)

  let SaldoDevedor = ValorTotal
  tabela.replaceChildren ()
  for (let i = 1; i <= NumeroParcelas; i++) {




    const jurosMes = SaldoDevedor * TaxaJuros / 100
    const parcela = ValorTotal / NumeroParcelas
    const totalMes = parcela + jurosMes
    SaldoDevedor = SaldoDevedor + jurosMes - parcela



    const linha = {
      'mes': i,
      'Juros': jurosMes.toFixed(2),
      'parcela': parcela.toFixed(2),
      'TotalMes': totalMes.toFixed(2),
      'SaldoDevedor': SaldoDevedor.toFixed(2)
    }
    CriarLinha(linha)
  }

}