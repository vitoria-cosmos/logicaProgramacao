
alert('Agora vamos jogar!!')

let valor = parseInt(Math.random() * 2);

console.log('Número sortedo:', valor)

let pontos = 0;

let chute = parseInt(prompt('Escolha um número entre 1 e 2:'))

if (chute == null){
    alert('Valor inválido!')
} else {
    while (pontos <= 90) {
        valor = parseInt(Math.random() * 2)
    
        chute = parseInt(prompt('[ACERTOU +10] Escolha um número entre 1 e 2:'))
    
        while (chute != valor) {
            chute = parseInt(prompt('[ERROU] Tente novamente!'))
        } 
    
        pontos = pontos + 10; 
        console.log('Pontos acumulados: ',pontos)
    } 
    
    if (pontos == 100) {
        console.log('Parabéns, você ganhou!!!')
    }
    console.log('pontos totais: ', pontos)
}



