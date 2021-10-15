import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'
import cardGame from './src/components/CardGame';
import CardGameCss from './src/components/CardGameCss';
import CardGameHtml from './src/components/CardGameHtml';
import CardGameJavaScript from './src/components/CardGameJavaScript';

const $root = document.querySelector('#root');
const $htmlCardGame = cardGame();
let qtdeDecartas = 6 // pode receber do front essa informação

for (let i = 0; i < 6; i++) {
    $root.insertAdjacentHTML('beforeend', $htmlCardGame);        
}
$root.insertAdjacentHTML('beforeend', CardGameJavaScript());

// document.querySelectorAll('article').addEventListener('click', e=>{
//     console.log(e.target)
// });

$root.addEventListener('click', e=>{
    console.log('teste')
})
