
//NAMESPACE
var MC = MC || {};


//CONSTRUCTOR
MC.GameArea = function() {
    this.dynamicDrawables = new Array();
};

MC.GameArea.prototype = function() {

    //PRIVATE MEMBERS
    var pushDynamicDrawable = function(drawable) {
    
        MC.assertHasMethod(drawable, 'draw');
        
        //IF IT DOESN'T ALREADY CONTAIN IT
        if(this.dynamicDrawables.indexOf(drawable) === -1) {
            this.dynamicDrawables.push(drawable);
        }
        
    },
    
    updateDrawings = function(context) {
        for(drawable in this.dynamicDrawables) {
            this.dynamicDrawables[drawable].draw(context);
        }
    };
    
    //PUBLIC MEMBERS
    return {
        pushDynamicDrawable: pushDynamicDrawable,
        updateDrawings: updateDrawings
    };
}();