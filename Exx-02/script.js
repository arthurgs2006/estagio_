const readline = require("node:readline")

function fibonacciSequence(n) {
    let fibSequence = [0, 1];
    while (fibSequence[fibSequence.length - 1] < n) {
        fibSequence.push(fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]);
    }
    return fibSequence;
}

function isInFibonacci(n) {
    let fibSequence = fibonacciSequence(n);
    return fibSequence.includes(n);
}
function askUser(question){
    const rl = readline.Interface({input: process.stdin, output: process.stdout})
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            if(answer)
                resolve(answer)
            rl.close(0);
        })
    })
}
async function main(){
    const num = await askUser("Digite um número para verificar se está na sequência de Fibonacci: ")
    if (isInFibonacci(Number(num))) {
        console.log(`O número ${num} está na sequência de Fibonacci.`);
    } else {
        console.log(`O número ${num} não está na sequência de Fibonacci.`);
    }
}

main();
