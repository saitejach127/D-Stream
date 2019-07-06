var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));

// const ipfs = ipfsAPI('ipfs.infura.io', '5001', {protocol: 'https'})


app.listen(process.env.PORT || 3000, () => { console.log("server is On") })