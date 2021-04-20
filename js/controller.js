'use strict';

var gCanvas;
var gCtx;



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

function onInputText(value) {   
    setTextinput(value)
}

function setCanvImg() {
    const currMeme = getCurrMeme();
    gCanvas.style = `background-image: url("meme-imgs/${currMeme.selectedImgId}.jpg");background-size: cover;`
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