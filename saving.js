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


let initString = 'ENJOY the Game!'
let initStringNum = 0
let initStringLength = initString.length

function prolog() {
    if(initStringNum >= initStringLength) {
        console.log('end prolog-loop!')
        return
    }

    ctx.clearRect(0, 0, CANVAS.clientWidth, CANVAS.clientHeight)
    ctx.font = "30px Arial";
    ctx.fillStyle = 'yellow'
    ctx.fillText(initString.substring(0,initStringNum),100,100)
    initStringNum++
    setTimeout(prolog, 200)
}

function initStage() {
    ctx.fillStyle = 'yellow'
    ctx.fillText('test',100,100)
}


prolog()
//initStage()
