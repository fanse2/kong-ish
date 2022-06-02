// canvas width="480" height="540"
import {unit} from './char.js'
const CANVAS = document.querySelector('#grid')
const ctx = CANVAS.getContext('2d')

const btnStart = document.querySelector('.startButton')

const gSetting = {
    stage : 1,
    score : 0
}

let intGame
//x,y,ctx,img,width,height
let test = new unit(100,100,'ctx','img',24,24)

let initString = [
    'wake up nemo...',
    'metress has you...',
    'kill the red insects...',
    'knock, knock, nemo.'
]
let initStringIdx = 0
let initStringNum = 0

function prolog() {
    let interval = 100

    if(initStringNum > initString[initStringIdx].length) {
        if(initString.length === ++initStringIdx) {
            console.log('end prolog-loop!')
            codeRain()  // run CodeRain............
            return
        }
        initStringNum = 0
    }

    if(initStringNum === initString[initStringIdx].length) interval = 1000

    ctx.clearRect(0, 0, CANVAS.clientWidth, CANVAS.clientHeight)
    ctx.font = "30px monospace"
    ctx.fillStyle = 'MediumSpringGreen'
    ctx.fillText(initString[initStringIdx].substring(0,initStringNum)+'_',50,100)
    initStringNum++
    setTimeout(prolog, interval)
}


let codeString = [
    `나라의말이중국과달라문자로서로통하지아니하여서`,
    `이런까닭으로어리석은백성이말하고자하는바가있어도`,
    `마침내제뜻을능히펴지못하는사람이많다`,
    `내가이를위하여가엾이여겨새로스물여덟자를만드니`,
    `사람마다하여금쉬이익혀날마다씀에편안하게하고자할따름이다`,
    `나라의말이중국과달라문자로서로통하지아니하여서`,
    `이런까닭으로어리석은백성이말하고자하는바가있어도`,
    `마침내제뜻을능히펴지못하는사람이많다`,
    `내가이를위하여가엾이여겨새로스물여덟자를만드니`,
    `사람마다하여금쉬이익혀날마다씀에편안하게하고자할따름이다`,
    `나라의말이중국과달라문자로서로통하지아니하여서`,
    `이런까닭으로어리석은백성이말하고자하는바가있어도`,
    `마침내제뜻을능히펴지못하는사람이많다`,
    `내가이를위하여가엾이여겨새로스물여덟자를만드니`,
    `사람마다하여금쉬이익혀날마다씀에편안하게하고자할따름이다`,
    `나라의말이중국과달라문자로서로통하지아니하여서`,
    `이런까닭으로어리석은백성이말하고자하는바가있어도`,
    `마침내제뜻을능히펴지못하는사람이많다`,
    `내가이를위하여가엾이여겨새로스물여덟자를만드니`,
    `사람마다하여금쉬이익혀날마다씀에편안하게하고자할따름이다`,
    `나라의말이중국과달라문자로서로통하지아니하여서`,
    `이런까닭으로어리석은백성이말하고자하는바가있어도`,
    `마침내제뜻을능히펴지못하는사람이많다`,
    `내가이를위하여가엾이여겨새로스물여덟자를만드니`,
    `사람마다하여금쉬이익혀날마다씀에편안하게하고자할따름이다`,
    `나라의말이중국과달라문자로서로통하지아니하여서`,
    `이런까닭으로어리석은백성이말하고자하는바가있어도`,
    `마침내제뜻을능히펴지못하는사람이많다`,
    `내가이를위하여가엾이여겨새로스물여덟자를만드니`,
    `사람마다하여금쉬이익혀날마다씀에편안하게하고자할따름이다`,
]
function codeRain() {
    ctx.clearRect(0,0,CANVAS.clientWidth,CANVAS.clientHeight)

    ctx.font = "7px monospace"
    ctx.fillStyle = 'MediumSpringGreen'

    for(let k=0; k<codeString.length; k++) {
        let rand = Math.floor(Math.random()*100)
        
        for(let i=0; i<codeString[k].length; i++) {
            setTimeout(()=>{        
                for(let j=0; j<=i; j++) {
                    if(j == i) ctx.fillStyle = 'white'
                    else ctx.fillStyle = 'MediumSpringGreen'
                    
                    ctx.fillText(codeString[k][j], 16*k, rand +j*18)
                }
                
            },100*i)
        }
    }
}

function initStage() {
    ctx.beginPath()
    ctx.strokeStyle = "#FF0000";
    ctx.lineWidth = 3
    
    for(let i=0; i< 6; i++){
        ctx.moveTo(0,70*i+120)
        ctx.lineTo(480,70*i+120)
        
    }

    ctx.strokeRect(150,150,32,32)
    ctx.stroke()


}

//prolog()

function start() {
    initStage()
}


btnStart.addEventListener('click',()=>start())