'use strict'

let gImgs = []
let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I never eat Falafel',
            size: 40,
            align: 'left',
            color: 'blue',
            family: 'IMPACT',
            x:50,
            y:50,
        },
        {
            txt: 'lflfkfskvnsklfs  fslkfs',
            size: 40,
            align: 'left',
            color: 'blue',
            family: 'IMPACT',
            x:50,
            y:350,
        }
    ]
}

function setTextinput(value,lineNum) {
    clearCanvas();
    gMeme.lines[lineNum].txt = value;
    gMeme.lines
    gMeme.lines[lineNum].currLine = true;
    drawText();
}

function drawText() {
    gMeme.lines.forEach(line => {
        gCtx.lineWidth = 3;
        gCtx.strokeStyle = 'white';
        gCtx.fillStyle = line.color;
        gCtx.font = `${line.size}px ${line.family}`;
        gCtx.textAlign = line.align;
        gCtx.fillText(line.txt,line.x,line.y);
    })
}


function getCurrMeme() {
    return gMeme
}

function setSelectedImg(id) {
    gMeme.selectedImgId = id
}

function loadImages() {
    let imgs = []
    for (let i = 1; i <= 18; i++) {
        let img = { id: i, url: `meme-imgs/${i}.jpg`, kewwords: ['happy'] }
        imgs.push(img)
    }
    return imgs
}

function getgMeme() {
    return gMeme
}

function getgImgs() {
    return gImgs
}