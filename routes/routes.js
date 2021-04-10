let express = require('express') //requiring = import in python
let router = express.Router() //creates object understands how to match diff requests to diff paths with functions that can respond to each request


router.get('/', function(req, res, next){
    //get is a fetch
    // '/' is a basic route path
    //req = request (from client), res = response(from server back to client), not using next here

    res.json({ 'message': 'Congratulations! The sun will come out tomorrow!'})

})

module.exports = router  //another file will be able to include or require this file, accessing this router object configured by mapping in path function