/*jshint laxcomma:true, asi:true */

module.exports = index

var fs = require('fs')

/**
 * Very basic git index that persists to a JSON file
 * Will write out the entire fill everytime a entry is added/removed
 */
function index (path) {

    var storage = {}
        
    /**
     * Add entry into index in form of an object with properties:
     * path, hash, type, lastmod
     *
     */
    function add(data) {
        if (data.hash === null) {
            delete storage[data.path] 
        } else {
            storage[data.path] = data;
            delete storage[data.path].path
        }
        persist(path);
    }
    
    function remove(path) {
        add({path : path, hash : null });
    }
    
    function diff(path, modtime) {
        return (storage[path].lastmod.getTime() != modtime)
    }
    
    function read(path) {
        return storage[path]
    }
}

function persist(path) {    
    fs.writeFile(path, JSON.stringify(storage), function (err) {
        if (err) 
            throw err;
        console.log('saved index to: '+path);
    });
}