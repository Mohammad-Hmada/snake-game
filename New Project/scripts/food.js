import { 
    onSnake,
    ES,
} from "./snake.js";

let food = RFP();
const ER = 3;
export function draw(game_bord){
        const FE = document.createElement('div');
        FE.style.gridColumnStart= food.x;
        FE.style.gridRowStart= food.y;
        FE.classList.add('food')
        game_bord.appendChild(FE);
}
export function update(){
    if (onSnake(food)){
        food = RFP();
        ES(ER);
    }
}

function RFP(){
    let NFP;
    while (NFP == null || onSnake(NFP)) {
        NFP = NRFP();
    }
    return NFP;
}
function NRFP(){
    return {
        x:Math.floor(Math.random()* 21) + 1,
        y:Math.floor(Math.random()* 21) + 1,
    }
}