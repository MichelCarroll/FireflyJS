
//NAMESPACE
var MC = MC || {};


//CONSTRUCTOR
MC.Event = function(type, parameters) {
    this.type = type;
    this.parameters = (parameters || {});
};

MC.Event.prototype = function() {
    return {
        
    };
};


MC.EventType = {
    NULL: 0,
    MOVE_EVENT: 1
};