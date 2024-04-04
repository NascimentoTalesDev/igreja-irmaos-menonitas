export default function calcularPorcentagemDeCrescimento(receitaAtual, despesaAtual) {
    if (!despesaAtual && receitaAtual) {
        const receita = (receitaAtual * 100) / 100;
        return receita
    }

    if (!receitaAtual && despesaAtual) {
        const despesa = (despesaAtual * 100) / 100;
        return despesa
    }

    if (receitaAtual > 1 && despesaAtual > 1) {
        const crescimento = ((receitaAtual - despesaAtual) / despesaAtual) * 100;
        return crescimento;
    }
}