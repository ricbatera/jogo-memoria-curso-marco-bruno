import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';
import BoardGame from './src/objects/BoardGame';
import ScoreBoard from './src/objects/ScoreBoard';

const $root = document.querySelector('#root');

$root.insertAdjacentHTML('beforeend',`
    ${ScoreBoard()}
    ${ BoardGame(6)}
`);

const $cards = document.querySelectorAll('.card-front-back');
$cards.forEach(e=>{
    e.addEventListener('click',el=>{
        e.classList.toggle('-ativo');
        console.log(e)
    })
})

