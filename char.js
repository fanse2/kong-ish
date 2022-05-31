export class unit {
    constructor(x,y,ctx,img,width,height) {
        [
            this.x,
            this.y,
            this.ctx,
            this.img,
            this.width,
            this.height
        ] = [x, y, ctx, img, width, height]
    }

    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    update(dx,dy) {
        this.x += dx
        this.y += dy
    }

    showValues() {
        console.log(this.x,this.y,this.ctx,this.img,this.width,this.height)
    }
}


