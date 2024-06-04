// To include a module, use the require() function with the name of the module:
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

// You can create your own modules, and easily include them in your applications.
// The following example creates a module that returns a date and time object: => Save myfirstmodule.js
exports. myDatetime = function(){
  return Date();
}

//Use the module "myfirstmodule" in a Node.js file:
var dt = require('./myfirstmodule')
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);
// To create a database in MySQL, use the "CREATE DATABASE" statement:
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});