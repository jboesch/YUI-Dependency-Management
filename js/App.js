var App = App || {};

// Script loader
App.Scripts = (function(){
    
    // Private parts
    var __scripts = [];
    
    return {
        // Add to the queue
        queue: function(){
            __scripts.push(Array.prototype.slice.call(arguments));
        },
        // Fetch from the queue
        fetch: function(){
            return __scripts;
        }
    }

})();