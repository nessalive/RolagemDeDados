// script.js
let quantidadeDados = parseInt(prompt("Quantos dados você deseja inserir?"));
let quantidadeLados = parseInt(prompt("Quantos Lados você deseja para os dados?"));
let quantidadetentativas = parseInt(prompt("Quantos vezes você deseja rolar os dados?"));

let criarElementoParagrafo = (texto) =>{
    let paragrafo = document.createElement("p");
    paragrafo.textContent = texto;
    document.body.appendChild(paragrafo);
}

criarElementoParagrafo("Boa sorte nos valores");
criarElementoParagrafo("quantidade de dados: " + quantidadeDados);
criarElementoParagrafo("quantidade de Lados: " + quantidadeLados);

let rolarDados = (quantidadeDados, quantidadeLados, quantidadetentativas) => {
    let num5 = [];

    for (let tentativas = 0; tentativas < quantidadetentativas; tentativas++) {
        criarElementoParagrafo(`---------------- Tentativa ${tentativas + 1} --------------------}`);
        let soma1 = 0;
        for (let dado = 0; dado < quantidadeDados; dado++) {
            const numeroAleatorio = Math.floor(Math.random() * quantidadeLados) + 1;
            criarElementoParagrafo(`Dado ${dado + 1}: ${numeroAleatorio}`);
            soma1 += numeroAleatorio;
        }
        num5.push(soma1);
        criarElementoParagrafo("Soma dos valores: " + soma1);
    }

    return num5;
}

let TotalTodasSomas = rolarDados(quantidadeDados, quantidadeLados, quantidadetentativas);

let somaGeral = () => {
    let totais = 0
    for (let total = 0; total < TotalTodasSomas.length; total++) {
        totais += TotalTodasSomas[total];
    }
    return totais;
}

criarElementoParagrafo("Somas totais de todas as tentativas: " + somaGeral());
