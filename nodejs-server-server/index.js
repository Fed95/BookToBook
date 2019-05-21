'use strict';

//---------------------------------------------------------------
// stuff done by us
//---------------------------------------------------------------


var pg = require('knex')({
  debug: true,
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: ['knex', 'public'],
  ssl: true,
});

console.log(10);

/*const pg = require('pg');

var client = new pg.Client({
  user: "uskrrpmxmxkafd",
  password: "963c19a4532e2f6d0e62ab4362c76dd687cba628464ce30bbce195c4b19c10ca",
  database: "d8c12qkjiak7qs",
  port: 5432,
  host: "ec2-54-246-92-116.eu-west-1.compute.amazonaws.com",
  ssl: true
});
client.connect();*/
console.log(1)
var promise = client.query('SELECT t.title FROM new_schema.book t ORDER BY id DESC, title DESC LIMIT 50');
promise.then(function (result) {console.log(result)});
console.log(2)

//---------------------------------------------------------------
//---------------------------------------------------------------



var fs = require('fs'),
    http = require('http');

var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var serverPort = 8080;

const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.use(express.static(__dirname+'/..'));

app.listen(process.env.PORT || 4000, function(){
  console.log('Your node js server is running');
});

// swaggerRouter configuration
var options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(path.join(__dirname,'api/swagger.yaml'), 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());

  // Start the server
  http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
  });

});
