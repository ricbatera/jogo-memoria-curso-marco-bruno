import CardFrontBack from "../components/CardFrontBack";

function CriaCartoes(qtdeCartas, arr, imagens){
    let htmlCartoes = ''
    for (let i = 0; i < qtdeCartas; i++) {
        htmlCartoes += CardFrontBack(imagens[arr[i]])      
    }
    return htmlCartoes
}

export default CriaCartoes;