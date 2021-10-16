import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';
import BoardGame from './src/objects/BoardGame';

const $root = document.querySelector('#root');

$root.insertAdjacentHTML('beforeend', BoardGame(8));

const $cards = document.querySelectorAll('.card');
$cards.forEach(e=>{
    e.addEventListener('click',el=>{
        e.classList.toggle('esconde');
        console.log(e)
    })
})

