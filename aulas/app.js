alert('Boas-vindos ao jogo do número secreto');
let numeroMaximo = 5000;
// let numeroSecreto = 5;
// let numeroSecreto = parseInt(Math.random() * 10 + 1);

// let numeroSecreto = parseInt(Math.random() * 100 + 1);
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao número secreto.
while (chute != numeroSecreto) {
    // chute = prompt('Escolha um número entre 1 e 10');
    // chute = prompt('Escolha um número entre 1 e 100');
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        // PARA não continua
        break;
    } else {
        // alert('Você errou :(')
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
    
}

// if (tentativas > 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);

// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);

// }

// tentativas > 1 ? alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`) : alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`)

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
