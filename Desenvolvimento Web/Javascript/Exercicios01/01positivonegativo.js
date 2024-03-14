//1 – Ler um valor e escrever se é positivo, negativo ou zero.

function verificaNumero(numero){
    if(numero > 0) {
        return "Positivo";
    }else if (numero < 0) {
        return "Negativo";
    }else {
        return "Zero";
    }
}
let numero = Math.floor(Math.random() * 100) -100;
var resultado = verificaNumero(numero);
console.log("O numero: " + numero + " é um número " + resultado);