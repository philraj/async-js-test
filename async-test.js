var async = require("async")
var prompt = require("prompt")
var log = console.log

var inputArray = []

prompt.start()
async.forever(storeInput, function (err) {
    log(err)
})

function storeInput (callback) {
    prompt.get(['input'], function (err, result) {
        if (err) return log(err)
        
        if (result.input === 'quit') {
            return
        }
        else {
            inputArray.push(result.input)
            console.log(inputArray)
            
            callback()
        }
    })    
}