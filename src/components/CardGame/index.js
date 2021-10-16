import "./style.css"

function CardGame(img = 'alura-logo'){
    return `
    <article class="card-game">
        <img src="src/img/${img}.png" alt="Logo Alura">
    </article>    
    `

}
export default CardGame;