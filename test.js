/*jshint laxcomma:true, asi:true */

var load = require('git-fs-repo')
  , init = require('../git-init-index/index.js')
  , jsonindex = require('./index.js')('jsindex')
  , index = require('../git-index/index.js')(jsonindex)
  

load('.git', function(err, git) {
  var head = git.ref('HEAD').hash
  git.find(head, gothead)

  function gothead(err, commit) {
    console.log("head commit:"+commit.message());
    //make sure to bind index to add so that 'this' is the right object
    init(commit, git.find.bind(git), index.add.bind(index))
  }
})  