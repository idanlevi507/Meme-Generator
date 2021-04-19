'use strict';

function init() {
    gImgs = loadImages();
    renderImages();
}


function renderImages() {

    let imgs = getgImgs();
    console.log(imgs);
    let htmlImgs = imgs.map(img => {
        return `<img src="${img.url}" onclick="onOpenCanvas(this)>`
    })
    htmlImgs = htmlImgs.join('');
    document.querySelector(".gallery-images").innerHTML = htmlImgs;
}

function onOpenCanvas(el) {

}