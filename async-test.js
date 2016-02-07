var async = require("async")
var prompt = require("prompt")
var log = console.log

var inputArray = []

prompt.start()
beginning()

function beginning () {
    prompt.get(['input'], function (err, result) {
        if (err) return log(err);
        
        switch (result.input) {
            case 'forever':
                async.forever(storeInput, function (err) {
                    log(err)
                })
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