'use strict'

let gImgs = []
let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 40,
            align: 'left',
            color: 'blue',
            family: 'poppin-medium',
            x: 50,
            y: 50,
        },
        {
            txt: '',
            size: 40,
            align: 'left',
            color: 'blue',
            family: 'poppin-medium',
            x: 50,
            y: 350,
        }
    ]
}

function setTextinput(value, lineNum = 0) {
    gMeme.lines[lineNum].txt = value;
    renderCanvas();
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



function drawSavedMemes(sevedMemes) {
    let elContainer = document.querySelector(".saved-canvas-container");
    elContainer.innerHTML = ''
    sevedMemes.forEach((meme, idx) => {
        gMeme = meme;
        const htmlCanvas = `<canvas class="saved-canvas" id="my-saved-Canvas${idx}" width="475" height="450" onclick="onEditSavedMeme('${idx}')"> </canvas>`;
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