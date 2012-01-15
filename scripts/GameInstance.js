
//NAMESPACE
var MC = MC || {};


//CONSTRUCTOR
MC.GameInstance = function(canvasId, area) {
    this.setCanvas.call(this, canvasId);
    this.setCurrentArea.call(this, area);
};

MC.GameInstance.prototype = function() {

    //PRIVATE MEMBERS
    var setPC = function(gameChar) {
        MC.assertHasMethod(gameChar, 'move');
        this.playerChar = gameChar;
        this.currentArea.pushDynamicDrawable(gameChar);
    },
    
    setCanvas = function(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if(!this.canvas) {
            throw new Error('Can\'t find canvas ID ' + canvasId);
        }
        else {
            this.drawingContext = this.canvas.getContext('2d');
            if(!this.drawingContext) {
                throw new Error('Failed to get drawing context of canvas #' + canvasId);
            }
        }
    },
    
    setCurrentArea = function(area) {
        MC.assertHasMethod(area, 'updateDrawings');
        this.currentArea = area; 
    },
    
    movePC = function(direction) {
        this.playerChar.move(direction);
    },
    
    redraw = function() {
        this.drawingContext.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.currentArea.updateDrawings(this.drawingContext);
    }
    
    //PUBLIC MEMBERS
    return {
        setPC: setPC,
        setCanvas: setCanvas,
        setCurrentArea: setCurrentArea,
        
        redraw: redraw,
        movePC: movePC
    };
}();