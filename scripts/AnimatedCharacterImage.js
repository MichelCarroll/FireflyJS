
//NAMESPACE
var MC = MC || {};


//CONSTRUCTOR
MC.AnimatedCharacterImage = function(imageId) {
    
    //SUPER CONSTRUCTOR
    MC.AnimatedImage.call(this, imageId, 
        MC.AnimatedCharacterImage.CHARSET_TILE_WIDTH, 
        MC.AnimatedCharacterImage.CHARSET_TILE_HEIGHT);
};

MC.inheritPrototype(MC.AnimatedCharacterImage, MC.AnimatedImage);


//CONSTANTS
MC.AnimatedCharacterImage.CHARSET_TILE_WIDTH = 32;
MC.AnimatedCharacterImage.CHARSET_TILE_HEIGHT = 48;

MC.AnimatedCharacterImage.CHARSET_MOVE_STEPS = 4;