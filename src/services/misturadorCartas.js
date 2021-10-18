function MisturadorCartas(qtdeCartas, qtdeFiguras) {
    let arrayEmbaralhado = [];
    const figuras = qtdeFiguras.length;
    while (arrayEmbaralhado.length < qtdeCartas) {
        arrayEmbaralhado = paresCartas(figuras, qtdeCartas, arrayEmbaralhado)
    }
    arrayEmbaralhado = embaralhar(arrayEmbaralhado)

    return arrayEmbaralhado;
}

function paresCartas(qtdeFiguras, qtdeCartas, arr) {
    let posicaoFig = 0;
    for (let i = 0; i < qtdeCartas; i++) {
        if (posicaoFig < qtdeFiguras && arr.length < qtdeCartas) {
            arr.push(posicaoFig)
            arr.push(posicaoFig)
            posicaoFig++
        } else if (arr.length < qtdeCartas) {
            posicaoFig = 0
            arr.push(posicaoFig)
            arr.push(posicaoFig)
            posicaoFig++
        }
    }
    return arr
}
// Função para randomizar array
function embaralhar(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
}
export default MisturadorCartas;