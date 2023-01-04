const prompt = require('prompt-sync')();

var alturas = [];

for (i = 0; i < 10; i++) { 
    alturas[i] = parseFloat(prompt('Digite a altura: '));
}

for (i = 0; i < 10; i++) {
    var qtdmenores = 0;
    for (j = 0; j < 10; j++) {
        if (alturas[j] < alturas[i]) {
            qtdmenores++;
        }
    }   
    console.log("Aluno " + i + " : maior que " + qtdmenores + " aluno(s)");
}

