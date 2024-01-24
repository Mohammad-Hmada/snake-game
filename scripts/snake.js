export let Snake_speed = 7;
let Snake_body = [{ x: 11, y: 11 }];
let news = 0;

export function draw(game_bord) {
    Snake_body.forEach(s => {
        const SE = document.createElement('div');
        SE.style.gridColumnStart = s.x;
        SE.style.gridRowStart = s.y;
        SE.classList.add('snake')
        game_bord.appendChild(SE);
    })
}
export function update() {
    NS();
    let ID = getID();
    for (let i = Snake_body.length - 2; i >= 0; i--) {
        Snake_body[i + 1] = { ...Snake_body[i] }
    };

    Snake_body[0].x += ID.x;
    Snake_body[0].y += ID.y;
}
let ID2 = { x: 0, y: 0 };
let ID3 = { x: 1, y: 1 };
function getID() {
    return ID2;
}
window.addEventListener('keydown', (k) => {
    Arrow(k.key);
})
export function ES(ER) {
    news += ER;
}
export function onSnake(pos, { i = false } = {}) {
    return Snake_body.some((seg, index) => {
        if (i && index === 0) return false;
        return EP(seg, pos);
    })
}
function EP(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}
export function SI() {
    return onSnake(Snake_body[0], { i: true });
}
function NS() {
    for (let i = 0; i < news; i++) {
        Snake_body.push({ ...Snake_body[Snake_body.length - 1] });
    }
    news = 0;
}
export function GSH() {
    return Snake_body[0];
}
function Arrow(dir) {
    switch (dir) {
        case 'ArrowUp':
            if (ID3.x === 0) break;
            ID2 = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            if (ID3.x === 0) break;
            ID2 = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
            if (ID3.y === 0) break;
            ID2 = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
            if (ID3.y === 0) break;
            ID2 = { x: 1, y: 0 };
            break;
    }
    ID3 = ID2;
}
if (navigator.userAgent.includes('Android')) {
    const div = document.createElement('div');
    div.innerHTML = `
    <div style="margin: 0px 40px;" class="arrow">&uarr;</div>
    <div class="arrow">&larr;</div>
    <div class="arrow">&darr;</div>
    <div class="arrow">&rarr;</div>
    `;
    div.classList.add('arrowdiv');
    document.body.appendChild(div);
    const c = div.children;
    c[0].onclick = () => {
        Arrow('ArrowUp')
    }
    c[1].onclick = () => {
        Arrow('ArrowDown')
    }
    c[2].onclick = () => {
        Arrow('ArrowLeft')
    }
    c[3].onclick = () => {
        Arrow('ArrowRight')
    }
}