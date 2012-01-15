
//NAMESPACE
var MC = MC || {};


//CONSTRUCTOR
MC.GameCharacter = function(animatedImage, startingX, startingY, startingDirection) {
    this.animatedImage = animatedImage;
    MC.assertInstanceOf(this.animatedImage, 'MC.AnimatedCharacterImage');
    
    this.xPos = (startingX || 0);
    this.yPos = (startingY || 0);
    this.direction = (startingDirection || MC.Enums.Directions.UP);
    
    this.moveStep = 0;
};

MC.GameCharacter.prototype = function() {

    //PRIVATE MEMBERS
    var move = function(direction) {
        this.direction = direction;
        switch(direction) {
            case MC.Enums.Directions.UP:
                this.yPos -= MC.GameCharacter.MOVE_SPEED;
                break;
            case MC.Enums.Directions.DOWN:
                this.yPos += MC.GameCharacter.MOVE_SPEED;
                break;
            case MC.Enums.Directions.RIGHT:
                this.xPos += MC.GameCharacter.MOVE_SPEED;
                break;
            case MC.Enums.Directions.LEFT:
                this.xPos -= MC.GameCharacter.MOVE_SPEED;
                break;
        }
    };
    
    var draw = function(context) {
        this.animatedImage.drawStep(context, 
            this.xPos, this.yPos, this.direction * 4
            + (this.moveStep++ % MC.AnimatedCharacterImage.CHARSET_MOVE_STEPS));
        
    };

    //PUBLIC MEMBERS
    return {
        move: move,
        draw: draw
    };
}();


MC.GameCharacter.MOVE_SPEED = 3;