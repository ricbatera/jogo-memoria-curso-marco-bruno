import "./styles.css"
import CardFrontBack from "../../components/CardFrontBack";

function BoardGame(qtde) {
    return /*html*/`
    <section class="board-game">
        ${CardFrontBack().repeat(qtde)}
     </section>`;
}
export default BoardGame;