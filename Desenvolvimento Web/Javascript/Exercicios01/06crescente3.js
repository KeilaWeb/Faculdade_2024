/*5 - Ler 2 valores e escrevê-los em ordem crescente.*/
function maiorEntreTres(valor1, valor2, valor3) {
    if (valor1 > valor2 && valor1 > valor3) {
        return valor1;
    } else if (valor2 > valor1 && valor2 > valor3) {
        return valor2;
    } else {
        return valor3;
    }
}

var valor1 = Math.floor(Math.random() * 100);
var valor2 = Math.floor(Math.random() * 100);
var valor3 = Math.floor(Math.random() * 100);

var crescente = maiorEntreTres(valor1, valor2, valor3);

console.log("valor 1: "+ valor1 +  " | " + "Valor 2: " + valor2 + "valor 3: "+ valor3)
console.log("O maior valor é:", crescente);
