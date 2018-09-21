var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(1100, function(){
    console.log('listening on port 1100');
})
