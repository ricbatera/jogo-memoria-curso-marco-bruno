import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'
import CardGameCss from './src/components/CardGameCss';
import CardGameHtml from './src/components/CardGameHtml';
import CardGameJavaScript from './src/components/CardGameJavaScript';
import BoardGame from './src/objects/BoardGame';

const $root = document.querySelector('#root');

$root.insertAdjacentHTML('beforeend', BoardGame(9));

const $cards = document.querySelectorAll('.card');
$cards.forEach(e=>{
    e.addEventListener('click',el=>{
        e.classList.toggle('esconde');
        console.log(e)
    })
})

