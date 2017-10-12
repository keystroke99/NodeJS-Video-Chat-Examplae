var express = require('express');
var app = express();

app.listen(3000);
app.use(express.static('../public'));
console.log('App started at port 3000');