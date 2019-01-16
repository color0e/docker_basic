// 디팬던시
var express = require('express');

var app = express();
var port = 3000;
var mysql=require('mysql');
var connection=mysql.createConnection({
        host: 'db',
        port: '3306',
        user: 'root',
        password: 'chain',
        database: 'chain'
});

app.get('/', function (req, res) {
res.send("hello docker");
connection.query('select * from test', function(err, rows, fields){
    if (err) callback(err, null);
    res.send(rows[0].printtext);
  });
});

app.listen(port, function () {
  console.log('Example app listening on port: ' + port);
});
