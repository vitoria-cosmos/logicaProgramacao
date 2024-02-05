num = prompt('Digite um número para sabermos se é positivo ou negativo:')
num = parseFloat(num)
if (num < 0) {
    alert(`O número ${num} é negativo!`)
} else {
    alert(`O número ${num} é positivo!`)
}