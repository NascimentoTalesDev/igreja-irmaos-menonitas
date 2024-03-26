export default function calcularPorcentagemDeCrescimento(receitaAtual, despesaAtual) {
    const crescimento = ((receitaAtual - despesaAtual) / despesaAtual) * 100;
    return crescimento;
}