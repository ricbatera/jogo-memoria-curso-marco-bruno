const images = ['logo-css', 'logo-javascript', 'logo-html']
const qtde = 8;
let teste = [];
let carta1 = 1;
let carta2 = 1;
let carta3 = 1;
const lista = () => {
    const figuras = images.length;
    while (teste.length < qtde) {
        teste = paresCartas(figuras, qtde, teste)
    }
    console.log(teste)
    //console.log(teste.filter(e => e == 0).length)
    teste = embaralhar(teste)
    console.log(teste)
}

function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
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

lista();