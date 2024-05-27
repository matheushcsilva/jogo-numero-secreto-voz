function verificaSeOChutePossuiValorValido(chute){
    const numero =  +chute;

    if(chuteForInvalido(numero)){
        return elementoChute.innerHTML += '<div>Valor inválido</div>';
    }
    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        return elementoChute.innerHTML += `<div>Valor inválido: O número secreto precisa estar entre ${min} e ${max}</div>`;
    }
    if (numero === numeroAleatorio){
        document.body.innerHTML =`
        <h2>Você acertou</h2>
        <h3>O número secreto era ${numeroAleatorio}</h3>
        <button id="restart" class="btn-restart"> Jogar Novamente</button>
        `;

    }else if(numero > numeroAleatorio){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`;
    }else{
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`;
    } 
}

function chuteForInvalido(numero){
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero >max || numero < min;
}

document.addEventListener('click', e => {
    if (e.target.id === 'restart'){
        window.location.reload();
    }
});

