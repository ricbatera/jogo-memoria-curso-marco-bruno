import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';
import BoardGame from './src/objects/BoardGame';
import ScoreBoard from './src/objects/ScoreBoard';
import SetaJogador from './src/components/SetaJogador';
import TrocaPlayerModal from './src/components/TrocaPlayerModal';

const $root = document.querySelector('#root');

$root.insertAdjacentHTML('beforeend',`
    ${SetaJogador()}
    ${ScoreBoard()}
    ${ BoardGame(8)}
    ${TrocaPlayerModal()}
`);

const $cards = document.querySelectorAll('.card-front-back');
const $seta = document.getElementById('seta');
const $modal = document.getElementById('modal');
const $clickOk = document.getElementById('clickOk');
let virados =0;
$cards.forEach(e=>{
    e.addEventListener('click',()=>{
        if(virados<2){
            virados = contaCardsAtivos()
            e.classList.toggle('-ativo');
        }else if(virados == 2){
            modalErr()
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
    if(ativos == 2){
        setTimeout(modalErr, 1000)
    }
    return ativos;
}

function modalErr(){
    $modal.classList.toggle('mostra');
}
$clickOk.addEventListener('click', ()=>{
    modalErr();
    desviraTodos();
})