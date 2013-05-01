# git-json-index

A git index as a json file


```javascript
//TODO
```
for now see test.js

## API

#### jsonindex(path)

Initialise with file path to json file
eg.

```javascript

var load = require('git-fs-repo')
  , init = require('git-init-index')
  , jsonindex = require('git-json-index')
  , index = require('git-index')
  
jsonindex('jsindex')  
index(jsonindex)

load('.git', function(err, git) {
  var head = git.ref('HEAD').hash
  git.find(head, gothead)

  function gothead(err, commit) {
    console.log("head commit:"+commit.message());
    init(commit, git.find.bind(git), index.add)
  }
})    
    
    
```

## Compatibility

Note that this is **NOT** intended to be compatible with the binary index file used 
by C Git.

## License

MIT
