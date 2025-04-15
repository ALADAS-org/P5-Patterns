// =================================================================================================
// ==================================     express_server.js     ====================================
// =================================================================================================
// https://www.tutorialspoint.com/expressjs/expressjs_static_files.htm
const express = require('express');
const http    = require('http');

const app  = express();
const PORT = 8080;

let router = express.Router();

const http_server = http.Server(app);

console.log(">> ==== p5-patterns 'http server' ====");
// console.log("__dirname: " + __dirname);

let www_path = __dirname + "\\public";
console.log("root path: " + www_path);

app.use(express.static(www_path));

// Serve script in 'node_modules/json_preprocessor' 
// https://stackoverflow.com/questions/27464168/how-to-include-scripts-located-inside-the-node-modules-folder
app.use('/scripts', express.static(__dirname + '/node_modules/json_preprocessor/public/src/json_preprocessor.js'));

// app.use(express.static(www_path));

//router.get('/', function(req, res) {
//   console.log("req: " + req);
//   res.send('GET route on things.');
//});

app.listen(PORT);
console.log(">> listening on port: " + PORT);
console.log("   ... Now use 'demo' shortcut to see the p5-patterns demo");
