const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const WIDTH = 1080;
const HEIGHT = 1080;

let startTs;
let prevTs = 0;

function newEvent(type, callback) {
    return document.body.addEventListener(type, callback);
}

function frame(ts) {
    if(!startTs) {
        startTs = ts;
        if(typeof start === "function") start(ts);
    }
    const progress = startTs - ts;
    if(typeof draw === "function") draw(ts - prevTs, progress);

    prevTs = ts;
    window.requestAnimationFrame(frame);
}

window.requestAnimationFrame(frame);