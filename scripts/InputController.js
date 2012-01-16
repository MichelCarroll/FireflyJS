
//NAMESPACE
var MC = MC || {};


//CONSTRUCTOR
MC.InputController = function(gameInstance) {
    MC.assertInstanceOf(gameInstance, 'MC.GameInstance');
    this.gameInstance = gameInstance;
    
    this.listeners = new Array();
};

MC.InputController.prototype = function() {

    //PRIVATE MEMBERS
    var registerListener = function(e, keyCode) {
        
        if(this.listeners[keyCode] === undefined) {
            this.listeners[keyCode] = new Array();
        }
        
        if(this.listeners[keyCode].indexOf(e) !== -1) {
            this.listeners[keyCode].push(e);
        }
    },
    
    unregisterListener = function(e, keyCode) {
        
        if(this.listeners[keyCode] !== undefined) {
            
            var index = this.listeners[keyCode].indexOf(e);
            if(index !== -1) {
                delete this.listeners[keyCode][index];
                
                if(!this.listeners[keyCode].length) {
                    delete this.listeners[keyCode];
                }
            }
        }
    },
    
    triggerKeyBehaviour = function(e, behaviour) {
        var keyCode = ('which' in e) ? e.which : e.keyCode;
        if(this.listeners[keyCode] !== undefined) {
            for(event in this.listeners[keyCode]) {
                event(behaviour);
            }
        }
    },
    
    triggerKeyDown = function(e) {
        triggerKeyBehaviour.call(this, e, MC.Enums.KeyBehavious.KEY_DOWN);
    },
    
    triggerKeyUp = function(e) {
        triggerKeyBehaviour.call(this, e, MC.Enums.KeyBehavious.KEY_UP);
    };
    
    //PUBLIC MEMBERS
    return {
        unregisterListener: unregisterListener,
        registerListener: registerListener,
        
        triggerKeyDown: triggerKeyDown,
        triggerKeyUp: triggerKeyUp
    };
}();