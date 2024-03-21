const readline = require('node:readline')

function invertString(string) {
    let inverted = "";
    for (let i = string.length - 1; i >= 0; i--) {
        inverted += string[i];
    }
    return inverted;
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
async function run(){
    const input = await askUser("Digite uma string para inverter:");
    console.log(`String invertida: ${invertString(input)}`)
}

run();
