var http = require ('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt' ,'UTF-8');
var myWriteStream= fs.createWriteStream(__dirname +'/writeMe.txt');

myReadStream.on('data' ,function (chunk){
  console.log('New chunk received.');
  myWriteStream.write(chunk);
});
