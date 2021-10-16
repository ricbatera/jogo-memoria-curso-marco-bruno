import "./styles.css"
import CardGame from "../../components/CardGame";

function BoardGame(qtde) {    
    return `<section class="board-game"> ${CardGame().repeat(qtde)}</section>`;
}
export default BoardGame;