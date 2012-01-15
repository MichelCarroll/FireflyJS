
//NAMESPACE
var MC = MC || {};


//CONSTANTS


//CONSTRUCTOR
MC.AnimatedImage = function(imageId, tileWidth, tileHeight) {
    this.image = document.getElementById(imageId);
    MC.assertIsHtmlTag(this.image, 'img');
    
    this.imgWidth = this.image.width;
    this.imgHeight = this.image.height;
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
    this.horizTiles = parseInt(this.imgWidth / tileWidth);
    this.vertTiles = parseInt(this.imgHeight / tileHeight);
    this.animationLen = this.horizTiles * this.vertTiles;
};

MC.AnimatedImage.prototype = function() {

    //PRIVATE MEMBERS

    /**
     * Draws the animated image step at a specific location on a canvas context
     *
     * @context Object  The canvas context that will be used
     * @x       int     X Coordinate where the image will be drawn
     * @y       int     Y Coordinate where the image will be drawn
     * @step    int     The animation step, from left to right, and then from top to bottom
     */
    var drawStep = function(context, x, y, step) {

        if(step >= this.animationLen)
            throw new Error('Step ' + step +' requested of image ' + this.image.id + ' does not exist. Max step: ' + (this.animationLen-1))

        var tileHorPos = step % this.horizTiles;
        var tileVerPos = parseInt(step / this.vertTiles);

        //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        context.drawImage(this.image, 
            tileHorPos * this.tileWidth,
            tileVerPos * this.tileHeight, 
            this.tileWidth, this.tileHeight,
            x, y,
            this.tileWidth, this.tileHeight
        );
    };

    //PUBLIC MEMBERS
    return {
        drawStep: drawStep
    };
}();