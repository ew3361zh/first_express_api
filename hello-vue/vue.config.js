module.exports = { //create object that describes how to configure out vue dev server
    devServer: { // telling vue dev server if any api requests are made by the vue client, they need to be sent to this specfic address
        proxy: 'http://127.0.0.1:3000' //web address of my express server, proxy means to send messages via the vue dev server and send them on to our express server running at this address
    }
}