import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';
import BoardGame from './src/objects/BoardGame';
import ScoreBoard from './src/objects/ScoreBoard';
import SetaJogador from './src/components/SetaJogador';

const $root = document.querySelector('#root');

$root.insertAdjacentHTML('beforeend',`
    ${SetaJogador()}
    ${ScoreBoard()}
    ${ BoardGame(6)}
`);

const $cards = document.querySelectorAll('.card-front-back');
const $seta = document.getElementById('seta');
let virados =0;
$cards.forEach(e=>{
    e.addEventListener('click',()=>{
        if(virados<2){
            virados = contaCardsAtivos()
            e.classList.toggle('-ativo');
        }else{
            desviraTodos()
        }
    })
})

function desviraTodos(){
    $cards.forEach(e =>{
        e.classList.remove('-ativo')
        virados = 0;        
    })
    $seta.classList.toggle('-posicao-player2')
}

function contaCardsAtivos(){
    let ativos = 1;
    $cards.forEach(e=>{
        if(e.classList.contains('-ativo')){
            ativos++
        }
    })
    return ativos;
}

