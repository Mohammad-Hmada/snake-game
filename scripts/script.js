import {
    Snake_speed,
    draw as draw_Snake,
    update as update_Snake,
    GSH,
    SI,
} from "./snake.js";
import {
    draw as draw_Food,
    update as update_Food,
} from "./food.js";

let LT = 0;
let game_over = false;
const game_bord = document.getElementById('snak-bord');
function run_game(CT){
    if (game_over) {
    if (confirm('Game Over! \nclick "OK" for restart.')) {
        location.reload();
    }
    return
    }
    window.requestAnimationFrame(run_game);
    const s = (CT - LT) / 1000;
    if (s < (1/Snake_speed)) return;
    LT = CT;
    update();
    draw();
}
window.requestAnimationFrame(run_game);

function update(){
    update_Food();
    update_Snake();
    check();
}
function draw(){
    game_bord.innerHTML='';
    draw_Food(game_bord);
    draw_Snake(game_bord);
}

function check(){
    game_over = OG(GSH()) || SI();
}
function OG(pos){
    return (
        pos.x < 1 || pos.x > 21 || 
        pos.y < 1 || pos.y > 21 
    )
};