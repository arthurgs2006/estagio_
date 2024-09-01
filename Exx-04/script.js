const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const valorTotal = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

const percentualPorEstado = {};
for (const estado in faturamentoPorEstado) {
    percentualPorEstado[estado] = (faturamentoPorEstado[estado] / valorTotal) * 100;
}

console.log("Percentual de representação por estado:");
for (const estado in percentualPorEstado) {
    console.log(`${estado}: ${percentualPorEstado[estado].toFixed(2)}%`);
}
