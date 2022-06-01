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


let initString = [
    'wake up nemo...',
    'metress has you...',
    'kill the red insects...'
]
let initStringIdx = 0
let initStringNum = 0

function prolog() {
    let interval = 100

    if(initStringNum > initString[initStringIdx].length) {
        if(initString.length === ++initStringIdx) {
            console.log('end prolog-loop!')
            return
        }
        initStringNum = 0
    }

    if(initStringNum === initString[initStringIdx].length) interval = 1000

    ctx.clearRect(0, 0, CANVAS.clientWidth, CANVAS.clientHeight)
    ctx.font = "30px monospace";
    ctx.fillStyle = 'MediumSpringGreen'
    ctx.fillText(initString[initStringIdx].substring(0,initStringNum)+'_',50,100)
    initStringNum++
    setTimeout(prolog, interval)
}

function initStage() {
    ctx.fillStyle = 'yellow'
    ctx.fillText('test',100,100)
}


prolog()
console.log('after prolog')
//initStage()
