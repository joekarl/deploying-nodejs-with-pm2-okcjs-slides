var express = require('express');
var app = express();

app.get('/*', function(req, res) {
    var r = Math.floor(Math.random() * 10000 % 9500);
    if (r == 0) {
        setTimeout(function(){
            throw new Error("DIE!!");
        }, 1);
    }
    res.send("Hello World");
});

app.listen(3000);
