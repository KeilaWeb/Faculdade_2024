/*7 - Ler 3 valores e escrever a soma dos 2 maiores*/
function somaDosDoisMaiores(valor1, valor2, valor3) {
    var valores = [valor1, valor2, valor3];
    valores.sort((a, b) => b - a);
    return valores[0] + valores[1];
}

var valor1 = Math.floor(Math.random() * 100);
var valor2 = Math.floor(Math.random() * 100);
var valor3 = Math.floor(Math.random() * 100);

var somaDosMaiores = somaDosDoisMaiores(valor1, valor2, valor3);

console.log("Valor 1: " + valor1 + " | Valor 2: " + valor2 + " | Valor 3: " + valor3);
console.log("A soma dos dois maiores valores é:", somaDosMaiores);

