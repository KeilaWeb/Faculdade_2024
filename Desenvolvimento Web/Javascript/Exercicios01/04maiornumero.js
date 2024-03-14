/*4 - Ler 2 valores e escrever o maior deles.*/
function maiorEntreDois(valor1, valor2) {
    if (valor1 > valor2) {
        return valor1;
    } else {
        return valor2;
    }
}

var valor1 = Math.floor(Math.random() * 100);
var valor2 = Math.floor(Math.random() * 100);

var maior = maiorEntreDois(valor1, valor2);

console.log("valor 1: "+ valor1 +  " | " + "Valor 2: " + valor2)
console.log("O maior valor é:", maior);
