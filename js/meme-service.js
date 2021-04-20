'use strict'

let gImgs = []
let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I never eat Falafel',
            size: 20,
            align: 'left',
            color: 'red',
            family: 'IMPACT',
            x:50,
            y:50,
        }
    ]
}

function setTextinput(value) {
    gMeme.lines.txt = value;
    console.log(gMeme);
    onImgClick(gMeme.selectedImgId);
}

function drawText() {
    gMeme.lines.forEach(line => {
        gCtx.lineWidth = 3;
        gCtx.strokeStyle = 'white';
        gCtx.fillStyle = line.color;
        gCtx.font = '40px lato-reg';
        gCtx.textAlign = line.align;
        gCtx.fillText(line.txt,line.x,line.y);
    })
}


function getCurrMeme() {
    return gMeme
}

function setSelectedImg(id) {
    gMeme.selectedImgId = id
    console.log(gMeme, id);
}

function loadImages() {
    let imgs = []
    for (let i = 1; i <= 18; i++) {
        let img = { id: i, url: `meme-imgs/${i}.jpg`, kewwords: ['happy'] }
        imgs.push(img)
    }
    return imgs
}

function getgImgs() {
    return gImgs
}