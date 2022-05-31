export class unit {
    constructor(x,y,ctx,img,width,height) {
        [
            this.x,
            this.y,
            this.ctx,
            this.img,
            this.width,
            this.height
        ] = [x,y,ctx,img,width,height]
    }

    draw() {

    }

    showValues() {
        console.log(this.x,this.y,this.ctx,this.img,this.width,this.height)
    }
}


