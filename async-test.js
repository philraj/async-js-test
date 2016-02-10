var async = require("async")
var prompt = require("prompt")
var log = console.log

var inputArray = []
var stopDisplayInput = false

prompt.start()
beginning()

function beginning () {
    prompt.get(['input'], function (err, result) {
        if (err) return log(err);
        
        switch (result.input) {
            case 'forever':
                async.forever(storeInput)
                break
            case 'dountil':
                async.doUntil(
                    displayInput,
                    function () { return stopDisplayInput },
                    beginning
                )
                break
            case 'auto':
                //add auto test here
                break
            case 'quit':
                return log("Goodbye!")
            default:
                beginning()
        }
    })
}

function storeInput (callback) {
    prompt.get(['input'], function (err, result) {
        if (err) return log(err)
        
        if (result.input === 'stop') {
            beginning()
        }
        else {
            inputArray.push(result.input)
            console.log(inputArray)
            
            callback()
        }
    })    
}

function displayInput (callback) {
    prompt.get(['input'], function (err, result) {
        if (err) return log(err)
        
        if (result.input === 'stop') {
            stopDisplayInput = true;
        }
        
        log(result.input)
        
        callback()
    })
}