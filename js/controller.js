'use strict';

let gCanvas;
let gCtx;
let gCurrLine = 0;



function init() {
    gImgs = loadImages();
    renderImages();
}

function onEditSavedMeme(idx) {
    const savedMemes = getSevedMemes()
    const meme = savedMemes[idx];
    gMeme = meme
    console.log(meme);
    openMemeEditor(meme.selectedImgId)

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


function renderImages() {
    let imgs = getgImgs();
    let htmlImgs = imgs.map(img => {
        return `<img src="${img.url}" onclick="onImgClick(${img.id})">`
    })
    htmlImgs = htmlImgs.join('');
    document.querySelector(".gallery-images").innerHTML = htmlImgs;
}

function getCurrTxt(line) {
    const meme = getCurrMeme();
    return meme.lines[line].txt
}

function onSwitchLines() {
    const meme = getCurrMeme();
    (gCurrLine === meme.lines.length - 1) ? gCurrLine = 0 : gCurrLine++;
    document.querySelector('[data-name="input-line"]').value = getCurrTxt(gCurrLine)
}

function onChangeHeight(sign) {
    const meme = getCurrMeme();
    meme.lines[gCurrLine].y += sign;
    renderCanvas();
    drawText();
}

function onChangeTxtSize(sign) {

    const meme = getCurrMeme();
    meme.lines[gCurrLine].size += sign;
    renderCanvas();
    drawText();
}

function onInputText(value) {
    setTextinput(value, gCurrLine)
}

function getCurrLine() {
    return gCurrLine;
}

function setCanvImg() {
    const currMeme = getCurrMeme();
    let img = new Image();
    img.src = `meme-imgs/${currMeme.selectedImgId}.jpg`;
    img.onload = gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
}

function clearCanvas() {
    // const meme = getCurrMeme()
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)

}

function onClear() {
    let meme = getCurrMeme();
    meme.lines.forEach(line => {
        line.txt = ''
    })
    updateCurrMeme(meme);
    document.querySelector('[data-name="input-line"]').value = "";
    renderCanvas();
}

function renderCanvas() {
    const htmlCanvas = `<canvas id="my-canvas" width="475px" height="450px"> </canvas>`;
    document.querySelector(".canvas-container").innerHTML = htmlCanvas;
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext("2d");
    setCanvImg();
}

function openMemeEditor(id) {
    setSelectedImg(id);
    renderCanvas(id)
    setCanvImg();
    document.querySelector(".editor-container").style.display = "flex";
    drawText()
}

function onImgClick(id) {
    document.querySelector(".gallery-container").style.display = 'none';
    openMemeEditor(id);
}

function onGallery() {
    document.querySelector(".editor-container").style.display = "none";
    document.querySelector(".gallery-memes").style.display = 'none';
    document.querySelector(".gallery-container").style.display = 'block';

}

function onMemes() {
    const savedMemes = getSevedMemes();
    drawSavedMemes(savedMemes);
    document.querySelector(".editor-container").style.display = "none";
    document.querySelector(".gallery-container").style.display = 'none';
    document.querySelector(".gallery-memes").style.display = 'block';

}

function onSaveMeme() {
    let savedMemes = loadFromStorage('saved-memes');
    if (!savedMemes) savedMemes = [];
    const meme = getCurrMeme();
    savedMemes.push(meme);
    saveMeme(savedMemes);
    alert('Meme Saved');
}

function onDownloadMeme(elLink) {
    console.log('??');
    const imgContent = gCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
    elLink.download = 'myMeme';
}

