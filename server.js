let express = require('express')
let routes = require('./routes/routes')
let path = require('path')

let app = express() //creates web app

app.use(express.static(path.join(__dirname, 'hello-vue', 'dist')))

app.use('/api', routes) //tell app to use route we just created - api routes will all be relative to /api

//start the server running
let server = app.listen(process.env.PORT || 3000, function() {
    //app listens to requests on particular port with 3000 as local server if computer making request has not requested specific server
    console.log('Express server running on port', server.address().port)
})