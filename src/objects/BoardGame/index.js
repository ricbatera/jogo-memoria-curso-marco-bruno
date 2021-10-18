import "./styles.css"
import MisturadorCartas from "../../services/misturadorCartas";
import CriaCartoes from "../../services/criaCartoes";

function BoardGame(qtde) {
    const images = ['logo-css', 'logo-javascript', 'logo-html']
    let arr = MisturadorCartas(qtde, images);
    return /*html*/`
    <section class="board-game">
    ${CriaCartoes(qtde, arr, images)}
     </section>`;
}
export default BoardGame;