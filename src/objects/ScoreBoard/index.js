import './style.css'
import PlayerName from '../../components/PlayerName';

function ScoreBoard(){
    return /*html*/`
    <section class="score-board">
        ${PlayerName('Player 1')}
        ${PlayerName('Player 2')}
    </section>
    `
}
export default ScoreBoard;