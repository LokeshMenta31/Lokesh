var express =require('express');
var app =express();
var port = process.env.port || 7000;
app.get('/',function(req,res,next){
  res.send("Hello World");
});

app.listen(port);

