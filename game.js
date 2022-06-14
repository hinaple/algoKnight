const ArrowKeyPressing = [ false, false ];

function start() {
    newEvent("keydown", evt => {
        if(evt.key === "ArrowLeft") {
            ArrowKeyPressing[0] = true;
        }
        else if(evt.key === "ArrowRight") {
            ArrowKeyPressing[1] = true;
        }
    });
    newEvent("keyup", evt => {
        if(evt.key === "ArrowLeft") {
            ArrowKeyPressing[0] = false;
        }
        else if(evt.key === "ArrowRight") {
            ArrowKeyPressing[1] = false;
        }
        else return;
    });
}

function draw(ts) {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}