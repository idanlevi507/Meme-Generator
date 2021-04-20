'use strict';

let gCanvas;
let gCtx;
let gCurrLine= 0;



function init() {
    gImgs = loadImages();
    renderImages();
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
const meme = getgMeme();
    // let currLine = meme.lines.filter(line=> {
    //     return (line.currLine)
          
    // })
    return meme.lines[line].txt
}

function onSwitchLines() {
    const meme = getgMeme();
    (gCurrLine===meme.lines.length-1)? gCurrLine = 0 : gCurrLine++ ;
    document.querySelector('[data-name="input-line"]').value =  getCurrTxt(gCurrLine)
}

function onChangeHeight(idx=0,sign) {
    const meme = getgMeme();
    meme.lines[idx].y += sign;
    clearCanvas();
    drawText();
}

function onChangeTxtSize(idx=0,sign) {
    const meme = getgMeme();
    meme.lines[idx].size += sign;
    clearCanvas();
    drawText();
}

function onInputText(value) {   
    setTextinput(value,gCurrLine)
}

function getCurrLine() {
    return gCurrLine;
}

function setCanvImg() {
    const currMeme = getCurrMeme();
    gCanvas.style = `background-image: url("meme-imgs/${currMeme.selectedImgId}.jpg");background-size: cover;`
}

function clearCanvas() {
    // const meme = getgMeme()
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)

}

function onClear() {
    document.querySelector('[data-name="first-line"]').value = '';
    document.querySelector('[data-name="second-line"]').value = '';
    clearCanvas();
}

function renderCanvas() {
    const htmlCanvas = `<canvas id="my-canvas" width="475px" height="450px"> </canvas>`;
    document.querySelector(".canvas-container").innerHTML = htmlCanvas;
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext("2d");

}

function openMemeEditor(id) {
    setSelectedImg(id);
    renderCanvas(id)  
    setCanvImg();
    document.querySelector(".modal-content").style.display = "flex";
    drawText()
}

function onImgClick(id) {
    document.querySelector(".gallery-container").style.display = 'none';
    openMemeEditor(id);
}

function onGallery() {
    document.querySelector(".modal-content").style.display = "none";
    document.querySelector(".gallery-container").style.display = 'block';
}