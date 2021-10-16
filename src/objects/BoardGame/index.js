import CardGame from "../../components/CardGame";

function BoardGame(qtde) {    
    return CardGame().repeat(qtde);
}
export default BoardGame;