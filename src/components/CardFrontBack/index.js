import CardGame from '../CardGame';
import './style.css';

function CardFrontBack(img){
    return /*html */`
        <article class="card-front-back">
            <div class="card-face front">
                ${CardGame()}
            </div>
            <div class="card-face back">
                ${CardGame(img)}
            </div>
        </article>
    `
}

export default CardFrontBack;