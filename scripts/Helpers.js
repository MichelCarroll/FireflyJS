
//NAMESPACE
var MC = MC || {};

MC.inheritPrototype = function (subType, superType) {
    var prototype = superType.prototype;
    prototype.constructor = subType;
    subType.prototype = prototype;
};

MC.assertIsHtmlTag = function (obj, expectedType) {
    if(MC.DEBUG_MODE && obj.nodeName !== expectedType.toUpperCase()) {
        console.log(obj);
        throw new Error(imageId + ' has to be an ' + expectedType + '. Current type: ' + (obj.nodeName));
    }
};

MC.assertHasMethod = function (obj, method) {
    if(MC.DEBUG_MODE && eval('typeof obj.'+method) == 'undefined') {
        console.log(obj);
        throw new Error('Object does not have the '+method+' method!');
    }
}

MC.assertInstanceOf = function (obj, className) {
    if(MC.DEBUG_MODE && !(obj instanceof eval(className))) {
        console.log(obj);
        throw new Error('Object has to be a '+className);
    }
}