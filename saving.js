// canvas width="480" height="540"
import {unit} from './char.js'
const CANVAS = document.querySelector('#grid')
const ctx = CANVAS.getContext('2d')

const gSetting = {
    stage : 1,
    score : 0
}

let intGame
//x,y,ctx,img,width,height
let test = new unit(100,100,'ctx','img',24,24)
test.showValues()

function initStage() {
    ctx.fillStyle = 'yellow'
    ctx.fillText('test',100,100)
}


initStage()