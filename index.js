/*jshint laxcomma:true, asi:true */

module.exports = jsonindex

var fs = require('fs')

/**
 * Very basic persistance for a git index that persists to a JSON file
 * Will write out the entire index everytime a change is made
 */
function jsonindex(path) {
    return function write(indexdata) {
        fs.writeFile(path, JSON.stringify(indexdata), function (err) {
            if (err) {
                throw err
            }
            console.log('saved index to: '+path)
        })
    }
}