'use strict'

function simular() {
  // 1. Pegar valores
  let valor = parseFloat(document.getElementById("valor").value);
  let taxa = parseFloat(document.getElementById("taxa").value) / 100;
  let parcelas = parseInt(document.getElementById("parcelas").value);
  let parcela = parseFloat(document.getElementById("parcela").value);

  let saldoDevedor = valor;

  let tbody = document.getElementById("tabela-body");

  // 2. Limpar tabela
  tbody.innerHTML = "";

  // 3. Loop mês a mês
  for (let mes = 1; mes <= parcelas; mes++) {

    // 4. Cálculos
    let jurosMes = saldoDevedor * taxa;
    let totalMes = parcela + jurosMes;
    saldoDevedor = saldoDevedor + jurosMes - parcela;

    // Evitar saldo negativo
    if (saldoDevedor < 0) saldoDevedor = 0;

    // 5. Criar linha
    let tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${mes}</td>
      <td class="col-juros">R$ ${jurosMes.toFixed(2)}</td>
      <td>R$ ${parcela.toFixed(2)}</td>
      <td class="col-total">R$ ${totalMes.toFixed(2)}</td>
      <td class="col-saldo">R$ ${saldoDevedor.toFixed(2)}</td>
    `;

    // 6. Adicionar na tabela
    tbody.appendChild(tr);

    // Se já quitou, parar o loop
    if (saldoDevedor === 0) break;
  }
}