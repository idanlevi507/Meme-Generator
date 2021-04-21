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
            x: 50,
            y: 50,
        },
        {
            txt: 'lflfkfskvnsklfs  fslkfs',
            size: 40,
            align: 'left',
            color: 'blue',
            family: 'IMPACT',
            x: 50,
            y: 350,
        }
    ]
}

function setTextinput(value, lineNum = 0) {
    clearCanvas();
    // debugger
    gMeme.lines[lineNum].txt = value;
    drawText();
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

function getgImgs() {
    return gImgs
}

function updateCurrMeme(updatedMeme) {
    gMeme = updatedMeme
}

function saveMeme(meme) {
    saveToStorage('saved-memes', meme);
}

function getSevedMemes() {
    const savedMemes = loadFromStorage('saved-memes');
    return savedMemes
}

function drawText() {
    gMeme.lines.forEach(line => {
        gCtx.lineWidth = 3;
        gCtx.strokeStyle = 'white';
        gCtx.fillStyle = line.color;
        gCtx.font = `${line.size}px ${line.family}`;
        gCtx.textAlign = line.align;
        gCtx.fillText(line.txt, line.x, line.y);
    })
}

function drawSavedMemes(sevedMemes) {
    let elContainer = document.querySelector(".saved-canvas-container");
    elContainer.innerHTML = ''
    sevedMemes.forEach((meme, idx) => {
        gMeme = meme;
        const htmlCanvas = `<canvas class="saved-canvas" id="my-saved-Canvas${idx}" width="475px" height="450px"> </canvas>`;
        if (elContainer.firstChild) {
            const newElement = document.createElement("div");
            newElement.innerHTML = htmlCanvas;
            elContainer.insertBefore(newElement, elContainer.firstChild.nextSibling);
        } else {
            elContainer.innerHTML = htmlCanvas;
        }
        gCanvas = document.querySelector(`#my-saved-Canvas${idx}`);
        gCtx = gCanvas.getContext("2d");
        gCanvas.style = `background-image: url("meme-imgs/${gMeme.selectedImgId}.jpg");background-size: cover;`
        drawText();
        document.querySelector(".gallery-memes").style.display = "flex";
    })

}