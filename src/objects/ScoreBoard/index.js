import './style.css'
import PlayerName from '../../components/PlayerName';
import PontosJogador from '../../components/PontosJogador';

function ScoreBoard(){
    return /*html*/`
    <section class="score-board">
        ${PlayerName('Player 1')}
        ${PontosJogador()}
        <span style="color: var(--color-sandstorm);">VS</span>
        ${PontosJogador()}
        ${PlayerName('Player 2')}
    </section>
    `
}
export default ScoreBoard;