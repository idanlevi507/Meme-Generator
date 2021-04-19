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
            color: 'red'
        }
    ]
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