const min = 1;
const max = 100;
const numeroAleatorio = geraNumeroAleatorio(min,max);

const menorValor = document.querySelector('#menor-valor');
menorValor.innerHTML = min;
const maiorValor = document.querySelector('#maior-valor');
maiorValor.innerHTML = max;

function geraNumeroAleatorio(min,max){
    return parseInt(Math.random() * (max - min) + min);
}

console.log(`numero secreto: ${numeroAleatorio}`);